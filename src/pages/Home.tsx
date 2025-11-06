import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CodeBackground from '../components/CodeBackground';
import { Link } from 'react-router-dom';

interface HomeProps {
  onOpenContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col">
      <CodeBackground />
      
      {/* Hero Section - Centered on Mobile, Left Aligned on Larger Screens */}
      <section className="relative flex-1 flex items-center justify-center sm:justify-start px-4 sm:px-6 lg:px-8 pt-20 md:pt-0" style={{ zIndex: 10 }}>
        <div className="container mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left flex flex-col items-start justify-center w-full max-w-4xl"
          >
            
            {/* Main Heading - Increased Text Sizes */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="block">Empowering Brands Through</span>
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block leading-normal pb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  overflow: 'visible',
                }}
              >
                Digital Innovation
              </span>
            </h1>      

            {/* Description - Increased Text Sizes */}
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-3xl">
              We create modern web solutions that combine creativity, technology, and strategy to bring your digital vision to life.
            </p>
            
            {/* Buttons - Increased Text Sizes, Remain in Single Line */}
            <div className="flex flex-row flex-wrap gap-4 justify-start items-center w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenContact}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 text-lg sm:text-xl"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm bg-slate-800/30 text-lg sm:text-xl"
              >
                <Link to="/our-works" className="flex items-center justify-center space-x-2 w-full">
                  <span>View Our Works</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.button>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
