'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu,
  X,
  Building,
  Utensils,
  Store,
  Droplets,
  Mountain,
  Leaf
} from 'lucide-react';

export default function Home() {
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

  // FAQ Item Component with smooth toggle
  const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 mountain-gradient opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-playfair text-gray-900 mb-6"
            >
              <span className="gradient-text">Freshjal</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              Crafted by nature, perfected for you,<br />
              <span className="font-semibold text-blue-600">inspired by Himalayas glacier mountain</span>
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => window.location.href = '/quote'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Quote
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 right-20 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Droplets className="h-16 w-16 text-blue-400" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-20 opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Mountain className="h-20 w-20 text-indigo-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              Pure Himalayan Excellence
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our water is sourced from the pristine glaciers of the Himalayas, ensuring the highest quality 
              and purity standards. Every drop is carefully filtered and packaged to maintain its natural 
              mineral composition and refreshing taste.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">Pure glacier water with no artificial additives or preservatives</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Rigorous quality control and testing at every stage</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Himalayan Source</h3>
              <p className="text-gray-600">Directly sourced from pristine glacier mountains</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              Our Premium Products
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Experience the pure taste of Himalayan excellence with our premium packaged drinking water. 
              Each bottle is crafted by nature and perfected for you.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Products Images - Left Side */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {/* Product 1 - Orange Label */}
              <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-3">
                    <img 
                      src="/product/product-1.jpeg" 
                      alt="Freshjal Orange Label Water Bottle" 
                      className="w-full h-auto object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </div>
                </div>
              </div>

              {/* Product 2 - Blue Label */}
              <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-3">
                    <img 
                      src="/product/product-2.jpeg" 
                      alt="Freshjal Blue Label Water Bottle" 
                      className="w-full h-auto object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Natural
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Content - Right Side */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold font-playfair text-gray-900 mb-4">
                  Premium Himalayan Water
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Experience the pure taste of Himalayan excellence with our premium packaged drinking water. 
                  Each bottle is crafted by nature and perfected for you, bringing the essence of pristine glacier mountains to your table.
                </p>
              </div>

              {/* Product Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Product Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">500ml Premium Bottles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">BPA-Free Packaging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Himalayan Glacier Source</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">100% Natural Water</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Premium Quality Standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Custom Branding Available</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Quote Now
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Available for corporate orders, restaurants, and retail partners
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Why Choose Freshjal Water?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Himalayan Source</h4>
                  <p className="text-gray-600">Directly sourced from pristine glacier mountains for ultimate purity</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Natural</h4>
                  <p className="text-gray-600">No artificial additives, preservatives, or chemicals</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h4>
                  <p className="text-gray-600">Rigorous testing and quality control at every stage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-playfair">500+</div>
              <div className="text-blue-100">Corporate Clients</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-playfair">1M+</div>
              <div className="text-blue-100">Bottles Delivered</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-playfair">99.9%</div>
              <div className="text-blue-100">Purity Rate</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-playfair">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Trusted by leading businesses across industries for our premium water quality and exceptional service.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">CEO, TechSolutions India</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Freshjal has transformed our office experience in Mumbai. The premium water quality and reliable delivery service 
                have made a significant difference. Our employees love the taste and we appreciate the professional service.&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  P
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Owner, Spice Garden Restaurant</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;The custom-branded bottles have elevated our dining experience in Delhi. Guests appreciate the premium quality 
                and our brand visibility has increased. Freshjal&apos;s attention to detail is exceptional.&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arjun Mehta</h4>
                  <p className="text-sm text-gray-600">Manager, Grand Palace Hotel</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;The bulk dispensers and refill service have streamlined our operations in Bangalore. The water quality is consistently 
                excellent and the eco-friendly approach aligns with our sustainability goals.&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              Our Premium Water Products
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover our range of premium Himalayan water products, each crafted to meet the highest standards 
              of purity and taste for discerning businesses and consumers.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Premium Bottles */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Premium Bottles</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">500ml Glass Bottle</span>
                  <span className="font-semibold text-blue-600">₹45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">1L Glass Bottle</span>
                  <span className="font-semibold text-blue-600">₹75</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">500ml PET Bottle</span>
                  <span className="font-semibold text-blue-600">₹35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">1L PET Bottle</span>
                  <span className="font-semibold text-blue-600">₹55</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Premium Himalayan source
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  BPA-free packaging
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Custom branding available
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                Order Now
              </button>
            </motion.div>

            {/* Bulk Dispensers */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Bulk Dispensers</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">5L Refillable Jug</span>
                  <span className="font-semibold text-green-600">₹150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">10L Refillable Jug</span>
                  <span className="font-semibold text-green-600">₹280</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">20L Office Dispenser</span>
                  <span className="font-semibold text-green-600">₹450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Refill Service</span>
                  <span className="font-semibold text-green-600">₹800</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Eco-friendly refillable
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Automatic delivery scheduling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Professional installation
                </li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                Get Quote
              </button>
            </motion.div>

            {/* Custom Branding */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Custom Branding</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Logo Printing</span>
                  <span className="font-semibold text-purple-600">₹3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Custom Labels</span>
                  <span className="font-semibold text-purple-600">₹5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bottle Wrapping</span>
                  <span className="font-semibold text-purple-600">₹7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Design Service</span>
                  <span className="font-semibold text-purple-600">₹2,500</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Professional design team
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Multiple format options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Fast turnaround time
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors">
                Start Design
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Markets */}
      <section id="products" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              Serving Premium Markets
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Currently serving corporate clients, restaurants, and retail shops. 
              Soon available for individual consumers.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Office water dispensers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Meeting room supplies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Bulk delivery options
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Restaurants</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Table service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Kitchen supplies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom branding
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Store className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Retail Shops</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Individual bottles
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Multi-pack options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Premium packaging
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair mb-6"
            >
              Coming Soon for Everyone
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              We&apos;re expanding our reach to bring premium Himalayan water directly to your doorstep. 
              Join our waitlist to be the first to know when we launch.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Waitlist
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Everything you need to know about our premium Himalayan water services.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            <FAQItem 
              question="What makes Freshjal water different from other brands?"
              answer="Freshjal water is sourced directly from pristine Himalayan glaciers, ensuring the highest purity and natural mineral composition. Our water undergoes rigorous quality testing and is packaged in premium, BPA-free containers with no artificial additives."
            />
            
            <FAQItem 
              question="Do you offer custom branding for businesses?"
              answer="Yes! We provide comprehensive custom branding services including logo printing, custom labels, bottle wrapping, and professional design services. This helps businesses enhance their brand visibility and create a premium customer experience."
            />
            
            <FAQItem 
              question="What delivery options do you offer?"
              answer="We offer flexible delivery options including one-time deliveries, scheduled weekly/monthly deliveries, and emergency orders. Our professional delivery team ensures timely and safe delivery to your business location."
            />
            
            <FAQItem 
              question="Is there a minimum order requirement?"
              answer="For corporate clients, we recommend a minimum order of 100 bottles to ensure cost-effectiveness. However, we're flexible and can accommodate smaller orders for new clients or special events."
            />
            
            <FAQItem 
              question="When will Freshjal be available for individual consumers?"
              answer="We're currently expanding our operations across major Indian cities and plan to launch individual consumer services by Q2 2024. Join our waitlist to be notified when we launch in your city and get exclusive early access offers."
            />
            
            <FAQItem 
              question="Do you provide installation for bulk dispensers?"
              answer="Yes, our professional team handles complete installation of bulk dispensers across India, including setup, testing, and staff training. We also provide ongoing maintenance and support to ensure optimal performance."
            />
            
            <FAQItem 
              question="Which cities do you currently serve in India?"
              answer="We currently serve Greater Noida, Delhi, Noida, and Ghaziabad as primary cities. We also serve Mumbai, Bangalore, Hyderabad, Chennai, and other major cities. We're rapidly expanding to other locations and can arrange special deliveries to other cities for bulk orders."
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Ready to experience the pure taste of Himalayan excellence? 
              Contact us for corporate partnerships and bulk orders.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 8962775753</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@freshjal.com</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Plot No. BGH-A, Site C, opp. Sector Zeta, Housing Extn, Gulistanpur, Greater Noida, Uttar Pradesh 201310</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold font-playfair">Freshjal</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Crafted by nature, perfected for you, inspired by Himalayas glacier mountain. 
                Premium packaged water for discerning clients.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/quote" className="hover:text-white transition-colors">Get Quote</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                  <li><a href="/shipping" className="hover:text-white transition-colors">Shipping Policy</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Freshjal. All rights reserved. Premium Himalayan water, crafted for excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
