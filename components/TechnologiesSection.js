'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TechnologiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologyCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-black to-gray-800" },
        { name: "Vue.js", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "Angular", level: 80, color: "from-red-500 to-pink-500" },
        { name: "TypeScript", level: 92, color: "from-blue-600 to-blue-800" },
        { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-blue-500" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 93, color: "from-green-600 to-green-800" },
        { name: "Python", level: 87, color: "from-yellow-500 to-orange-500" },
        { name: "Java", level: 82, color: "from-red-600 to-red-800" },
        { name: "PHP", level: 85, color: "from-purple-500 to-indigo-500" },
        { name: "Go", level: 78, color: "from-blue-500 to-cyan-500" },
        { name: "C#", level: 80, color: "from-purple-600 to-purple-800" }
      ]
    },
    {
      category: "Databases",
      technologies: [
        { name: "MongoDB", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "PostgreSQL", level: 88, color: "from-blue-500 to-indigo-500" },
        { name: "MySQL", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Redis", level: 82, color: "from-red-600 to-red-800" },
        { name: "Firebase", level: 87, color: "from-yellow-500 to-orange-500" },
        { name: "DynamoDB", level: 75, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", level: 88, color: "from-orange-500 to-yellow-500" },
        { name: "Docker", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "Kubernetes", level: 78, color: "from-blue-600 to-blue-800" },
        { name: "Azure", level: 80, color: "from-blue-500 to-indigo-500" },
        { name: "Google Cloud", level: 82, color: "from-blue-500 to-green-500" },
        { name: "CI/CD", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    }
  ]

  const tools = [
    { name: "Git", icon: "🔧", description: "Version Control" },
    { name: "VS Code", icon: "💻", description: "Code Editor" },
    { name: "Figma", icon: "🎨", description: "Design Tool" },
    { name: "Postman", icon: "📡", description: "API Testing" },
    { name: "Jira", icon: "📋", description: "Project Management" },
    { name: "Slack", icon: "💬", description: "Communication" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "Jenkins", icon: "⚙️", description: "CI/CD Pipeline" }
  ]

  const frameworks = [
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Express.js", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Nuxt.js", category: "Frontend" },
    { name: "Gatsby", category: "Frontend" }
  ]

  return (
    <section id="technologies" ref={ref} className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
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
            <span className="text-xs sm:text-sm">Our Tech Stack</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
          >
            Cutting-Edge <span className="gradient-text">Technologies</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We leverage the latest technologies and tools to build scalable, 
            performant, and maintainable applications that drive business growth.
          </motion.p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-12 sm:space-y-16 mb-16 sm:mb-20 md:mb-24"
        >
          {technologyCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + categoryIndex * 0.2, duration: 0.5 }}
                             className="glass-effect spacious-card"
             >
               <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 sm:mb-10 text-center">
                 <span className="gradient-text">{category.category}</span> Technologies
               </h3>
              
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + categoryIndex * 0.2 + techIndex * 0.1, duration: 0.5 }}
                    className="space-y-2 sm:space-y-3"
                  >
                                       <div className="flex justify-between items-center">
                     <span className="font-medium text-xs sm:text-sm">{tech.name}</span>
                     <span className="text-xs text-muted-foreground">{tech.level}%</span>
                   </div>
                    
                    <div className="w-full bg-secondary/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{ delay: 1.5 + categoryIndex * 0.2 + techIndex * 0.1, duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16"
        >
          {/* Development Tools */}
          <div>
                         <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 sm:mb-10 text-center">
               <span className="gradient-text">Development</span> Tools
             </h3>
            
                         <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                                     className="card-3d glass-effect spacious-card text-center group hover:bg-white/5 transition-all duration-300"
                 >
                   <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{tool.icon}</div>
                   <h4 className="text-sm sm:text-base font-semibold mb-2">{tool.name}</h4>
                   <p className="text-xs sm:text-sm text-muted-foreground">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
                         <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 sm:mb-10 text-center">
               <span className="gradient-text">Frameworks</span> & Libraries
             </h3>
            
                         <div className="space-y-4 sm:space-y-6">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 2.4 + index * 0.1, duration: 0.5 }}
                                     className="card-3d glass-effect spacious-card flex items-center justify-between group hover:bg-white/5 transition-all duration-300"
                 >
                   <div>
                     <h4 className="text-sm sm:text-base font-semibold">{framework.name}</h4>
                     <p className="text-xs sm:text-sm text-muted-foreground">{framework.category}</p>
                   </div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Why Choose Our <span className="gradient-text">Tech Stack</span></h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our carefully selected technology stack ensures scalability, performance, and maintainability for your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                title: "Scalability",
                description: "Built with technologies that scale from startup to enterprise level",
                icon: "📈"
              },
              {
                title: "Performance",
                description: "Optimized for speed and efficiency across all platforms",
                icon: "⚡"
              },
              {
                title: "Security",
                description: "Enterprise-grade security practices and compliance standards",
                icon: "🔒"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.8 + index * 0.2, duration: 0.5 }}
                                 className="card-3d glass-effect spacious-card text-center"
               >
                 <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{highlight.icon}</div>
                 <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">{highlight.title}</h4>
                 <p className="text-xs sm:text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass-effect spacious-card max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Ready to Build Something Amazing?</h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
              Let's discuss your project requirements and how our technology expertise can bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSection
