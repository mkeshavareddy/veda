import { FaEye, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                <FaEye className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">VEDA EYE HOSPITAL</h3>
                <p className="text-xs">Yadgir</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Providing comprehensive eye care services with compassion, expertise, and affordability. 
              Your vision is our mission.
            </p>
            <div className="text-sm font-bold text-primary">
              ನಿಮ್ಮ ದೃಷ್ಟಿ ನಮ್ಮ ಜವಾಬ್ದಾರಿ
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <a href="#doctors" className="hover:text-primary transition-colors">Our Doctors</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#branches" className="hover:text-primary transition-colors">Branches</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Eye Check-up</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cataract Surgery</li>
              <li className="hover:text-primary transition-colors cursor-pointer">LASIK Surgery</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Retina Treatment</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Glaucoma Management</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Spectacles & Lenses</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary text-lg mt-1 flex-shrink-0" />
                <div className="text-sm">
                  Near Kadooru Petrol Pump, Opposite S.D.N Hotel<br />
                  Above Mahaveer Complex, First Floor<br />
                  Yadgir - 585202
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-primary text-lg mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:9677387642" className="hover:text-primary transition-colors">
                    9677387642
                  </a>
                  <br />
                  <a href="tel:9448786230" className="hover:text-primary transition-colors">
                    9448786230
                  </a>
                  <br />
                  <a href="tel:7795502955" className="hover:text-primary transition-colors">
                    7795502955
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-lg flex-shrink-0" />
                <a href="mailto:info@vedaeyehospital.com" className="hover:text-primary transition-colors text-sm">
                  info@vedaeyehospital.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Veda Eye Hospital Yadgir. All rights reserved.
          </p>
          <p className="text-sm mt-2 md:mt-0">
            Designed with <span className="text-red-500">❤</span> for your vision health
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
