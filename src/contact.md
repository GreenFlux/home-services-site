---
layout: base.njk
title: "Contact Us"
description: "Get in touch with Home Repair Services for a free estimate on your home repair and maintenance needs. Professional service you can trust."
---

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Ready to get started? Contact us today for a free estimate on your home repair project.
        </p>
    </div>
</section>

<!-- Contact Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Contact Information -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <div class="space-y-6 mb-8">
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Phone</h3>
                            <p class="text-gray-600">{{ site.contact.phone }}</p>
                            <p class="text-sm text-gray-500">Available for emergencies 24/7</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                            <p class="text-gray-600">{{ site.contact.email }}</p>
                            <p class="text-sm text-gray-500">We respond within 24 hours</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Service Area</h3>
                            <p class="text-gray-600">{{ site.contact.address }}</p>
                            <p class="text-sm text-gray-500">Serving the greater metro area</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="m12.5 7-1 0 0 6 5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Business Hours</h3>
                            <p class="text-gray-600">{{ site.contact.hours }}</p>
                            <p class="text-sm text-gray-500">Emergency services available anytime</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Contact Form -->
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Request Free Estimate</h2>
                <form id="contactForm" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input type="text" id="fullName" name="fullName" required 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input type="email" id="email" name="email" required
                               class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                    </div>
                    <div class="address-container">
                        <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Physical Address *</label>
                        <input type="text" id="address" name="address" required placeholder="Start typing your address..."
                               class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                        <div id="autocomplete-dropdown" class="autocomplete-dropdown"></div>
                    </div>
                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                        <select id="subject" name="subject" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                            <option value="">Select a service</option>
                            <option value="plumbing">Plumbing Services</option>
                            <option value="electrical">Electrical Work</option>
                            <option value="hvac">HVAC Services</option>
                            <option value="flooring">Flooring Installation</option>
                            <option value="painting">Interior Painting</option>
                            <option value="general">General Repairs</option>
                            <option value="emergency">Emergency Repair</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
                        <textarea id="message" name="message" rows="4" required 
                                  placeholder="Please describe your repair needs, preferred timeline, and any other relevant details..."
                                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                        Send Message & Get Free Estimate
                    </button>
                    <p class="text-sm text-gray-500 text-center">
                        We'll respond within 24 hours with your free, no-obligation estimate.
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Emergency Services -->
<section class="py-12 bg-red-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div class="flex items-center justify-center mb-3">
                <svg class="w-8 h-8 mr-3 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                <h3 class="text-lg font-bold text-red-900">Emergency Repairs?</h3>
            </div>
            <p class="text-red-700 mb-4">For urgent repairs that can't wait, call us immediately:</p>
            <a href="tel:{{ site.contact.phone }}" style="display: inline-flex; align-items: center; background-color: #dc2626; color: white; padding: 12px 48px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: background-color 0.3s;">
                <svg style="width: 20px; height: 20px; margin-right: 8px;" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span style="font-size: 16px;">CALL NOW: {{ site.contact.phone }}</span>
            </a>
        </div>
    </div>
</section>

<!-- Success Modal -->
<div id="successModal" class="modal" style="display: none;">
    <div class="modal-content">
        <h2 class="text-2xl font-bold text-primary-600 mb-4">Thank You!</h2>
        <p class="text-gray-700 mb-6">We've received your request and will contact you within 24 hours with your free estimate.</p>
        <div class="progress-bar-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
</div>

<!-- Why Choose Us -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Home Repair Services?</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                When you contact us, you're choosing a team committed to quality, reliability, and customer satisfaction.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Fast Response</h3>
                <p class="text-gray-600 text-sm">Same-day response to all inquiries and emergency service available 24/7.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Free Estimates</h3>
                <p class="text-gray-600 text-sm">No hidden costs - get your detailed quote at absolutely no charge.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M7 8.5L9.5 7 12 8.5 14.5 7 17 8.5V15c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V8.5z"/></svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Licensed & Insured</h3>
                <p class="text-gray-600 text-sm">Fully licensed professionals with comprehensive insurance for your peace of mind.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p class="text-gray-600 text-sm">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
            </div>
        </div>
    </div>
</section>

<style>
.address-container {
    position: relative;
}

.autocomplete-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #d1d5db;
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
    display: none;
}

.autocomplete-item {
    padding: 12px 16px;
    border-bottom: 1px solid #f3f4f6;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.autocomplete-item:hover {
    background-color: #f9fafb;
}

.autocomplete-item:last-child {
    border-bottom: none;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    text-align: center;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%;
    margin: 0 1rem;
}

.progress-bar-container {
    width: 100%;
    height: 8px;
    background-color: #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 1rem;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    border-radius: 0.5rem;
    width: 100%;
    transition: width 2s linear;
}

/* Form styling */
#contactForm input,
#contactForm select,
#contactForm textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
}

#contactForm input[type="tel"] {
    text-align: left;
}

#contactForm button[type="submit"] {
    border: none;
    outline: none;
}
</style>

<script src="/assets/js/contact-form.js"></script>
<script async defer 
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU3oOR56qFrQkloTur5D9EdtoCD9GyOGA&libraries=places&callback=initMap">
</script>