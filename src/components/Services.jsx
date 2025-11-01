import { FaEye, FaSyringe, FaMicroscope, FaChild, FaGlasses, FaHospital, FaStethoscope } from 'react-icons/fa'
import { services } from '../data/services'

// Icon mapping
const iconMap = {
  FaEye: FaEye,
  FaSyringe: FaSyringe,
  FaMicroscope: FaMicroscope,
  FaChild: FaChild,
  FaGlasses: FaGlasses,
  FaEmergency: FaHospital,
  FaStethoscope: FaStethoscope
}

function Services() {
  // Assign icons to services
  const servicesWithIcons = services.map(service => ({
    ...service,
    Icon: iconMap[service.icon] || FaEye
  }))

  return (
    <section id="services" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title text-primary">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive eye care services for all your vision needs
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesWithIcons.map((service) => {
            const IconComponent = service.Icon
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-primary mb-4 text-5xl flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Special Note */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Affordable Care for All</h3>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Spectacles, medicines, and surgeries are provided at discounted rates. 
            We believe quality eye care should be accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
