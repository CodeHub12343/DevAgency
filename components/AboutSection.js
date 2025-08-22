'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Target, Award, Clock, CheckCircle, Lightbulb } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to achieve your goals."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every project is crafted with attention to detail and industry best practices."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure your projects are delivered on time."
    }
  ]

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Full-Stack Developer",
      image: "/team/alex.jpg",
      skills: ["React", "Node.js", "Python", "AWS"]
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "/team/sarah.jpg",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Architect",
      image: "/team/mike.jpg",
      skills: ["Java", "Spring Boot", "Microservices", "Docker"]
    },
    {
      name: "Emily Watson",
      role: "DevOps Engineer",
      image: "/team/emily.jpg",
      skills: ["Kubernetes", "CI/CD", "Monitoring", "Security"]
    }
  ]

  return (
    <section id="about" ref={ref} className="section-spacing bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto container-spacing px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs font-medium mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm">About Our Agency</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
          >
            We're a <span className="gradient-text">Passionate Team</span> of
            <br className="hidden sm:block" />Digital Innovators
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            With over 5 years of experience in the digital landscape, we've helped 
            businesses of all sizes transform their ideas into powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="card-3d glass-effect spacious-card text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Meet Our <span className="gradient-text">Expert Team</span></h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of professionals brings together expertise in design, 
              development, and digital strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                className="card-3d glass-effect spacious-card text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">{member.name}</h4>
                <p className="text-primary text-xs mb-4 sm:mb-6">{member.role}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
        >
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">Why <span className="gradient-text">Choose Us</span></h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {[
                "Full-stack development expertise from concept to deployment",
                "Modern tech stack with cutting-edge frameworks and tools",
                "Scalable and maintainable code architecture",
                "24/7 support and maintenance services",
                "Agile development methodology for faster delivery",
                "Comprehensive testing and quality assurance"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect spacious-card">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">Innovation at Every Step</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                We don't just build applications; we create digital experiences that 
                inspire and engage users while driving business growth.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold gradient-text">99%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground">Project Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
