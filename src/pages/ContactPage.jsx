import { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa'
import { branches } from '../data/branches'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - you can integrate with a backend or email service
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const branch = branches[0]

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you with all your eye care needs. Get in touch with us today!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Near Kadooru Petrol Pump, Opposite S.D.N Hotel<br />
              Above Mahaveer Complex, First Floor<br />
              Yadgir - 585202
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
            <div className="space-y-1">
              <a href="tel:9677387642" className="block text-primary hover:text-primary-dark font-semibold">
                9677387642
              </a>
              <a href="tel:9448786230" className="block text-primary hover:text-primary-dark font-semibold">
                9448786230
              </a>
              <a href="tel:7795502955" className="block text-primary hover:text-primary-dark font-semibold">
                7795502955
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Open Hours</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monday - Saturday<br />
              9:00 AM - 7:00 PM<br />
              <span className="text-gray-500">Sunday: Closed</span>
            </p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  <FaUser className="inline mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  <FaEnvelope className="inline mr-2" /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  <FaPhone className="inline mr-2" /> Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-primary to-primary-dark text-white">
              <h2 className="text-3xl font-bold mb-2">Find Us</h2>
              <p className="opacity-90">Visit our hospital at the location shown below</p>
            </div>
            <div className="p-4">
              <iframe
                src={branch.mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
