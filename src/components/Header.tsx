'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Menu, 
  X 
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Droplets className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold font-playfair text-gray-900">Freshjal</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8 items-center"
          >
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <button 
              onClick={() => window.location.href = '/quote'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />
            
            {/* Side Drawer Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-screen bg-white">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold font-playfair text-gray-900">Freshjal</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6 space-y-4 bg-white overflow-y-auto">
                  <a 
                    href="#about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-3 border-b border-gray-100"
                  >
                    About
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-3 border-b border-gray-100"
                  >
                    Products
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-3 border-b border-gray-100"
                  >
                    Contact
                  </a>
                </div>
                
                {/* CTA Button */}
                <div className="p-6 border-t border-gray-200 bg-white">
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = '/quote';
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
