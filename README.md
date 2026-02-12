# Galactic Fixer Website

A synthwave/outrun-themed handyman website with neon aesthetics inspired by 1980s sci-fi and retro-futurism.

## Files Included

- `index.html` - Home page with animated neon elements
- `services.html` - Services page with all handyman offerings
- `contact.html` - Contact page with form
- `styles.css` - Complete synthwave styling with neon effects
- `script.js` - JavaScript for interactivity
- `logo.jpeg` - Your Galactic Fixer logo

## Design Features

- 🌟 **Synthwave Aesthetic**: Teal, cyan, hot pink, and purple neon colors
- ⚡ **Animated Grid Background**: Tron-style perspective grid
- 🌌 **Starfield Animation**: Parallax moving stars
- 💫 **Neon Glow Effects**: On all buttons, borders, and text
- 🎨 **Gradient Text**: Smooth color transitions matching your logo
- 📱 **Fully Responsive**: Works on all devices
- ✨ **Smooth Animations**: Hover effects and transitions throughout

## Color Palette

Extracted from your logo:
- **Cyan/Teal**: #00FFD9, #00D4FF
- **Hot Pink/Magenta**: #FF006E, #FF0080
- **Purple**: #8B00FF, #A855F7
- **Dark Background**: #0A0E27, #050714

## Typography

- **Display Font**: Audiowide (for main titles)
- **Title Font**: Orbitron (for headings)
- **Body Font**: Michroma (for text)

## Deploying to Cloudflare Pages

### Method 1: Direct Upload

1. Go to Cloudflare Dashboard → **Workers & Pages**
2. Click **Create application** → **Pages** → **Upload assets**
3. Upload ALL files:
   - index.html
   - services.html
   - contact.html
   - styles.css
   - script.js
   - logo.jpeg
4. Click **Deploy site**

### Method 2: Git Integration

1. Create a new GitHub repository
2. Upload all files to the repository
3. In Cloudflare Pages:
   - Click **Create application** → **Pages** → **Connect to Git**
   - Select your repository
   - Build settings:
     - **Build command**: (leave empty)
     - **Build output directory**: `/`
   - Click **Save and Deploy**

## Customization

### Update Contact Info

In `contact.html`, update:
```html
<p>info@galacticfixer.com</p>
<p>(555) GALACTIC</p>
```

### Modify Services

Edit the service items in `services.html` to match your actual offerings.

### Adjust Colors

In `styles.css`, modify the CSS variables:
```css
:root {
    --color-cyan: #00FFD9;
    --color-pink: #FF006E;
    --color-purple: #8B00FF;
    /* ... */
}
```

## Contact Form Backend

The form currently shows an alert. To make it functional:

### Option 1: Cloudflare Workers
Create a serverless function to handle form submissions.

### Option 2: Third-Party Service
Use services like:
- **Formspree**: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **Web3Forms**: Free, no backend needed
- **EmailJS**: Client-side email sending

### Option 3: Custom Backend
Update `script.js`:
```javascript
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance Features

- Optimized animations (CSS-only where possible)
- Smooth 60fps effects
- Efficient starfield rendering
- Backdrop blur with hardware acceleration

## Easter Eggs

Try the Konami code on your keyboard:
↑ ↑ ↓ ↓ ← → ← → B A

---

**Built with synthwave vibes** 🌆✨

For questions or support, contact: your@email.com
