import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaEye, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Doctors', path: '#doctors' },
    { name: 'Services', path: '#services' },
    { name: 'Branches', path: '#branches' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
              <FaEye className="text-white text-2xl" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">VEDA EYE HOSPITAL</h1>
              <p className="text-xs text-gray-600">Yadgir</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
