---
layout: base.njk
title: "Our Services"
description: "Comprehensive home repair and maintenance services including plumbing, electrical, HVAC, flooring, painting, and general repairs."
---

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Professional home repair and maintenance services to keep your property in perfect condition.
        </p>
    </div>
</section>

<!-- Services Grid -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">{% for service in site.services %}<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-on-scroll stagger-animation">{% if loop.index0 % 2 == 0 %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services1.jpg')"></div>{% else %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services2.jpg')"></div>{% endif %}<div class="p-8"><div class="flex items-center mb-4"><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"><div class="w-6 h-6">{{ service.icon | safe }}</div></div><h3 class="text-2xl font-bold text-gray-900">{{ service.name }}</h3></div><p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p><div class="mb-6"><h4 class="font-semibold text-gray-900 mb-3">What We Offer:</h4><div class="grid grid-cols-1 sm:grid-cols-2 gap-2">{% for feature in service.features %}<div class="flex items-center text-sm text-gray-600"><svg class="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>{{ feature }}</div>{% endfor %}</div></div><a href="/contact/" class="inline-flex items-center bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">Get Quote<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div>{% endfor %}
        </div>
    </div>
</section>

<!-- Emergency Services -->
<section class="py-20 bg-red-50 border-l-4 border-red-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="flex-1">
                <div class="flex items-center mb-4">
                    <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    <h2 class="text-3xl font-bold text-gray-900">Emergency Services Available</h2>
                </div>
                <p class="text-lg text-gray-700 mb-6">
                    When urgent repairs can't wait, we're here to help. Our emergency services are available 24/7 for critical issues like:
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="flex items-center text-gray-700">
                        <span class="text-red-500 mr-2 font-bold">•</span>
                        Burst pipes and water leaks
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="text-red-500 mr-2 font-bold">•</span>
                        Electrical emergencies
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="text-red-500 mr-2 font-bold">•</span>
                        HVAC system failures
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="text-red-500 mr-2 font-bold">•</span>
                        Security concerns
                    </div>
                </div>
                <a href="tel:{{ site.contact.phone }}" class="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    Call Now: {{ site.contact.phone }}
                </a>
            </div>
            <div class="flex-1 lg:text-right">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900">Quick Response Promise</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Emergency Response:</span>
                            <span class="font-semibold text-red-600">Within 1 Hour</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Standard Service:</span>
                            <span class="font-semibold text-primary-600">Same or Next Day</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Free Estimates:</span>
                            <span class="font-semibold text-green-600">Always</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Service Areas -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Service Areas</h2>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We proudly serve homeowners throughout the greater metropolitan area with reliable, professional repair services.
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div class="text-gray-700 py-2">Downtown</div>
            <div class="text-gray-700 py-2">Northside</div>
            <div class="text-gray-700 py-2">Eastside</div>
            <div class="text-gray-700 py-2">Westside</div>
            <div class="text-gray-700 py-2">Southside</div>
            <div class="text-gray-700 py-2">Suburbs</div>
            <div class="text-gray-700 py-2">Metro Area</div>
            <div class="text-gray-700 py-2">And More!</div>
        </div>
        
        <p class="text-gray-600 mb-8">
            Don't see your area listed? Give us a call - we may still be able to help!
        </p>
        
        <a href="/contact/" class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
            Request Service in Your Area
        </a>
    </div>
</section>