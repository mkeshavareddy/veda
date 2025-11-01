# 🚀 Quick Start Guide

Welcome to the Veda Eye Hospital website! This is a complete, modern, and responsive website built with React and Vite.

## ⚡ Installation & Run

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: 
   Navigate to `http://localhost:5173`

That's it! The website is now running locally.

## 📦 Build for Production

```bash
npm run build
```

Upload the `dist` folder to your web hosting service.

## 🎨 What's Included

✅ **Fully Responsive** - Works on mobile, tablet, and desktop  
✅ **Modern UI** - Beautiful sky-blue theme with smooth animations  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Fast Performance** - Built with Vite for optimal speed  
✅ **Easy to Customize** - All content in data files  

## 📝 Customization

### Update Hospital Information
- Edit `src/data/branches.js` for address and contact
- Edit `src/data/doctors.js` for doctor profiles
- Edit `src/data/services.js` for services
- Edit `src/data/gallery.js` for gallery images

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#06B6D4',  // Your color here
    dark: '#0891B2',
    light: '#67E8F9',
  }
}
```

### Add Images
Place images in:
- `public/images/` for doctor photos
- `public/images/gallery/` for gallery photos

## 🌐 Deployment

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify

### Vercel
```bash
vercel
```

## 📞 Support

For more detailed information, see:
- `README.md` - Full documentation
- `SETUP_INSTRUCTIONS.md` - Detailed setup guide

## 🎉 Features

- **Hero Section** with animated eye graphic
- **About Us** section with mission and values
- **Doctors** showcase with profiles
- **Services** grid with icons
- **Branches** with Google Maps integration
- **Gallery** with lightbox functionality
- **Contact Form** ready for backend integration
- **Responsive Navbar** with smooth scrolling
- **Footer** with social media links

Enjoy your new website! 🎊
