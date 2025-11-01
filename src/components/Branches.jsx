import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa'
import { branches } from '../data/branches'

function Branches() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0])

  return (
    <section id="branches" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-primary">Our Branches</h2>
        <p className="section-subtitle">
          Visit us at our conveniently located branches
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Branch Info */}
          <div className="space-y-6">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  selectedBranch.id === branch.id ? 'border-4 border-primary' : 'border-4 border-transparent'
                }`}
                onClick={() => setSelectedBranch(branch)}
              >
                {branch.isMain && (
                  <div className="inline-block mb-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    MAIN BRANCH
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{branch.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Address:</p>
                      <p className="text-gray-600 leading-relaxed">{branch.address}</p>
                      <p className="text-gray-600 font-semibold mt-1">PIN: {branch.pincode}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhone className="text-primary text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Phone Numbers:</p>
                      <div className="flex flex-wrap gap-3">
                        {branch.phone.map((num, idx) => (
                          <a
                            key={idx}
                            href={`tel:${num}`}
                            className="text-primary hover:text-primary-dark font-semibold"
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaClock className="text-primary text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Operating Hours:</p>
                      <p className="text-gray-600">{branch.timings.weekdays}</p>
                      <p className="text-gray-600">{branch.timings.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-primary to-primary-dark text-white">
              <h3 className="text-2xl font-bold mb-2">Location Map</h3>
              <p className="opacity-90">Find us easily on Google Maps</p>
            </div>
            <div className="p-4">
              <iframe
                src={selectedBranch.mapUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
                className="rounded-lg"
              />
            </div>
            <div className="p-6 bg-gray-50 border-t">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center w-full"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-secondary to-secondary-dark rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">ನಿಮ್ಮ ದೃಷ್ಟಿ ನಮ್ಮ ಜವಾಬ್ದಾರಿ</h3>
            <p className="text-center text-lg opacity-95 mb-4">
              Your Vision is Our Responsibility
            </p>
            <p className="text-center opacity-90">
              Located near Kadooru Petrol Pump, opposite S.D.N Hotel, easily accessible with parking facilities. 
              Walk-ins welcome during operating hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Branches
