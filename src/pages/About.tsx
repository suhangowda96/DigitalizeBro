import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Search, PenTool, Cog, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import CodeBackground from '../components/CodeBackground'; // Assuming this is the path to CodeBackground

// Import the image
import aboutImage from '../../images/pages/aboutus.webp';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Maintainable, scalable solutions built with modern technologies',
      color: 'text-blue-500',
      lineColor: 'bg-blue-500',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Visually stunning interfaces that captivate users',
      color: 'text-purple-500',
      lineColor: 'bg-purple-500',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized applications for exceptional speed',
      color: 'text-yellow-500',
      lineColor: 'bg-yellow-500',
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Meaningful interactions that drive engagement',
      color: 'text-green-500',
      lineColor: 'bg-green-500',
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We learn about your project and goals',
      icon: Search,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'We create a stunning visual design',
      icon: PenTool,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      step: '03',
      title: 'Develop',
      desc: 'We build with modern technologies',
      icon: Cog,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'We launch and support your project',
      icon: Rocket,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
    }
  ];

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
              About{' '}
              <span className="text-white">
                Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Crafting exceptional digital experiences with purpose
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  <strong>DigitalizeBro is dedicated to creating exceptional digital experiences that drive business growth. </strong> 
                  Our team of expert developers and designers work collaboratively to deliver solutions that exceed client expectations.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  We specialize in building robust, scalable web applications and visually compelling websites 
                  that align with your business objectives. Our approach combines technical expertise with 
                  creative innovation to deliver products that stand out in today's competitive digital landscape.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  At DigitalizeBro, we’re committed to being a trusted partner for businesses aiming to strengthen their online presence and make a lasting digital impact.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Image Container with Blur Effect */}
              <div className="relative rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                {/* Blurred Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[1px] scale-105"
                  style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Centered Content */}
                <div className="relative z-10 text-center text-white p-8">
                  <Code size={64} className="mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
                  <p className="text-lg opacity-90 max-w-md">
                    Where innovative design meets robust development
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="mt-6">
                  <div className={`h-1 w-0 group-hover:w-full ${feature.lineColor} rounded-full transition-all duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we bring your ideas to life with precision and care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>
            
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-center relative ${item.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  <item.icon size={32} />
                </div>
                <div className="text-sm font-bold text-gray-500 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Start Your Digital Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to create innovative solutions that elevate your business and engage your audience
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
                Get In Touch
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

export default About;
