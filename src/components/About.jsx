import { FaAward, FaHeart, FaHandshake, FaUserMd } from 'react-icons/fa'

function About() {
  const features = [
    {
      icon: <FaAward className="text-4xl" />,
      title: "15+ Years Excellence",
      description: "Trusted healthcare provider with proven track record"
    },
    {
      icon: <FaUserMd className="text-4xl" />,
      title: "Expert Doctors",
      description: "Experienced ophthalmologists and specialist team"
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Affordable Care",
      description: "Quality eye care at discounted and reasonable rates"
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Community Focus",
      description: "Regular free eye check-up camps and outreach"
    }
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title text-primary">About Veda Eye Hospital</h2>
        <p className="section-subtitle">
          Providing comprehensive eye care services with compassion, expertise, and affordability
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Veda Eye Hospital, we are committed to providing world-class eye care services to everyone, 
              regardless of their financial background. Our mission is to ensure that no one suffers from 
              preventable blindness.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We combine advanced medical technology with compassionate care to deliver the best possible 
              outcomes for our patients. From routine eye check-ups to complex surgeries, we offer a 
              comprehensive range of services at affordable rates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In collaboration with community organizations, we regularly organize free eye check-up camps 
              and provide spectacles, medicines, and surgeries at discounted rates to serve the community better.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>State-of-the-art medical equipment and technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Experienced and qualified ophthalmologists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Affordable pricing with flexible payment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Patient-centric approach with personalized care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Quick appointments and minimal waiting times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
