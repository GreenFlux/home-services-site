---
layout: base.njk
title: "Professional Home Repair Services"
description: "Trusted home repair and maintenance services for all your residential needs. Quality workmanship, reliable service, and competitive pricing."
---

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Professional Home Repair Services
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
                Quality workmanship, reliable service, and competitive pricing for all your home maintenance needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact/" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Get Free Quote
                </a>
                <a href="/services/" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                    View Services
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Home Repair Services?
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing exceptional service and quality workmanship for every project, big or small.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center p-6"><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 14H2l5-5h10l5 5h-5l-5 10-5-10z"/></svg></div><h3 class="text-xl font-semibold mb-3">Licensed & Insured</h3><p class="text-gray-600">Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p></div><div class="text-center p-6"><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9v8l10-12h-9V2z"/></svg></div><h3 class="text-xl font-semibold mb-3">Fast & Reliable</h3><p class="text-gray-600">Quick response times and reliable service to get your repairs completed efficiently.</p></div><div class="text-center p-6"><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M7 13l3 3 7-7"/></svg></div><h3 class="text-xl font-semibold mb-3">Competitive Pricing</h3><p class="text-gray-600">Fair, transparent pricing with no hidden fees. Get quality work at affordable rates.</p></div></div>
    </div>
</section>

<!-- Services Overview -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                From minor repairs to major installations, we handle all aspects of home maintenance and improvement.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">{% for service in site.services %}<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">{{ service.icon | safe }}</div><h3 class="text-xl font-semibold mb-3">{{ service.name }}</h3><p class="text-gray-600 mb-4">{{ service.description }}</p><ul class="text-sm text-gray-500 space-y-1">{% for feature in service.features %}<li class="flex items-center"><svg class="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>{{ feature }}</li>{% endfor %}</ul></div>{% endfor %}
        </div>
        
        <div class="text-center mt-12">
            <a href="/services/" class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                View All Services
            </a>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Work
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Our simple, straightforward process ensures quality results and customer satisfaction every time.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="text-center p-6"><div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div><h3 class="text-lg font-semibold mb-2">Contact Us</h3><p class="text-gray-600 text-sm">Call or fill out our contact form to describe your repair needs.</p></div><div class="text-center p-6"><div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div><h3 class="text-lg font-semibold mb-2">Free Estimate</h3><p class="text-gray-600 text-sm">We provide a detailed, no-obligation quote for your project.</p></div><div class="text-center p-6"><div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div><h3 class="text-lg font-semibold mb-2">Schedule Work</h3><p class="text-gray-600 text-sm">We coordinate a convenient time that works with your schedule.</p></div><div class="text-center p-6"><div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div><h3 class="text-lg font-semibold mb-2">Quality Work</h3><p class="text-gray-600 text-sm">Our professionals complete your repair with attention to detail.</p></div></div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-primary-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your Home?
        </h2>
        <p class="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Don't let small problems become big headaches. Contact us today for reliable, professional home repair services.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:{{ site.contact.phone }}" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Call {{ site.contact.phone }}
            </a>
            <a href="/contact/" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Get Free Quote
            </a>
        </div>
    </div>
</section>