'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Zap, Code, Smartphone } from 'lucide-react'

const HeroSection = () => {
  const floatingIcons = [
    { icon: Code, delay: 0, position: 'top-20 left-20' },
    { icon: Smartphone, delay: 1, position: 'top-40 right-20' },
    { icon: Zap, delay: 2, position: 'bottom-40 left-10' },
    { icon: Star, delay: 3, position: 'bottom-20 right-10' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-spacing">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay, duration: 1 }}
          className={`absolute ${item.position} hidden md:block`}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-spacing text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="content-spacing"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs font-medium"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm">Leading Full-Stack Development Agency</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">Transform</span> Your Ideas Into
             <br className="hidden sm:block" /> 
            <span className="gradient-text">Digital Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4"
          >
            We craft cutting-edge web applications, mobile apps, and digital solutions 
            that drive business growth and deliver exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-primary-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group glass-effect px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/20 transition-all duration-200 flex items-center space-x-2"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 pt-12 sm:pt-16 md:pt-20"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-2 sm:mb-3">{stat.number}</div>
                <div className="text-muted-foreground text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
