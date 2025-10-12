// src/pages/Contact.jsx
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaUser, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo_service'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo_template'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_key'
      
      // For demo purposes, we'll simulate success if no env vars are set
      if (serviceId === 'demo_service' || templateId === 'demo_template' || publicKey === 'demo_key') {
        // Demo mode - simulate success
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Demo mode: Form data would be sent:', formData)
        setSubmitStatus('success')
      } else {
        // Real EmailJS integration
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
        }
        
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        setSubmitStatus('success')
      }
      
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 5000) // Clear status after 5 seconds
    }
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: "Send me an email anytime"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\D/g, '')}`,
      description: "Call me during business hours"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: personalInfo.location,
      link: null,
      description: "Based in Montreal, QC"
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: personalInfo.linkedin,
      description: "Connect with me professionally"
    },
    {
      icon: FaGithub,
      name: "GitHub", 
      url: personalInfo.github,
      description: "Check out my code repositories"
    }
  ]

  return (
    <>
      <style jsx>{`
        .nature-gradient {
          background: linear-gradient(135deg, #22c55e 0%, #0ea5e9 50%, #0369a1 100%);
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }
        @keyframes slideInRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 nature-gradient">
          <div className="container mx-auto px-6 text-center">
            <div className="fade-in">
              <h1 className="text-5xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on projects, 
                or just having a conversation about technology and software engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div className="slide-in-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Let's Connect
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're looking to hire a passionate developer, discuss a potential collaboration, 
                  or simply want to chat about the latest in software engineering, I'd love to hear from you.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-10">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <method.icon className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{method.title}</h3>
                        {method.link ? (
                          <a 
                            href={method.link}
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-gray-600">{method.value}</span>
                        )}
                        <p className="text-gray-500 text-sm">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Connect on Social Media
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="bg-blue-100 p-3 rounded-full">
                          <social.icon className="text-blue-600 text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{social.name}</h4>
                          <p className="text-gray-500 text-sm">{social.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="slide-in-right">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <FaPaperPlane className="text-green-500" />
                    Send a Message
                  </h3>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                      <p className="font-medium">Message sent successfully! 🎉</p>
                      <p className="text-sm">I'll get back to you as soon as possible.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      <p className="font-medium">Oops! Something went wrong. 😅</p>
                      <p className="text-sm">Please try again or contact me directly via email.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          <FaUser className="inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          <FaEnvelope className="inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello! I'm always excited to connect with fellow developers and potential collaborators."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-gray-500 text-sm mt-4 text-center">
                    I typically respond within 24 hours. Looking forward to hearing from you! 🚀
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact