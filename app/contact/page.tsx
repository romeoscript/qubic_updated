'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Service options for the dropdown
const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'E-commerce Solutions',
  'Custom Software Development',
  'Digital Marketing',
  'Branding & Identity',
];

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle service selection
  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setShowServices(false);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success state
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        delay: 0.6
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.95 }
  };

  const successVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const dropdownVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const optionVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      x: 5,
      color: "#000",
      fontWeight: "500",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.98 }
  };

  // Floating particles in the background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: [`${particle.x}%`, `${particle.x + 10}%`, `${particle.x}%`],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
        {Array.from({ length: 13 }).map((_, i) => (
          <motion.div 
            key={`h-${i}`}
            className="h-px w-full bg-gray-400"
            style={{ gridRow: i + 1, gridColumn: "1 / span 12" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
          />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <motion.div 
            key={`v-${i}`}
            className="w-px h-full bg-gray-400"
            style={{ gridColumn: i + 1, gridRow: "1 / span 12" }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact info and heading */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="initial"
            animate="animate"
            variants={pageVariants}
          >
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <h1 className=" text-4xl md:text-6xl font-bold mb-6">
                Let's <motion.span 
                  className="italic relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  build
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span> your idea together.
              </h1>
              <motion.p 
                className="text-gray-300 text-xl md:text-2xl"
                variants={itemVariants}
              >
                We are here to bring your concept to life or expand your existing projects.
              </motion.p>
            </motion.div>

            <motion.div 
              className="mb-12 space-y-8"
              variants={itemVariants}
            >
              <div>
                <motion.h3 
                  className="text-black text-lg mb-4 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.span 
                    className="mr-3 inline-block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.span>
                  Get in Touch
                </motion.h3>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  info@qubic.com.ng
                </motion.p>
              </div>

              <div>
                <motion.h3 
                  className="text-black text-lg mb-4 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.span 
                    className="mr-3 inline-block"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.span>
                  Our Location
                </motion.h3>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Lagos, Nigeria
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              variants={itemVariants}
            >
              {/* Social media links */}
              {['twitter', 'instagram', 'linkedin', 'github'].map((social, index) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com/qubicstudio`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-black transition-colors"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 1.3 + index * 0.1 } 
                  }}
                >
                  <span className="sr-only">{social}</span>
                  {social === 'twitter' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                    </svg>
                  ) : social === 'instagram' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  ) : social === 'linkedin' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-2xl p-8 sm:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated dots decoration */}
            <div className="absolute -top-16 -right-16 w-32 h-32">
              <motion.div 
                className="absolute w-full h-full"
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-white bg-opacity-30"
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-40px) translateX(-50%)` 
                    }}
                    animate={{ 
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="absolute -bottom-16 -left-16 w-32 h-32">
              <motion.div 
                className="absolute w-full h-full"
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white bg-opacity-30"
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 60}deg) translateY(-35px) translateX(-50%)` 
                    }}
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Form heading */}
            <motion.h2 
              className="text-black text-2xl font-semibold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Let's discuss your project
            </motion.h2>

            {/* Success message */}
            {isSubmitted ? (
              <motion.div 
                className="text-center py-16"
                variants={successVariants}
                initial="initial"
                animate="animate"
              >
                <motion.div 
                  className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <motion.h3 
                  className="text-black text-2xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Message Sent!
                </motion.h3>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  We'll get back to you as soon as possible.
                </motion.p>
              </motion.div>
            ) : (
              /* Contact form */
              <motion.form 
                onSubmit={handleSubmit}
                initial="initial"
                animate="animate"
                variants={pageVariants}
                className="space-y-6"
              >
                {/* Name field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    NAME <span className="text-red-400">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-500 focus:border-white text-black p-3 outline-none transition-all"
                    placeholder="Enter your full name"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>

                {/* Email field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    EMAIL ADDRESS <span className="text-red-400">*</span>
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-500 focus:border-white text-black p-3 outline-none transition-all"
                    placeholder="Enter your email address"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>

                {/* Service selection */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    WHAT SERVICE ARE YOU LOOKING FOR? <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <motion.button
                      type="button"
                      className="w-full bg-transparent border-b border-gray-500 focus:border-white text-left text-gray-400 p-3 flex justify-between items-center outline-none transition-all"
                      onClick={() => setShowServices(!showServices)}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {formData.service || "Select services"}
                      <motion.span
                        animate={{ rotate: showServices ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </motion.button>

                    <motion.div
                      className="absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-xl z-10 overflow-hidden"
                      variants={dropdownVariants}
                      initial="closed"
                      animate={showServices ? "open" : "closed"}
                    >
                      <div className="max-h-60 overflow-y-auto py-2">
                        {serviceOptions.map((service, index) => (
                          <motion.div
                            key={service}
                            variants={optionVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            whileTap="tap"
                            custom={index}
                            className="px-4 py-2 cursor-pointer text-gray-300 hover:bg-gray-700"
                            onClick={() => handleServiceSelect(service)}
                          >
                            {service}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Message field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-black text-sm font-medium mb-2">
                    MESSAGE <span className="text-red-400">*</span>
                  </label>
                  <motion.textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-black border-b border-gray-500 focus:border-white p-3 outline-none transition-all resize-none"
                    placeholder="Project details, requirements, etc."
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>

                {/* Submit button */}
                <motion.div variants={itemVariants} className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black  font-medium py-3 px-6 rounded-md transition-all relative overflow-hidden group"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.span
                      className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-indigo-600 group-hover:w-full transition-all duration-700 ease-in-out z-0"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : "SEND MESSAGE"}
                    </span>
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated blobs */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
};

export default Contact;