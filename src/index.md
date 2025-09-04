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
    <div class="relative container py-24">
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Professional Home Repair Services
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
                Quality workmanship, reliable service, and competitive pricing for all your home maintenance needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact/" class="bg-white text-primary-600 btn hover:bg-gray-50">
                    Get Free Quote
                </a>
                <a href="/services/" class="btn-secondary">
                    View Services
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="section bg-white">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="section-title">
                Why Choose Home Repair Services?
            </h2>
            <p class="section-subtitle">
                We're committed to providing exceptional service and quality workmanship for every project, big or small.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center p-6"><div class="feature-icon"><i data-lucide="shield-check" class="w-8 h-8"></i></div><h3 class="text-xl font-semibold mb-3">Licensed & Insured</h3><p class="text-gray-600">Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p></div><div class="text-center p-6"><div class="feature-icon"><i data-lucide="zap" class="w-8 h-8"></i></div><h3 class="text-xl font-semibold mb-3">Fast & Reliable</h3><p class="text-gray-600">Quick response times and reliable service to get your repairs completed efficiently.</p></div><div class="text-center p-6"><div class="feature-icon"><i data-lucide="dollar-sign" class="w-8 h-8"></i></div><h3 class="text-xl font-semibold mb-3">Competitive Pricing</h3><p class="text-gray-600">Fair, transparent pricing with no hidden fees. Get quality work at affordable rates.</p></div></div>
    </div>
</section>

<!-- Services Overview -->
<section class="section-alt">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="section-title">
                Our Services
            </h2>
            <p class="section-subtitle">
                From minor repairs to major installations, we handle all aspects of home maintenance and improvement.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">{% for service in site.services %}<div class="card card-padding"><div class="service-icon">{{ service.icon | safe }}</div><h3 class="text-xl font-semibold mb-3">{{ service.name }}</h3><p class="text-gray-600 mb-4">{{ service.description }}</p><ul class="text-sm text-gray-500 space-y-1">{% for feature in service.features %}<li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-primary-500 mr-2"></i>{{ feature }}</li>{% endfor %}</ul></div>{% endfor %}
        </div>
        <div class="text-center mt-12">
            <a href="/services/" class="btn-primary">
                View All Services
            </a>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="section bg-white">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="section-title">
                How We Work
            </h2>
            <p class="section-subtitle">
                Our simple, straightforward process ensures quality results and customer satisfaction every time.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="text-center p-6"><div class="feature-icon bg-primary-600 text-white text-xl font-bold">1</div><h3 class="text-lg font-semibold mb-2">Contact Us</h3><p class="text-gray-600 text-sm">Call or fill out our contact form to describe your repair needs.</p></div><div class="text-center p-6"><div class="feature-icon bg-primary-600 text-white text-xl font-bold">2</div><h3 class="text-lg font-semibold mb-2">Free Estimate</h3><p class="text-gray-600 text-sm">We provide a detailed, no-obligation quote for your project.</p></div><div class="text-center p-6"><div class="feature-icon bg-primary-600 text-white text-xl font-bold">3</div><h3 class="text-lg font-semibold mb-2">Schedule Work</h3><p class="text-gray-600 text-sm">We coordinate a convenient time that works with your schedule.</p></div><div class="text-center p-6"><div class="feature-icon bg-primary-600 text-white text-xl font-bold">4</div><h3 class="text-lg font-semibold mb-2">Quality Work</h3><p class="text-gray-600 text-sm">Our professionals complete your repair with attention to detail.</p></div></div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="section-alt">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="section-title">
                What Our Customers Say
            </h2>
            <p class="section-subtitle">
                Don't just take our word for it. Here's what homeowners in our community have to say about our services.
            </p>
        </div>
        <div class="testimonials-carousel">
            <div class="px-4">
                <div class="card p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"Outstanding service! They fixed our plumbing issue quickly and professionally. The technician was knowledgeable, courteous, and left everything spotless. Highly recommend!"</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 1</div>
                    <div class="text-gray-500">Homeowner, Northside</div>
                </div>
            </div>
            <div class="px-4">
                <div class="card p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"Emergency HVAC repair on a weekend - they came within an hour! Fair pricing, excellent work, and the technician explained everything clearly. Couldn't be happier with the service."</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 2</div>
                    <div class="text-gray-500">Homeowner, Downtown</div>
                </div>
            </div>
            <div class="px-4">
                <div class="card p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p class="text-lg text-gray-600 mb-6 italic leading-relaxed">"They've been our go-to for all home repairs for 3 years now. Always reliable, professional, and honest about what needs to be done. True professionals who care about their customers."</p>
                    <div class="font-semibold text-gray-900 text-lg">- Customer 3</div>
                    <div class="text-gray-500">Homeowner, Eastside</div>
                </div>
            </div>
            <div class="px-4">
                <div class="card p-8 mx-auto max-w-lg">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
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
<section class="section bg-primary-600 text-white">
    <div class="container text-center">
        <h2 class="section-title text-white">
            Ready to Fix Your Home?
        </h2>
        <p class="text-xl mb-8 text-primary-100 section-subtitle">
            Don't let small problems become big headaches. Contact us today for reliable, professional home repair services.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:{{ site.contact.phone }}" class="bg-white text-primary-600 btn hover:bg-gray-50">
                Call {{ site.contact.phone }}
            </a>
            <a href="/contact/" class="btn-secondary">
                Get Free Quote
            </a>
        </div>
    </div>
</section>