# LitReview - Static Website

A professional, SEO-optimized static website for the LitReview Mac App Store application.

## About LitReview

LitReview is a Mac app that searches Google Scholar and allows you to sort results by relevance, total citations, annual citations, author, and more. It works seamlessly with citation management systems like Zotero.

**What LitReview Does:**
- Searches using Google Scholar
- Sorts by relevance, total citations, annual citations, author, and more
- Integrates with Zotero and other citation managers

**What LitReview Doesn't Do:**
- Organize research papers
- Provide systematic review tools
- Manage citations
- Note-taking
- Synthesis
- Export and reporting

LitReview is designed to work together with a citation management system like Zotero for a complete research workflow.

## Website Features

- **Bootstrap 5.3.2** - Modern, responsive design
- **SEO Optimized** - Title, meta tags, and content optimized for Google Scholar search keywords
- **Schema.org Markup** - Structured data for better search engine understanding
- **Open Graph Tags** - Optimized social media sharing
- **Mobile Responsive** - Works perfectly on all devices
- **Fast Loading** - No external dependencies except Bootstrap CDN

## Key SEO Keywords Targeted

- Google Scholar
- Academic search
- Citation sorting
- Research papers
- Scholarly research
- Zotero integration
- Literature search
- Academic research
- Mac app
- Research tool

## How to Use

### Local Testing

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or use a local server for better testing:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

This is a static website that can be deployed to:

- **GitHub Pages**: Commit and push to GitHub, enable GitHub Pages
- **Netlify**: Drag and drop the folder or connect to your git repo
- **Vercel**: Import the project and deploy
- **AWS S3**: Upload to an S3 bucket configured for static hosting
- **Any web host**: Upload via FTP/SFTP

## Customization

### Update App Store Link

Replace the placeholder URL in the "Download on the Mac App Store" buttons:

```html
<a href="https://apps.apple.com/app/litreview" class="app-store-btn">
```

Replace with your actual Mac App Store URL.

### Update Domain

Update the Open Graph URL meta tag:

```html
<meta property="og:url" content="https://www.litreview.app">
```

### Add Images

To enhance the website, consider adding:

1. App icon/logo
2. Screenshots of the app
3. App Store badge images
4. Social media preview image

Update the Open Graph image tags:

```html
<meta property="og:image" content="https://yourdomain.com/images/preview.jpg">
<meta name="twitter:image" content="https://yourdomain.com/images/preview.jpg">
```

### Color Scheme

Modify the CSS variables in the `<style>` section:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004999;
    --accent-color: #f8f9fa;
}
```

## File Structure

```
lit-review-web/
├── index.html      # Main HTML file (289 lines)
├── styles.css      # Custom CSS styles (100 lines)
├── scripts.js      # Custom JavaScript (115 lines)
└── README.md       # Documentation
```

## HTML Structure

- **Navigation**: Sticky top navigation with links to sections
- **Hero Section**: Main call-to-action with H1 title
- **Features Section**: 6 key features with icons
- **Benefits Section**: Value propositions for users
- **Use Cases Section**: Target audience segments
- **CTA Section**: Final call-to-action
- **Footer**: Links and copyright information

## CSS Features (styles.css)

- CSS custom properties for easy color customization
- Responsive design with mobile breakpoints
- Smooth transitions and hover effects
- Card-based layout with shadows
- Gradient backgrounds

## JavaScript Features (scripts.js)

- Smooth scrolling for anchor navigation
- Active state tracking for navigation links
- Fade-in animations for feature cards on scroll
- Analytics tracking for App Store button clicks
- Mobile menu auto-close after link click

## Performance

- Minimal external dependencies (only Bootstrap CDN)
- Optimized images (add and compress appropriately)
- Clean, semantic HTML5
- Fast load times

## License

Customize as needed for your application.
