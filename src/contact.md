---
layout: base.njk
title: "Contact Us"
description: "Get in touch with Home Repair Services for a free estimate on your home repair and maintenance needs. Professional service you can trust."
---

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white section">
    <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Ready to get started? Contact us today for a free estimate on your home repair project.
        </p>
    </div>
</section>

<!-- Contact Section -->
<section class="section-alt">
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Contact Information -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <div class="space-y-6 mb-8">
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <i data-lucide="phone" class="w-6 h-6 text-primary-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Phone</h3>
                            <p class="text-gray-600">{{ site.contact.phone }}</p>
                            <p class="text-sm text-gray-500">Available for emergencies 24/7</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <i data-lucide="mail" class="w-6 h-6 text-primary-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                            <p class="text-gray-600">{{ site.contact.email }}</p>
                            <p class="text-sm text-gray-500">We respond within 24 hours</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <i data-lucide="map-pin" class="w-6 h-6 text-primary-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Service Area</h3>
                            <p class="text-gray-600">{{ site.contact.address }}</p>
                            <p class="text-sm text-gray-500">Serving the greater metro area</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <i data-lucide="clock" class="w-6 h-6 text-primary-600"></i>
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
                <i data-lucide="alert-triangle" class="w-8 h-8 mr-3 text-red-600"></i>
                <h3 class="text-lg font-bold text-red-900">Emergency Repairs?</h3>
            </div>
            <p class="text-red-700 mb-4">For urgent repairs that can't wait, call us immediately:</p>
            <a href="tel:{{ site.contact.phone }}" style="display: inline-flex; align-items: center; background-color: #dc2626; color: white; padding: 12px 48px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: background-color 0.3s;">
                <i data-lucide="phone" style="width: 20px; height: 20px; margin-right: 8px;"></i>
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
<section class="section bg-white">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Home Repair Services?</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                When you contact us, you're choosing a team committed to quality, reliability, and customer satisfaction.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="zap" class="w-8 h-8 text-primary-600"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2">Fast Response</h3>
                <p class="text-gray-600 text-sm">Same-day response to all inquiries and emergency service available 24/7.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="dollar-sign" class="w-8 h-8 text-primary-600"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2">Free Estimates</h3>
                <p class="text-gray-600 text-sm">No hidden costs - get your detailed quote at absolutely no charge.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="award" class="w-8 h-8 text-primary-600"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2">Licensed & Insured</h3>
                <p class="text-gray-600 text-sm">Fully licensed professionals with comprehensive insurance for your peace of mind.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="check-circle" class="w-8 h-8 text-primary-600"></i>
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