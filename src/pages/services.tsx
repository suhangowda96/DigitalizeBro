import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Layout, 
  Monitor, 
  Server, 
  Rocket,
  Database,
  Cloud,
  Search
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Import components and images
import CodeBackground from '../components/CodeBackground';
import fullstackImage from '../../images/pages/web/fullstack.png';
import websiteImage from '../../images/pages/web/aboutus.webp';
import cloud from '../../images/pages/web/cloud.jpg';
import backendImage from '../../images/pages/web/database.jpg';

const Services: React.FC = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.05, triggerOnce: true });

  const webDevServices = [
    {
      icon: Code,
      title: 'Full-stack Web Apps',
      description: 'End-to-end custom web applications with modern technologies',
      detailedDescription: 'We build responsive and dynamic web applications using modern frameworks like React, Node.js, Django, and Flask. We focus is on delivering full-stack web solutions with clean architecture, fast performance and seamless API integration. Every project is tailored to meet client needs with efficiency and scalability in mind.',
      image: fullstackImage,
      features: ['React, Node.js, Django, Flask', 'API Integration', 'Admin Dashboards', 'Real-time Applications', 'Database Management', 'Authentication Systems'],
      color: 'text-blue-500',
      dotColor: 'bg-blue-500'
    },
    {
      icon: Layout,
      title: 'Website Design & Development',
      description: 'Professional websites that represent your brand',
      detailedDescription: 'Our web development services focus on building visually appealing, responsive, and high-performing websites that reflect your brand identity. We ensure fast loading speeds, smooth functionality and an exceptional user experience across all devices.',
      image: websiteImage,
      features: ['Business Websites', 'Landing Pages', 'Portfolio Sites', 'Personal Websites', 'Responsive Design', 'E-commerce Platforms'],
      color: 'text-purple-500',
      dotColor: 'bg-purple-500'
    },
    {
    icon: Database,
    title: 'Database & Backend Architecture',
    description: 'Secure and scalable backend systems',
    detailedDescription: 'We design and implement reliable backend architectures with well-structured databases and secure APIs. Our solutions ensure seamless data flow, fast performance and strong protection for user information across all layers of your application.',
    image: backendImage,
    features: ['MySQL & PostgreSQL', 'MongoDB & Supabase', 'RESTful & GraphQL APIs', 'Authentication & Authorization', 'Data Security', 'Server-side Logic'],
    color: 'text-green-500',
    dotColor: 'bg-green-500'
    },
    {
    icon: Cloud,
    title: 'Hosting & Deployment',
    description: 'Reliable and optimized hosting solutions',
    detailedDescription: 'Our hosting and deployment services ensure your website or web app runs smoothly and securely across the web. We handle everything from domain setup to SSL configuration, performance optimization and continuous deployment using modern cloud platforms.',
    image: cloud,
    features: ['Shared, VPS, or cloud hosting', 'Vercel, Netlify Or Hostinger Setup', 'Domain registration & linking', 'Free HTTPS/SSL configuration', 'Automated deployment from GitHub', 'Docker containerization (if advanced)'],
    color: 'text-orange-500',
    dotColor: 'bg-orange-500'
    },
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular.js'],
      icon: Monitor,
      color: 'from-blue-500 to-blue-600',
      dotColor: 'bg-blue-500'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python/Django', 'Express.js', 'GraphQL', 'REST APIs'],
      icon: Server,
      color: 'from-green-500 to-green-600',
      dotColor: 'bg-green-500'
    },
    {
      category: 'Database',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      dotColor: 'bg-purple-500'
    },
    {
      category: 'DevOps & Cloud',
      items: ['Vercel', 'Hostinger', 'Docker', 'Github', 'Domain registration'],
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      dotColor: 'bg-orange-500'
    }
  ];

  // Container animation for all elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CodeBackground /> {/* Added matching background */}
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[90vh]" style={{ zIndex: 10 }}>
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            height: '100%',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="w-full text-center translate-y-4 md:translate-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-none"
            >
              Our{' '}
              <span className="text-white">
                Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Building fast, scalable web applications with modern technologies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Web Development Services Section */}
      <section ref={servicesRef} className="py-12 md:py-20 bg-white relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              OUR WEB DEVELOPMENT SERVICES
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Web Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we create powerful web applications that drive business growth
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-12 md:space-y-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {webDevServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center mb-2">
                        <service.icon size={20} className={service.color} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                        {service.description}
                      </p>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {service.detailedDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${service.dotColor} rounded-full flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We work with modern technologies to build scalable, maintainable, and high-performance applications
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 ${tech.dotColor} rounded-full`}></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-12 md:py-20 bg-white relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering high-quality web solutions on time and within budget
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Search, 
                title: 'Discovery & Planning', 
                description: 'Understanding requirements, planning architecture, and defining project scope',
                color: 'from-blue-500 to-blue-600',
                dotColor: 'bg-blue-500'
              },
              { 
                icon: Layout, 
                title: 'Design & Prototyping', 
                description: 'Creating wireframes, UI/UX design, and interactive prototypes',
                color: 'from-purple-500 to-purple-600',
                dotColor: 'bg-purple-500'
              },
              { 
                icon: Code, 
                title: 'Development', 
                description: 'Agile development with regular updates and quality assurance',
                color: 'from-green-500 to-green-600',
                dotColor: 'bg-green-500'
              },
              { 
                icon: Rocket, 
                title: 'Testing & Launch', 
                description: 'Comprehensive testing, deployment, and post-launch support',
                color: 'from-orange-500 to-orange-600',
                dotColor: 'bg-orange-500'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a powerful web solution that drives your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 inline-block shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                Start Your Project
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/our-works"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-full transition-all duration-300 inline-block"
              >
                Our Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;