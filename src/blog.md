---
layout: base.njk
title: "Blog"
description: "Home repair tips, maintenance guides, and expert advice from the professionals at Home Repair Services."
---

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Home Repair Blog</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Expert tips, maintenance guides, and helpful advice to keep your home in perfect condition.
        </p>
    </div>
</section>

<!-- Blog Posts -->
<section class="py-20 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
            {% for post in collections.blog | reverse %}
            <article class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-on-scroll stagger-animation">
                {% if post.data.featuredImage %}
                <div class="relative h-48 md:h-64 overflow-hidden bg-gray-100">
                    <img src="{{ post.data.featuredImage }}" 
                         alt="{{ post.data.imageAlt or post.data.title }}" 
                         class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                         loading="lazy">
                    <div class="absolute top-4 left-4">
                        <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">{{ post.data.category }}</span>
                    </div>
                </div>
                {% endif %}
                <div class="p-8">
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div class="flex items-center space-x-4">
                            <time datetime="{{ post.date | date('%Y-%m-%d') }}">{{ post.date | date('%B %d, %Y') }}</time>
                            {% if post.data.author %}
                            <span>by {{ post.data.author }}</span>
                            {% endif %}
                            {% if post.data.readTime %}
                            <span>{{ post.data.readTime }}</span>
                            {% endif %}
                        </div>
                        {% if not post.data.featuredImage and post.data.category %}
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">{{ post.data.category }}</span>
                        {% endif %}
                    </div>
                    
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
                        <a href="{{ post.url }}">{{ post.data.title }}</a>
                    </h2>
                    
                    <p class="text-gray-600 mb-6 leading-relaxed">{{ post.data.excerpt }}</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="{{ post.url }}" class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                            Read More
                            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        {% if post.data.tags %}
                        <div class="flex flex-wrap gap-2">
                            {% for tag in post.data.tags | slice(0, 3) %}
                            <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">#{{ tag }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
        
        <!-- Newsletter Signup -->
        <div class="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p class="text-gray-600 mb-6">Get the latest home maintenance tips and repair advice delivered to your inbox.</p>
            <div class="max-w-md mx-auto flex gap-4">
                <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <button class="btn-primary">Subscribe</button>
            </div>
        </div>
    </div>
</section>