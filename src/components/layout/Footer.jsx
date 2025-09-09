import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="waterfall-gradient text-white py-12 w-full">
      <style jsx>{`
        .waterfall-gradient {
          background: linear-gradient(135deg, #64748b 0%, #334155 100%);
        }
      `}</style>
      
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-green-400">Jutipong</span>
            <span className="text-2xl font-bold text-blue-400">Puntuleng</span>
          </div>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Software Engineering student at Concordia University creating innovative solutions.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/Jpuntul"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jpuntul/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:p.jutipong13@gmail.com"
              className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer