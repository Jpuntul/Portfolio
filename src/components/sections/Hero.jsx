import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolio'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = personalInfo.title

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [fullText])

  return (
    <>
      <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full float-animation"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full float-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full float-fast"></div>
          <div className="absolute top-32 right-1/3 w-40 h-40 bg-white/5 rounded-full float-animation"></div>
        </div>

        <div className="container mx-auto px-6 text-center text-white relative z-10 fade-in">
          <img 
            src="/images/profile.jpg" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/30 shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 h-12">
            {text}<span className="animate-pulse">|</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through clean code and modern technologies. 
            Currently pursuing Software Engineering at {personalInfo.university}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-18">
            <a 
              href="#projects" 
              className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <span>Send Message</span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href={personalInfo.github} 
              className="text-2xl hover:text-blue-300 transition-colors transform hover:scale-110 duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href={personalInfo.linkedin} 
              className="text-2xl hover:text-blue-300 transition-colors transform hover:scale-110 duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
