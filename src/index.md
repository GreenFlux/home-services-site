---
layout: base.njk
title: "Professional Home Repair Services"
description: "Trusted home repair and maintenance services for all your residential needs. Quality workmanship, reliable service, and competitive pricing."
---

<!-- Hero Section -->
<section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
    <div class="absolute inset-0">
        <img src="/images/banner.jpg" alt="Home Services" class="w-full h-full object-cover opacity-20">
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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

<!-- Testimonials Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what homeowners in our community have to say about our services.
            </p>
        </div>
        
        <div class="testimonials-carousel">
            <div class="px-4">
                <div class="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"Outstanding service! They fixed our plumbing issue quickly and professionally. The technician was knowledgeable, courteous, and left everything spotless. Highly recommend!"</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 1</div>
                    <div class="text-gray-500">Homeowner, Northside</div>
                </div>
            </div>
            <div class="px-4">
                <div class="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"Emergency HVAC repair on a weekend - they came within an hour! Fair pricing, excellent work, and the technician explained everything clearly. Couldn't be happier with the service."</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 2</div>
                    <div class="text-gray-500">Homeowner, Downtown</div>
                </div>
            </div>
            <div class="px-4">
                <div class="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"They've been our go-to for all home repairs for 3 years now. Always reliable, professional, and honest about what needs to be done. True professionals who care about their customers."</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 3</div>
                    <div class="text-gray-500">Homeowner, Eastside</div>
                </div>
            </div>
            <div class="px-4">
                <div class="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"Complete bathroom renovation was perfect! They stayed on budget, finished on time, and the quality is exceptional. The team was respectful of our home and family. Absolutely recommend!"</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 4</div>
                    <div class="text-gray-500">Homeowner, Westside</div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .slick-dots {
            bottom: -40px;
        }
        .slick-dots li button:before {
            color: #9CA3AF;
            font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
            color: #3B82F6;
        }
        .slick-prev, .slick-next {
            z-index: 1;
        }
        .slick-prev {
            left: -40px;
        }
        .slick-next {
            right: -40px;
        }
        .slick-prev:before, .slick-next:before {
            color: #3B82F6;
            font-size: 30px;
        }
        @media (max-width: 768px) {
            .slick-prev {
                left: 10px;
            }
            .slick-next {
                right: 10px;
            }
        }
    </style>
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