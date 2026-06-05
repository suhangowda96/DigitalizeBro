import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Palette, Globe, Award, Target, Heart, X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CodeBackground from '../components/CodeBackground';

// import images
import Nemadhi from '../../images/works/nemmadi.png'
import PoadiumImage from '../../images/works/Poadium.png'
import monaloka from '../../images/works/monaloka.png'
import CurriceImage from '../../images/works/CURRICE LOGO.png';
import MMGranitesImage from '../../images/works/mmgranets.png';
import FlyingBrushImage from '../../images/works/flyingbrushdisigins.jpeg';
import herbstheamessetials from '../../images/works/herbs_thyme_essentials.jpeg';

interface OurWorksProps {
  onOpenContact: () => void;
}

const OurWorks: React.FC<OurWorksProps> = ({ onOpenContact }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every project is built with intention and meaningful impact in mind.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring excellence in every detail.'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Our love for web development shines through in every project we create.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Nemmadi Dairy Farm Management System',
      description: 'A comprehensive dairy farm management platform designed to streamline operations, including staff attendance with facial recognition, milk yield tracking, inspection reports, and purchase approvals. Built for efficiency, scalability, and role-based access control.',
      image: Nemadhi,
      category: 'Web Application',
      tech: ['React', 'Django', 'Supabase', 'JWT Authentication', 'Facial Recognition (OpenCV)'],
      features: [
        'Facial Recognition Attendance',
        'Role-Based Access Control (Admin & Supervisor)',
        'Milk Yield Management',
        'Weekly Inspection Tracking',
        'Purchase Request & Approval Workflow',
        'Real-time Notifications',
        'Responsive Dashboard'
      ],
      link: 'https://nemmadi-dairy-farm.vercel.app/'
    },
    {
      id: 2,
      title: 'POADIUM',
      description: 'A modern digital agency platform empowering brands through creative design, technology, and marketing solutions. POADIUM focuses on transforming ideas into impactful digital experiences with a clean, futuristic aesthetic and sustainable approach.',
      image: PoadiumImage,
      category: 'Website / Brand Platform',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Hosting'],
      features: [
        'Dynamic and Responsive UI',
        'Framer Motion Animations',
        'Modern Brand Storytelling',
        'Optimized Performance and SEO',
        'Sleek Gradient and Typography System',
        'Fully Deployed on Vercel'
      ],
      link: 'https://poadium.com/'
    },
    {
      id: 3,
      title: "Monaloka Homestay",
      description: "A beautiful homestay website showcasing serene accommodations and natural surroundings. The platform features gallery displays, booking information, and immersive visuals that capture the essence of peaceful living amidst nature.",
      image: monaloka,
      category: "Website",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel Hosting"],
      features: [
        "Immersive Visual Gallery",
        "Responsive Booking Information",
        "Smooth Animations and Transitions",
        "SEO Optimized",
        "Mobile-First Design",
        "Fast Loading Performance"
      ],
      link: "https://monalokahomestay.in/"
    },
    {
      id: 4,
      title: 'Currice',
      description: "India’s first curated multi-brand food experience platform designed for large-scale events, weddings, and celebrations. Currice brings premium food brands together under one seamless digital experience with a luxury-first approach.",
      image: CurriceImage,
      category: 'Website / Brand Platform',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Brand Design', 'Vercel Hosting'],
      features: [
        'Luxury Brand Identity',
        'High-Impact Hero Sections',
        'Smooth Motion Animations',
        'Event-Focused UX Design',
        'Fully Responsive Layout',
        'Optimized Performance & SEO'
      ],
      link: 'https://www.currice.in/'
    },
    {
      id: 5,
      title: 'MM Granites & Exports',
      description: 'A professional export-focused website built for a granite manufacturing and export company. The platform showcases premium granite collections, company infrastructure, global reach, and contact inquiry integration with a strong business-oriented UI.',
      image: MMGranitesImage,
      category: 'Website',
      tech: ['React', 'Tailwind CSS', 'Responsive Design', 'SEO Optimization', 'Business Email Integration'],
      features: [
        'Product Showcase Gallery',
        'Export-Focused Business Layout',
        'Inquiry Contact Integration',
        'SEO Optimized Pages',
        'Mobile Responsive Design',
        'Professional Branding Structure'
      ],
      link: 'https://www.mmgranitesexports.com/'
    },
    {
      id: 6,
      title: 'Flying Brush Designs',
      description: 'A modern creative studio website built to showcase digital services, branding expertise, and client projects. Designed with a strong visual identity and smooth interactions to reflect innovation and creativity.',
      image: FlyingBrushImage,
      category: 'Website / Brand Platform',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO', 'Vercel Hosting'],
      features: [
        'Modern Creative UI',
        'Smooth Motion Animations',
        'Portfolio Showcase',
        'SEO Optimized Structure',
        'Professional Email & Domain Setup',
        'Fully Responsive Design'
      ],
      link: 'https://www.flyingbrushdesigns.com/'
    },
    {
      id: 7,
      title: 'Herbs & Thymes Essentials',
      description: 'A premium herbal skincare and wellness e-commerce platform designed to reflect luxury, purity, and nature-inspired beauty. The website delivers an immersive shopping experience with elegant visuals, modern UI, responsive layouts, and a strong brand identity.',
      image: herbstheamessetials,
      category: 'E-Commerce Website',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'SEO Optimization'],
      features: [
        'Premium Luxury UI/UX',
        'Product Collection Showcase',
        'Mobile & Desktop Optimized',
        'Smooth Animations & Interactions',
        'SEO Friendly Architecture',
        'Brand-Focused Design System'
      ],
      link: 'https://www.herbsthymesessentials.com/'
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Website':
        return Globe;
      case 'Web Application':
        return Code;
      default:
        return Palette;
    }
  };

  // Modal component
  const ProjectModal = () => {
    if (!selectedProject) return null;
    const CategoryIcon = getCategoryIcon(selectedProject.category);

    return (
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Hero image */}
              <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-medium text-gray-900 mb-2">
                    <CategoryIcon className="w-4 h-4 text-blue-500" />
                    <span>{selectedProject.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Project
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CodeBackground />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[90vh]" style={{ zIndex: 10 }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            height: '100%',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
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
                Works
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Discover our work that defines digital excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 bg-white relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Showcasing innovative solutions and successful collaborations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openModal(project)}
                  className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute top-2 right-2 z-10">
                      <div className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 md:p-2">
                        <CategoryIcon className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-400" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="text-xs md:text-sm text-blue-400 font-medium truncate max-w-[120px] md:max-w-none">{project.category}</span>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 md:p-2 bg-gray-100 hover:bg-blue-500/50 rounded-full transition-colors flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-gray-600 hover:text-white" />
                      </a>
                    </div>

                    <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">{project.description}</p>

                    <div className="mb-3 md:mb-4">
                      <h4 className="text-[11px] md:text-sm font-medium text-gray-700 mb-1.5">Tech:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-[10px] md:text-xs text-blue-600 truncate max-w-[90px] md:max-w-none"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-1.5 py-0.5 text-[10px] md:text-xs text-gray-500">+{project.tech.length - 3}</span>
                        )}
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <h4 className="text-[11px] md:text-sm font-medium text-gray-700 mb-1.5">Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature) => (
                          <li key={feature} className="text-[10px] md:text-xs text-gray-600 flex items-start">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-1.5 mt-1 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 text-center text-xs text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Click for details →
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Your vision, our expertise.
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
              <button
                onClick={onOpenContact}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-full transition-all duration-300 inline-block"
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal />
    </div>
  );
};

export default OurWorks;
