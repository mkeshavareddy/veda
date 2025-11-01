# Veda Eye Hospital Yadgir - Website

A modern, responsive website for Veda Eye Hospital built with React, Vite, and Tailwind CSS.

## Features

- 🏥 **About Us** - Hospital overview, mission, and values
- 👨‍⚕️ **Doctors** - Expert ophthalmologist profiles with qualifications
- 💉 **Services** - Comprehensive eye care services offered
- 🏢 **Branches** - Location details with Google Maps integration
- 🖼️ **Gallery** - Photo gallery with lightbox functionality
- 📞 **Contact** - Contact form and information
- 📱 **Responsive Design** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎨 **Modern UI** - Sky-blue theme with smooth animations

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **React Icons** - Icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized production files will be in the `dist` folder.

## Project Structure

```
veda-eye-hospital/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Doctors.jsx
│   │   ├── Services.jsx
│   │   ├── Branches.jsx
│   │   ├── Gallery.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/            # Data files
│   │   ├── doctors.js
│   │   ├── services.js
│   │   ├── branches.js
│   │   └── gallery.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Adding/Editing Doctors

Edit `src/data/doctors.js`:

```javascript
export const doctors = [
  {
    id: 1,
    name: "Dr. Your Doctor Name",
    specialization: "Specialty",
    qualification: "Qualifications",
    experience: "Years",
    description: "Bio",
    image: "/images/doctor1.jpg"
  }
]
```

### Adding Services

Edit `src/data/services.js`

### Adding Branches

Edit `src/data/branches.js`

### Adding Gallery Images

Edit `src/data/gallery.js` or add images to `public/images/gallery/`

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

Or connect your Git repository to Netlify for automatic deployments.

### Vercel

```bash
npm install -g vercel
vercel
```

## Hospital Information

**Address:** Near Kadooru Petrol Pump, Opposite S.D.N Hotel, Above Mahaveer Complex First Showroom, First Floor, Yadgir - 585202

**Phone:** 
- 9677387642
- 9448786230
- 7795502955

**Timings:** Monday - Saturday: 9:00 AM - 7:00 PM, Sunday: Closed

## License

© 2025 Veda Eye Hospital Yadgir. All rights reserved.

## Contact

For any queries or support, please contact:
- Email: info@vedaeyehospital.com
- Website: https://vedaeyehospital.com
