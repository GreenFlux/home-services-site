---
layout: base.njk
title: "Our Services"
description: "Comprehensive home repair and maintenance services including plumbing, electrical, HVAC, flooring, painting, and general repairs."
---

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white section">
    <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Professional home repair and maintenance services to keep your property in perfect condition.
        </p>
    </div>
</section>

<!-- Services Grid -->
<section class="section-alt">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">{% for service in site.services %}<div class="card overflow-hidden hover:shadow-xl animate-on-scroll stagger-animation">{% if loop.index0 == 0 %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services1.jpg')"></div>{% elif loop.index0 == 1 %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services2.jpg')"></div>{% elif loop.index0 == 2 %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services3.jpg')"></div>{% elif loop.index0 == 3 %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services4.jpg')"></div>{% elif loop.index0 == 4 %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services1.jpg')"></div>{% else %}<div class="h-48 bg-cover bg-center" style="background-image: url('/images/services2.jpg')"></div>{% endif %}<div class="p-8"><div class="flex items-center mb-4"><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"><div class="w-6 h-6">{{ service.icon | safe }}</div></div><h3 class="text-2xl font-bold text-gray-900">{{ service.name }}</h3></div><p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p><div class="mb-6"><h4 class="font-semibold text-gray-900 mb-3">What We Offer:</h4><div class="grid grid-cols-1 sm:grid-cols-2 gap-2">{% for feature in service.features %}<div class="flex items-center text-sm text-gray-600"><i data-lucide="check" class="w-4 h-4 text-primary-500 mr-2"></i>{{ feature }}</div>{% endfor %}</div></div><a href="/contact/" class="inline-flex items-center bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">Get Quote<i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i></a></div></div>{% endfor %}
        </div>
    </div>
</section>

<!-- Emergency Services -->
<section class="section bg-red-50 border-l-4 border-red-500">
    <div class="container">
        <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="flex-1">
                <div class="flex items-center mb-4">
                    <i data-lucide="alert-circle" class="w-8 h-8 mr-3 text-red-600"></i>
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
                    <i data-lucide="phone" class="w-6 h-6 mr-2"></i>
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
<section class="section bg-white">
    <div class="container text-center">
        <h2 class="section-title mb-8">Service Areas</h2>
        <p class="section-subtitle mb-12">
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
        
        <a href="/contact/" class="btn-primary">
            Request Service in Your Area
        </a>
    </div>
</section>