let autocompleteService;
let selectedPlace = null;
let userLocation = null;
let debounceTimer = null;
let mapsLoaded = false;
let mapsLoading = false;
let pendingCallbacks = [];

function loadGoogleMapsAPI() {
    if (mapsLoaded || mapsLoading) {
        return;
    }
    
    mapsLoading = true;
    
    // Create and append the script tag dynamically
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCU3oOR56qFrQkloTur5D9EdtoCD9GyOGA&libraries=places&callback=initMap';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    console.log('Loading Google Maps API on demand...');
}

function initMap() {
    mapsLoaded = true;
    mapsLoading = false;
    
    // Initialize the Places services (no map needed for autocomplete service)
    autocompleteService = new google.maps.places.AutocompleteService();
    
    console.log('Google Maps API loaded successfully');
    
    // Execute any pending callbacks
    pendingCallbacks.forEach(callback => callback());
    pendingCallbacks = [];
    
    // If there's already text in the address field, trigger predictions
    const addressInput = document.getElementById('address');
    if (addressInput && addressInput.value.length >= 3) {
        fetchAddressPredictions(addressInput.value);
    }
}

function requestUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                console.log('Location services enabled - will bias autocomplete results to user location');
            },
            (error) => {
                console.log('Location access denied or failed - autocomplete will show general US results');
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 300000 // 5 minutes
            }
        );
    } else {
        console.log('Geolocation not supported - autocomplete will show general US results');
    }
}

function handleAddressInput(event) {
    const input = event.target.value.trim();
    
    // Clear selected place when user types (indicates manual entry)
    if (selectedPlace && selectedPlace.formatted_address !== input) {
        resetAddressSelection();
    }
    
    // Clear existing timer
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    
    // Hide dropdown if input is too short
    if (input.length < 3) {
        hideAutocompleteDropdown();
        return;
    }
    
    // Load Maps API if not loaded, then fetch predictions
    if (!mapsLoaded) {
        if (!mapsLoading) {
            loadGoogleMapsAPI();
        }
        // Queue the prediction fetch for when Maps API loads
        pendingCallbacks.push(() => fetchAddressPredictions(input));
    } else {
        // Set up debounced autocomplete request
        debounceTimer = setTimeout(() => {
            fetchAddressPredictions(input);
        }, 300);
    }
}

function fetchAddressPredictions(input) {
    if (!autocompleteService) {
        console.log('Autocomplete service not ready yet');
        return;
    }
    
    const request = {
        input: input,
        componentRestrictions: { country: 'us' },
        types: ['address']
    };
    
    // Add location bias if available
    if (userLocation) {
        request.location = new google.maps.LatLng(userLocation.lat, userLocation.lng);
        request.radius = 50000; // 50km radius
    }
    
    autocompleteService.getPlacePredictions(request, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            displayPredictions(predictions);
        } else {
            hideAutocompleteDropdown();
        }
    });
}

function displayPredictions(predictions) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!dropdown) return;
    
    dropdown.innerHTML = '';
    
    if (predictions.length === 0) {
        hideAutocompleteDropdown();
        return;
    }
    
    predictions.forEach((prediction, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.textContent = prediction.description;
        item.dataset.placeId = prediction.place_id;
        
        item.addEventListener('click', () => {
            selectPrediction(prediction);
        });
        
        dropdown.appendChild(item);
    });
    
    dropdown.style.display = 'block';
}

function selectPrediction(prediction) {
    const addressInput = document.getElementById('address');
    if (!addressInput) return;
    
    addressInput.value = prediction.description;
    
    // Store the selected place data
    selectedPlace = {
        place_id: prediction.place_id,
        formatted_address: prediction.description
    };
    
    // Add visual feedback that valid address is selected
    addressInput.style.borderColor = '#10b981';
    addressInput.style.backgroundColor = '#f0fdf4';
    
    hideAutocompleteDropdown();
}

function hideAutocompleteDropdown() {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

function handleAddressKeydown(event) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!dropdown) return;
    
    if (event.key === 'Enter') {
        event.preventDefault();
        
        // Select first item if dropdown is visible
        if (dropdown.style.display === 'block') {
            const firstItem = dropdown.querySelector('.autocomplete-item');
            if (firstItem) {
                const placeId = firstItem.dataset.placeId;
                const prediction = {
                    place_id: placeId,
                    description: firstItem.textContent
                };
                selectPrediction(prediction);
            }
        }
    } else if (event.key === 'Escape') {
        hideAutocompleteDropdown();
    }
}

function handleAddressBlur(event) {
    // Delay hiding to allow for click events on dropdown items
    setTimeout(() => {
        hideAutocompleteDropdown();
    }, 200);
}

