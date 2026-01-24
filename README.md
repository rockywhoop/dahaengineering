# Daha Engineering Consultancy - Professional Engineering & Surveying Website

A responsive, modern static website for a professional engineering consultancy firm specializing in transmission lines, roads, railways, and infrastructure projects. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

### Layout & Sections

- **Top Bar**: Contact information and social media links
- **Sticky Navigation**: Logo, dropdown menus for Services and Resources
- **Hero Section**: Full-width video background with overlay and CTA button
- **Stats Bar**: 4-column counter section highlighting key metrics
- **Services Grid**: 3-column responsive grid with hover effects
- **Testimonials**: Auto-rotating slider with navigation controls
- **Mega Footer**: 4-column layout with office information and quick links
- **Back to Top Button**: Smooth scroll functionality

### Interactive Features

- Hamburger menu for mobile navigation
- Dropdown menus for service categories
- Auto-rotating testimonial slider with manual controls
- Smooth scroll animations
- Animated counter statistics
- Responsive design for all screen sizes

### Technical Features

- **Responsive Design**: Mobile-first approach (480px, 768px, and desktop breakpoints)
- **Modern Styling**: CSS3 Flexbox and Grid layouts
- **Performance Optimized**: Lazy loading for hero video
- **Accessibility**: Semantic HTML5, proper link structure
- **GitHub Pages Ready**: No build process required

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # Interactive functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Responsive Breakpoints

- **Desktop**: 1200px+ (full 4-column footer, 3-column services)
- **Tablet**: 768px - 1199px (2-column layouts, hamburger menu)
- **Mobile**: 480px - 767px (single column, optimized touch targets)
- **Extra Small**: Below 360px (optimized compact view)

## Getting Started

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/droneair-solutions.git
cd droneair-solutions
```

2. Open in your browser:

```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### GitHub Pages Deployment

1. **Create a GitHub repository** named `yourusername.github.io` or enable Pages on an existing repo

2. **Push your files**:

```bash
git add .
git commit -m "Initial commit: Daha Engineering Consultancy website"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select main branch as source
   - Your site will be live at `https://yourusername.github.io`

## Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #1a1a1a; /* Dark charcoal */
  --secondary-color: #ff6b35; /* Orange */
  --accent-color: #f7931e; /* Golden orange */
  --dark-bg: #0f0f0f;
  --light-bg: #f5f5f5;
}
```

### Content

- **Company Name**: Daha Engineering Consultancy
- **Services**: Transmission Line Engineering, Highways & Railways, Geotechnical & GPR Surveys
- **Testimonials**: Updated with project-based client feedback
- **Contact**: +91 9311469315, 9817231902 | dahaengineering@gmail.com
- **Offices**: Registered office in Siwan, Bihar and Branch office in Delhi
- **Contact Info**: Update phone, email, and office addresses
- **Hero Video**: Replace video source URL with your own

### Fonts

The site uses Google Fonts "Roboto". To change:

1. Update the font import in `<head>` of index.html
2. Update `font-family` in CSS root styles

### Fonts

The site uses Google Fonts "Roboto". To change:

1. Update the font import in `<head>` of index.html
2. Update `font-family` in CSS root styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Hero video is only loaded on desktop (>768px) for mobile performance
- Intersection Observer used for stats animation
- Smooth scroll behavior for better user experience
- Optimized CSS with minimal selectors

## Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard-navigable menus
- Color contrast compliance
- Focus states on interactive elements

## Future Enhancements

- Contact form with email integration
- Blog section with dynamic content
- Image gallery or portfolio
- Case study pages
- CMS integration for easier content management
- Analytics integration

## License

This template is free to use for your drone solutions business.

## Support

For questions or issues, create an issue in the repository or contact the developer.

---

**Built with ❤️ for professional drone services companies**

Last Updated: January 2026
