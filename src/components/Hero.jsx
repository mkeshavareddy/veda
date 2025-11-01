import { FaPhone, FaMapMarkerAlt, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
              ವೇದ ಕಣ್ಣಿನ ಆಸ್ಪತ್ರೆ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Your Vision, Our{' '}
              <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Advanced Eye Care for All — Comprehensive eye care services at affordable rates with expert doctors and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary inline-block text-center">
                Book Consultation
              </Link>
              <a 
                href="tel:9677387642" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 border-2 border-primary"
              >
                <FaPhone /> Call Now
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Eye Graphic */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Eye Illustration */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Eyeball */}
                <circle cx="200" cy="200" r="180" fill="#ffffff" stroke="#06B6D4" strokeWidth="6"/>
                {/* Iris */}
                <circle cx="200" cy="200" r="100" fill="#06B6D4" opacity="0.3"/>
                {/* Pupil */}
                <circle cx="200" cy="200" r="60" fill="#1E40AF"/>
                {/* Highlights */}
                <circle cx="180" cy="180" r="15" fill="#ffffff" opacity="0.8"/>
                <circle cx="170" cy="170" r="8" fill="#ffffff"/>
                {/* Eyelashes */}
                <path d="M 60 140 Q 70 130 80 135" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 80 135 Q 90 125 100 130" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 100 130 Q 110 120 120 125" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 280 135 Q 290 125 300 130" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 300 130 Q 310 120 320 125" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 bg-primary text-white p-3 rounded-full shadow-lg animate-pulse">
                <FaEye className="text-2xl" />
              </div>
              <div className="absolute bottom-10 right-10 bg-secondary text-white p-3 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                <FaMapMarkerAlt className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
