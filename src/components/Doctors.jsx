import { FaUserMd, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { doctors } from '../data/doctors'

function Doctors() {
  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-primary">Our Expert Doctors</h2>
        <p className="section-subtitle">
          Meet our team of experienced ophthalmologists dedicated to your vision health
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Doctor Image */}
              <div className="relative h-72 bg-gradient-to-br from-primary-light to-primary overflow-hidden">
                <div className="absolute inset-0 bg-primary bg-opacity-20 flex items-center justify-center">
                  <FaUserMd className="text-9xl text-white opacity-30" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold text-gray-800">{doctor.name}</div>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <FaBriefcase className="text-sm" />
                    <span className="text-sm font-semibold">{doctor.specialization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaGraduationCap className="text-sm" />
                    <span className="text-sm">{doctor.qualification}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Experience: {doctor.experience}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