function handleAddressFocus(event) {
    // Request location only when user first interacts with address field
    if (userLocation === null) {
        requestUserLocation();
    }
    
    // Load Google Maps API on first focus if not loaded
    if (!mapsLoaded && !mapsLoading) {
        loadGoogleMapsAPI();
    }
    
    const input = event.target.value.trim();
    if (input.length >= 3 && mapsLoaded) {
        fetchAddressPredictions(input);
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    // Validate that a valid address was selected from autocomplete
    const addressInput = document.getElementById('address');
    if (!selectedPlace) {
        addressInput.focus();
        addressInput.setCustomValidity('Please select a valid address from the dropdown suggestions');
        addressInput.reportValidity();
        return;
    } else {
        addressInput.setCustomValidity('');
    }
    
    // Validate phone number
    const phoneInput = document.getElementById('phone');
    if (!validateUSPhoneNumber(phoneInput.value)) {
        phoneInput.focus();
        phoneInput.setCustomValidity('Please enter a valid US phone number');
        phoneInput.reportValidity();
        return;
    } else {
        phoneInput.setCustomValidity('');
    }
    
    // Get form element and submit button
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading-spinner"></span>Sending...';
    submitButton.style.opacity = '0.7';
    
    // Create FormData for multipart/form-data submission
    const formData = new FormData(form);
    
    // Add selected place data to FormData
    formData.append('formatted_address', selectedPlace.formatted_address);
    formData.append('place_id', selectedPlace.place_id);
    
    try {
        // Submit to Google Apps Script endpoint
        // Note: Google Apps Script requires no-cors mode to avoid CORS issues
        const response = await fetch('https://script.google.com/macros/s/AKfycbzDjwqIJm7VNBwSno6EwY4XGaGocW8gnzZR-8eDMm-bKQbds0m7F6MjtcYyVrtqy5Fd/exec', {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            body: formData
        });
        
        // With no-cors mode, we can't read the response
        // But the form will still be submitted successfully
        // Google Apps Script will process it on their end
        
        // Show success modal (assuming success since no-cors doesn't allow reading response)
        showSuccessModal();
        
        // Reset form
        form.reset();
        resetAddressSelection();
        
        console.log('Form submitted successfully to Google Apps Script');
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message to user
        alert('We encountered an error submitting your request. Please try again or call us directly at the number above.');
        
    } finally {
        // Re-enable submit button and restore original text
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        submitButton.style.opacity = '1';
    }
}

function validateUSPhoneNumber(phone) {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Check if it's a valid US phone number (10 digits, optionally starting with 1)
    if (cleaned.length === 10) {
        return true;
    } else if (cleaned.length === 11 && cleaned[0] === '1') {
        return true;
    }
    
    return false;
}

function formatPhoneNumber(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ''); // Remove non-digits
    let formattedValue = '';
    
    if (value.length > 0) {
        if (value.length <= 3) {
            formattedValue = `(${value}`;
        } else if (value.length <= 6) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    
    input.value = formattedValue;
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    const progressBar = document.getElementById('progressBar');
    
    if (!modal || !progressBar) return;
    
    // Show the modal
    modal.style.display = 'flex';
    
    // Reset and start progress bar animation
    progressBar.style.width = '100%';
    
    // Animate progress bar shrinking to 0 over 2 seconds
    setTimeout(() => {
        progressBar.style.transition = 'width 2s linear';
        progressBar.style.width = '0%';
    }, 100);
    
    // Close modal after 2.2 seconds (allowing for animation completion)
    setTimeout(() => {
        modal.style.display = 'none';
        progressBar.style.transition = 'none';
        progressBar.style.width = '100%';
    }, 2200);
}

function resetAddressSelection() {
    // Clear selected place
    selectedPlace = null;
    
    // Reset address input styling
    const addressInput = document.getElementById('address');
    if (addressInput) {
        addressInput.style.borderColor = '';
        addressInput.style.backgroundColor = '';
    }
}

// Handle Google Maps API loading errors
window.gm_authFailure = function() {
    console.error('Google Maps API authentication failed. Please check your API key.');
    alert('Google Maps API authentication failed. Please check your API key and ensure the following APIs are enabled:\n- Maps JavaScript API\n- Places API');
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const addressInput = document.getElementById('address');
    
    if (addressInput) {
        // Add event listeners for custom autocomplete
        addressInput.addEventListener('input', handleAddressInput);
        addressInput.addEventListener('keydown', handleAddressKeydown);
        addressInput.addEventListener('blur', handleAddressBlur);
        addressInput.addEventListener('focus', handleAddressFocus);
    }

    // Initialize form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhoneNumber);
    }
    
    console.log('Contact form initialized. Google Maps API will load on demand when address field is focused.');
});