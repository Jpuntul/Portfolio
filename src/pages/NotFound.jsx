import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

const NotFound = () => {
  return (
    <>
      <div className="pt-20 min-h-screen flex items-center justify-center hero-gradient">
        <div className="text-center text-white px-6">
          <h1 className="text-9xl font-bold mb-4 opacity-50">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center"
            >
              <FaHome /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors flex items-center gap-2 justify-center"
            >
              <FaArrowLeft /> Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound