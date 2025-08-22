'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@devagency-pro.com", "support@devagency-pro.com"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Innovation Street", "Tech City, TC 12345"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Platform",
    "SaaS Platform",
    "API Development",
    "UI/UX Design",
    "Consulting",
    "Other"
  ]

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ]

  return (
    <section id="contact" ref={ref} className="section-spacing bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto container-spacing px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs font-medium mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
          >
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to transform your ideas into reality? Get in touch with us and 
            let's discuss how we can help bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
                     <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="glass-effect spacious-card"
           >
             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">Start Your Project</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Message Sent Successfully!</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-medium mb-2 sm:mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium mb-2 sm:mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-medium mb-2 sm:mb-3">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium mb-2 sm:mb-3">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2 sm:mb-3">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2 sm:mb-3">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                                 <motion.button
                   type="submit"
                   disabled={isSubmitting}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full bg-primary text-primary-foreground py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
                         <div>
               <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">Get In Touch</h3>
               <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10">
                 We're here to help you bring your digital vision to life. 
                 Reach out to us through any of the channels below.
               </p>
             </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                                   className="card-3d glass-effect spacious-card"
               >
                 <div className="flex items-start space-x-4 sm:space-x-6">
                   <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                     <info.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                   </div>
                   <div>
                     <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">{info.title}</h4>
                     {info.details.map((detail, detailIndex) => (
                       <p key={detailIndex} className="text-xs sm:text-sm text-muted-foreground">
                         {detail}
                       </p>
                     ))}
                   </div>
                 </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
                             className="glass-effect spacious-card"
             >
               <h4 className="text-sm sm:text-base font-semibold mb-4 sm:mb-6">Quick Response</h4>
               <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                 Need an immediate response? We typically respond within 2-4 hours during business hours.
               </p>
               <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="flex-1 bg-primary text-primary-foreground py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                 >
                   Schedule Call
                 </motion.button>
                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="flex-1 glass-effect py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors duration-200"
                 >
                   Live Chat
                 </motion.button>
               </div>
            </motion.div>
          </motion.div>
        </div>

                 {/* FAQ Section */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 1.8, duration: 0.8 }}
           className="mt-16 sm:mt-20 md:mt-24"
         >
           <div className="text-center mb-12 sm:mb-16">
             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Frequently Asked <span className="gradient-text">Questions</span></h3>
             <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
               Get answers to common questions about our services and process.
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive maintenance and support packages. This includes updates, security patches, performance monitoring, and technical support."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile methodology with regular client communication. Our process includes discovery, planning, development, testing, and deployment phases."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! We love working with startups and offer flexible engagement models. We can help you build MVPs, scale applications, and grow your digital presence."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                                 className="card-3d glass-effect spacious-card"
               >
                 <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">{faq.question}</h4>
                 <p className="text-xs sm:text-sm text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
