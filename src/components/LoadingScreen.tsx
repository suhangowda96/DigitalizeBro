import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Braces } from 'lucide-react';
import CodeBackground from './CodeBackground';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <CodeBackground />

      {/* Main Loading Content */}
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block p-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30"
          >
            <Code2 className="w-16 h-16 text-blue-400" />
          </motion.div>
          
          {/* Floating Icons */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2"
          >
            <Terminal className="w-6 h-6 text-purple-400" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -bottom-2 -left-2"
          >
            <Braces className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-normal pb-2 overflow-visible"
          >
            DigitalizeBro
          </h1>
          <p className="text-slate-300 text-lg mb-8">Crafting Digital Excellence</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center items-center space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-6 text-slate-400 font-mono text-sm"
        >
          Loading amazing experiences...
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;