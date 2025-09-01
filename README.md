# Home Repair Services Website

A modern, responsive website built with Eleventy (11ty) and UnoCSS for a home repair services business. Features include Google Maps address autocomplete, responsive design, blog system, and optimized for Cloudflare Pages deployment.

## Features

- **Static Site Generation**: Built with Eleventy for fast loading and excellent SEO
- **Modern Styling**: UnoCSS utility-first CSS framework for efficient styling
- **Responsive Design**: Mobile-first approach that works on all devices
- **Google Maps Integration**: Address autocomplete with location bias
- **Blog System**: Markdown-based blog with automatic routing
- **Contact Form**: Advanced form with validation and Google Maps Places API
- **Fast Deployment**: Optimized for Cloudflare Pages with GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Maps API key (for address autocomplete)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd home-repair-services
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Google Maps API:
   - Get an API key from Google Cloud Console
   - Enable Maps JavaScript API and Places API
   - Replace the API key in `src/contact.md`

### Development

Start the development server:
```bash
npm run dev
```

This will:
- Start Eleventy with live reload on `http://localhost:8080`
- Watch and compile UnoCSS styles
- Monitor file changes for automatic rebuilds

### Building

Build the site for production:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
├── src/
│   ├── _data/
│   │   └── site.json          # Site configuration and data
│   ├── _includes/
│   │   └── layouts/
│   │       ├── base.njk       # Base layout template
│   │       └── post.njk       # Blog post layout
│   ├── assets/
│   │   ├── css/               # Generated CSS files
│   │   └── js/                # JavaScript files
│   ├── blog/                  # Blog posts (Markdown)
│   ├── index.md               # Home page
│   ├── about.md               # About page
│   ├── services.md            # Services page
│   └── contact.md             # Contact page with form
├── images/                    # Static images
├── .eleventy.js               # Eleventy configuration
├── unocss.config.js           # UnoCSS configuration
└── package.json               # Project dependencies and scripts
```

## Configuration

### Site Data (`src/_data/site.json`)

Update this file to customize:
- Site title and description
- Contact information
- Navigation menu
- Services offered
- Theme colors
- Social media links

### UnoCSS (`unocss.config.js`)

Customize the utility classes and theme:
- Color palette
- Typography scales
- Spacing system
- Responsive breakpoints

## Content Management

### Adding Blog Posts

Create new Markdown files in `src/blog/`:

```markdown
---
layout: layouts/post.njk
title: "Your Post Title"
excerpt: "Brief description of the post"
date: 2024-01-15
category: "Category Name"
---

Your post content here...
```

### Updating Services

Modify the services array in `src/_data/site.json` to add, remove, or update service offerings.

### Contact Information

Update contact details in `src/_data/site.json` - changes will automatically reflect across the entire site.

## Google Maps Setup

1. Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable these APIs:
   - Maps JavaScript API
   - Places API
3. Add domain restrictions for security
4. Replace the API key in `src/contact.md`

## Deployment

### Cloudflare Pages (Recommended)

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `_site`
4. Add environment variables if needed

### GitHub Actions (Automated)

The included workflow (`.github/workflows/deploy.yml`) automatically deploys to Cloudflare Pages on push to main branch.

Required secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Other Hosting Options

The site generates static files that can be hosted on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Performance

- Optimized images (consider adding image optimization)
- Minimal JavaScript (vanilla JS only)
- Efficient CSS with UnoCSS
- Fast static site generation with Eleventy
- CDN-ready with Cloudflare Pages

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues:
- Check the documentation
- Review existing issues
- Create a new issue with detailed information