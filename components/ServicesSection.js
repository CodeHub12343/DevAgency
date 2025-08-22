'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  Code,
  Palette,
  BarChart3,
  Settings,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
      features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with React Native and Flutter.",
      features: ["iOS & Android Apps", "Cross-platform Development", "App Store Optimization", "Mobile UI/UX"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architectures and efficient database management.",
      features: ["API Development", "Database Design", "Microservices", "Server Architecture"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.",
      features: ["Cloud Migration", "DevOps Services", "Serverless Architecture", "Scalability"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your applications and data from threats.",
      features: ["Security Audits", "Penetration Testing", "Data Protection", "Compliance"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, efficiency, and better user experience.",
      features: ["Speed Optimization", "SEO Implementation", "Performance Monitoring", "Caching Strategies"],
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const additionalServices = [
    {
      icon: Code,
      title: "Code Review & Refactoring",
      description: "Improve code quality and maintainability with expert code reviews and refactoring services."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with user experience in mind."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive reporting to track your application's performance."
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and 24/7 technical support for your applications."
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your digital transformation."
    }
  ]

  return (
    <section id="services" ref={ref} className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
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
            <span className="text-xs sm:text-sm">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
          >
            Comprehensive <span className="gradient-text">Development</span> Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            From concept to deployment, we provide end-to-end development services 
            that transform your ideas into powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                             className="card-3d glass-effect spacious-card group hover:bg-white/5 transition-all duration-300"
             >
               <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300`}>
                 <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
               </div>
               
               <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">{service.title}</h3>
               <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">{service.description}</p>
              
                             <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                 {service.features.map((feature, featureIndex) => (
                   <li key={featureIndex} className="flex items-center space-x-3 sm:space-x-4">
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                     <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                   </li>
                 ))}
               </ul>
              
                             <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="group/btn flex items-center space-x-2 sm:space-x-3 text-primary hover:text-primary/80 transition-colors duration-200"
               >
                 <span className="font-medium text-xs sm:text-sm">Learn More</span>
                 <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
               </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Additional <span className="gradient-text">Services</span></h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond development, we offer comprehensive services to support your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                                 className="card-3d glass-effect spacious-card group hover:bg-white/5 transition-all duration-300"
               >
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                   <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                 </div>
                 <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">{service.title}</h4>
                 <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-12 sm:mb-16">Our <span className="gradient-text">Development Process</span></h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and project goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and architecture" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Deployment", description: "Launching and maintaining your application" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.4 + index * 0.1, duration: 0.5 }}
                className="relative"
              >
                                 <div className="glass-effect spacious-card text-center">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white font-bold text-sm sm:text-lg">
                     {process.step}
                   </div>
                   <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">{process.title}</h4>
                   <p className="text-xs sm:text-sm text-muted-foreground">{process.description}</p>
                 </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
