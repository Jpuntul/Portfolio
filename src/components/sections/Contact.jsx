import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolio'

const Contact = () => {
  return (
    <>
      <style jsx>{`
        .mountain-gradient {
          background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
        }
      `}</style>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <FaEnvelope className="text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-green-600 hover:text-green-700 transition-colors">
                {personalInfo.email}
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <a href={`tel:${personalInfo.phone.replace(/\D/g, '')}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                {personalInfo.phone}
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-gray-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                <FaMapMarkerAlt className="text-gray-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <span className="text-gray-600">{personalInfo.location}</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="mountain-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105 shadow-lg"
            >
              <FaEnvelope /> Send Message
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
