# Taora Akira Portfolio

A modern, professional portfolio website built with HTML, CSS, and JavaScript. This is a fully responsive web version of your portfolio design.

## Features

✨ **Responsive Design** - Works beautifully on all devices (desktop, tablet, mobile)
- **Modern UI** - Clean, contemporary design with smooth animations
- **Interactive Elements** - Smooth scrolling, hover effects, and transitions
- **Portfolio filtering** - Filter projects by category
- **Contact Form** - Fully functional contact form with validation
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Accessibility** - Semantic HTML and keyboard navigation support

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Your background, experience, and key statistics
3. **Portfolio** - Showcase of your best work with category filtering
4. **Skills** - Organized display of your technical and soft skills
5. **Contact** - Contact information and message form
6. **Navigation** - Fixed navbar with smooth scrolling links

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## Getting Started

### Option 1: Open in Browser Directly
Simply open `index.html` in your web browser.

### Option 2: Live Server (Recommended)
If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

### Option 4: Using Node.js
```bash
npx http-server
```

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 1-13):
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Content
1. **Personal Information** - Update text in `index.html`
2. **Portfolio Projects** - Edit or add portfolio items in the portfolio section
3. **Skills** - Update the skills grid with your actual skills
4. **Contact Info** - Replace email, phone, and social links

### Images
Replace placeholder images with your actual portfolio images:
- Update the SVG placeholders with actual image tags
- Use high-quality images for better presentation

## Features Detail

### Mobile Menu
The hamburger menu automatically appears on screens smaller than 768px.

### Portfolio Filtering
Click the category buttons to filter projects:
- All
- Design
- Development  
- Branding

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Real-time visual feedback
- Success notification on submission

### Animations
- Smooth page scrolling
- Fade-in animations on scroll
- Hover effects on interactive elements
- Button press animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Minified CSS and optimized styling
- Smooth animations using CSS transforms
- Responsive images and layouts
- Fast loading times

## SEO

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Mobile-friendly viewport settings

## Contact Form Integration

Currently, the contact form logs to the browser console. To make it fully functional, integrate with:
- Email service (EmailJS, Sendgrid, etc.)
- Backend API
- Form service (Formspree, Netlify Forms, etc.)

## Deployment

### Netlify
1. Connect your GitHub repository
2. Deploy automatically on push

### Vercel
1. Import your repository
2. Deploy with one click

### GitHub Pages
1. Push to GitHub
2. Enable Pages in repository settings
3. Site will be live at `https://yourusername.github.io/Taora-Akira-Portfolio`

### Traditional Hosting
Upload all files to your web host via FTP or file manager.

## License

All rights reserved. © 2026 Taora Akira

## Support

For questions or improvements, feel free to reach out or create an issue.

---

**Happy coding! 🚀**
