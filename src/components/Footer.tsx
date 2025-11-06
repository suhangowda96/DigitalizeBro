import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  
  // Don't render footer on home page
  if (location.pathname === '/') {
    return null;
  }

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Works', path: '/our-works' },
      { name: 'Contact', path: '/contact' },
      { name: 'Feedback', path: '/feedback' }
    ],
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700 w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-3 group mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="w-10 h-10 text-blue-400 group-hover:text-purple-400 transition-colors" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DigitalizeBro
              </span>
            </Link>
            <p className="text-base text-slate-300 mb-6 leading-relaxed">
              Crafting exceptional digital experiences with innovative solutions 
              that drive business growth and user engagement.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:digitalizebro@gmail.com"
                className="flex items-center space-x-3 text-base text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>digitalizebro@gmail.com</span>
              </a>
              <a 
                href="tel:+919739366401"
                className="flex items-center space-x-3 text-base text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 9739366401</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-base text-slate-400">
              © 2025 DigitalizeBro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;