# Setup Instructions for Veda Eye Hospital Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173` (or the port Vite assigns)

## Adding Real Images

### Doctor Photos
Add doctor images to `public/images/`:
- `doctor1.jpg`
- `doctor2.jpg`
- `doctor3.jpg`
- `doctor4.jpg`

### Gallery Photos
Add gallery images to `public/images/gallery/`:
- `hospital-entrance.jpg`
- `consultation-room.jpg`
- `operation-theater.jpg`
- `equipment.jpg`
- `camp1.jpg` (Free Eye Check-up Camp photos)
- `patient-care.jpg`
- `outreach.jpg`
- `spectacles.jpg`
- `technology.jpg`

## Updating Hospital Information

### Branches
Edit `src/data/branches.js` to update:
- Address
- Phone numbers
- Operating hours
- Google Maps embed URL

### Doctors
Edit `src/data/doctors.js` to update:
- Doctor names and qualifications
- Specializations
- Experience
- Add or remove doctors

### Services
Edit `src/data/services.js` to update:
- Service titles
- Descriptions
- Add new services

### Gallery
Edit `src/data/gallery.js` to update:
- Image titles
- Categories
- Add/remove images

## Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#06B6D4',  // Sky blue
    dark: '#0891B2',
    light: '#67E8F9',
  },
  secondary: {
    DEFAULT: '#7C3AED',  // Purple
    dark: '#5B21B6',
    light: '#C4B5FD',
  },
}
```

## Google Maps Integration

To update the map embed URL:

1. Go to https://www.google.com/maps
2. Search for "Near Kadooru Petrol Pump, Opposite S.D.N Hotel, Above Mahaveer Complex First Showroom, First Floor, Yadgir"
3. Click "Share" → "Embed a map"
4. Copy the embed URL
5. Replace the URL in `src/data/branches.js`

## Deployment

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Traditional Hosting
```bash
npm run build
# Upload the 'dist' folder contents to your web server
```

## Production Build

Build optimized files:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Contact Form Integration

The contact form in `src/pages/ContactPage.jsx` currently shows an alert. To integrate with a backend:

1. Replace the `handleSubmit` function in ContactPage.jsx
2. Integrate with services like:
   - EmailJS
   - Formspree
   - Your own backend API

Example with EmailJS:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
    alert('Message sent successfully!')
  } catch (error) {
    alert('Error sending message. Please try again.')
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for:
- Fast load times
- Mobile responsiveness
- SEO-friendly structure
- Accessibility standards

## Need Help?

For any issues or questions, refer to:
- README.md for general information
- Vite documentation: https://vitejs.dev
- React documentation: https://react.dev
- Tailwind CSS documentation: https://tailwindcss.com
