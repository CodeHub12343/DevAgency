'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const PortfolioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS Platforms' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
      image: "/editied-dashboard.jpg", 
     
      liveUrl: "https://shopdirect.onrender.com",
      githubUrl: "https://github.com/CodeHub12343/shopDirect",
     
    },
    {
      id: 2,
      title: "Task Management SaaS",
      category: "saas",
      description: "A comprehensive project management tool with team collaboration, time tracking, and reporting features.",
      image: "/SharedScreenshothvkv.jpg",
      
      liveUrl: "https://wanderworld-6.onrender.com",
      githubUrl: "https://github.com/CodeHub12343/wanderworld",
     
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "A mobile fitness app with workout tracking, nutrition planning, and social features for fitness enthusiasts.",
      image: "/bankist-arrsy.jpg",
     
      liveUrl: "https://fancy-zabaione-1d08be.netlify.app/",
      githubUrl: "https://github.com/CodeHub12343/shopDirect-website",
          
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "A mobile fitness app with workout tracking, nutrition planning, and social features for fitness enthusiasts.",
      image: "/Annotation 2025-08-18 064256.jpg",
      liveUrl: "https://shopdirect-website.onrender.com",
      githubUrl: "https://github.com/CodeHub12343/shopDirect-website",
      
    }
  
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const currentProject = filteredProjects.length > 0 ? filteredProjects[currentSlide] : null

  const nextSlide = () => {
    if (filteredProjects.length === 0) return
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    if (filteredProjects.length === 0) return
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="portfolio" ref={ref} className="section-spacing bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto container-spacing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span>Our Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-heading mb-8"
          >
            Showcasing Our <span className="gradient-text">Best Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-body text-muted-foreground max-w-3xl mx-auto"
          >
            Explore our diverse portfolio of successful projects that demonstrate 
            our expertise in creating innovative digital solutions.
          </motion.p>
        </motion.div>

                 {/* Filter Buttons */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 px-4"
         >
           {filters.map((filter) => (
             <motion.button
               key={filter.id}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => {
                 setActiveFilter(filter.id)
                 setCurrentSlide(0)
               }}
               className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                 activeFilter === filter.id
                   ? 'bg-primary text-primary-foreground'
                   : 'glass-effect text-muted-foreground hover:text-primary hover:bg-white/10'
               }`}
             >
               {filter.label}
             </motion.button>
           ))}
         </motion.div>

                 {/* Image Slider */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 1, duration: 0.8 }}
           className="relative mb-8 sm:mb-12 md:mb-16 px-4"
         >
                      {/* Main Slider */}
            <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                                 className={`absolute inset-0 flex items-center justify-center ${
                   index === currentSlide ? 'z-10' : 'z-0'
                 }`}
              >
                                                   {/* Project Image Background */}
                  <div className="relative w-full h-full group flex items-center justify-center">
                                       {/* Actual Project Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                   
                   {/* Image Overlay for better text readability */}
                   <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />
                   
                                       {/* Project Icon/Logo */}
                    <div className="absolute top-3 sm:top-6 left-3 sm:left-6">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm sm:text-xl">
                          {project.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>
                  
                                       {/* Hover Overlay with Project Details */}
                   <div className="hidden sm:flex absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                      <div className="max-w-4xl mx-auto w-full bg-gradient-to-b from-black/95 via-black/90 to-black/95 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                                                   {/* Project Title */}
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white text-center">
                            {project.title}
                          </h3>
                          
                          {/* Project Description */}
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                            {project.description}
                          </p>
                         
                                                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
                            {/* Left Column - Technologies */}
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="text-sm sm:text-base font-semibold text-primary text-center lg:text-left mb-2 sm:mb-3">
                                🛠️ Technologies Used
                              </h4>
                              <div className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-2">
                                {(project.technologies || []).map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/40 hover:bg-primary/30 hover:border-primary/60 transition-all duration-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {/* Right Column - Features */}
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="text-sm sm:text-base font-semibold text-primary text-center lg:text-left mb-2 sm:mb-3">
                                ✨ Key Features
                              </h4>
                              <div className="space-y-1 sm:space-y-2">
                                {(project.features || []).map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center space-x-2 group">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                                    <span className="text-gray-200 text-white text-xs sm:text-sm">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                         
                                                   {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 mt-4 sm:mt-6 md:mt-8">
                            <motion.a
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-primary/80 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl text-xs sm:text-sm"
                            >
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>Live Demo</span>
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-200 flex items-center space-x-2 border border-white/30 hover:border-white/50 text-xs sm:text-sm"
                            >
                              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>View Code</span>
                            </motion.a>
                          </div>
                       </div>
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

                     {/* Navigation Arrows */}
           <button
             onClick={prevSlide}
             className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-20"
           >
             <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
           </button>
           
           <button
             onClick={nextSlide}
             className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-20"
           >
             <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
           </button>

                     {/* Slide Indicators */}
           <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
             {filteredProjects.map((_, index) => (
               <button
                 key={index}
                 onClick={() => goToSlide(index)}
                 className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                   index === currentSlide 
                     ? 'bg-primary w-6 sm:w-8' 
                     : 'bg-white/30 hover:bg-white/50'
                 }`}
               />
             ))}
           </div>

           {currentProject && (
             <div className="sm:hidden mt-6 px-1">
               <div className="glass-effect rounded-xl p-4">
                 <h3 className="text-base font-semibold mb-2 text-white">{currentProject.title}</h3>
                 <p className="text-xs text-gray-200 mb-4">{currentProject.description}</p>
                 <div className="mb-3">
                   <h4 className="text-xs font-semibold text-primary mb-2">Technologies</h4>
                   <div className="flex flex-wrap gap-1">
                     {(currentProject.technologies || []).map((tech, idx) => (
                       <span key={idx} className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] rounded-full border border-primary/40">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div className="mb-4">
                   <h4 className="text-xs font-semibold text-primary mb-2">Key Features</h4>
                   <ul className="space-y-1">
                     {(currentProject.features || []).map((feature, idx) => (
                       <li key={idx} className="flex items-start space-x-2">
                         <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                         <span className="text-xs text-gray-200">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className="flex flex-col gap-2">
                   <a
                     href={currentProject.liveUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-primary text-white px-4 py-2 rounded-lg text-xs text-center"
                   >
                     Live Demo
                   </a>
                   <a
                     href={currentProject.githubUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-white/20 text-white px-4 py-2 rounded-lg text-xs text-center border border-white/30"
                   >
                     View Code
                   </a>
                 </div>
               </div>
             </div>
           )}
        </motion.div>

                 {/* Call to Action */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 2, duration: 0.8 }}
           className="text-center mt-8 sm:mt-12 md:mt-16 px-4"
         >
           <div className="glass-effect spacious-card max-w-2xl mx-auto">
             <h3 className="text-subheading mb-4 sm:mb-6">Ready to Start Your Project?</h3>
             <p className="text-body text-muted-foreground mb-6 sm:mb-8">
               Let&apos;s discuss how we can bring your ideas to life with our expertise and innovative solutions.
             </p>
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-primary text-primary-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors duration-200"
             >
               Get Started Today
             </motion.button>
           </div>
         </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
