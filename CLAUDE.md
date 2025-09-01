# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static web application featuring a contact form with Google Maps Places API address autocomplete. The project consists of three main files:

- `index.html` - Main HTML structure with contact form
- `script.js` - JavaScript functionality for address autocomplete, form validation, and UI interactions
- `styles.css` - CSS styling with responsive design and modal components

## Architecture

### Core Components

**Contact Form (`index.html:17-54`)**
- Form with fields: full name, email, phone, address, subject, message
- Integrates with Google Maps Places API for address autocomplete
- Success modal displays after form submission

**Address Autocomplete System (`script.js:6-191`)**
- Custom dropdown implementation using Google Maps Places API
- Location-biased suggestions based on user's geolocation
- Debounced input handling (300ms delay)
- US-only address validation with place_id verification

**Form Validation (`script.js:195-235`)**
- Required field validation
- Custom phone number formatting and validation for US numbers
- Address selection validation ensuring user picks from autocomplete suggestions

**UI/UX Features**
- Responsive design with mobile-first approach
- Custom styled autocomplete dropdown
- Success modal with animated progress bar
- Visual feedback for form validation states

### Key Functions

- `initMap()` - Initializes Google Maps services and sets up event listeners
- `fetchAddressPredictions()` - Gets address suggestions from Places API
- `handleFormSubmit()` - Validates and processes form submission
- `validateUSPhoneNumber()` - Validates 10/11 digit US phone numbers
- `formatPhoneNumber()` - Auto-formats phone input as (XXX) XXX-XXXX

## Development

### Running the Application

This is a static web application. To run locally:

1. Serve the files using a local web server:
   ```bash
   python -m http.server 8000
   ```
   or
   ```bash
   npx serve .
   ```

2. Open `http://localhost:8000` in your browser

### Google Maps API Configuration

The application requires a Google Maps API key with the following APIs enabled:
- Maps JavaScript API
- Places API

The API key is currently embedded in `index.html:72`. For production, consider:
- Moving API key to environment variables
- Implementing server-side proxy for API calls
- Adding domain restrictions to the API key

### File Structure

```
/
├── index.html          # Main HTML document
├── script.js           # Core JavaScript functionality
├── styles.css          # Styling and responsive design
└── CLAUDE.md          # This documentation file
```

## Code Conventions

- Uses vanilla JavaScript (no frameworks)
- ES6+ syntax with arrow functions and const/let
- CSS uses modern features (CSS Grid, Flexbox, custom properties)
- Mobile-first responsive design approach
- Semantic HTML structure with proper accessibility considerations