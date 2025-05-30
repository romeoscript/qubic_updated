'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ContactMethod {
  title: string;
  description: string;
  icon: string;
  link: string;
  type: 'primary' | 'secondary';
}

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

// Service options for the dropdown
const serviceOptions = [
  'Enterprise Software Development',
  'Cloud Infrastructure & DevOps',
  'AI & Machine Learning Solutions',
  'Digital Transformation',
  'Custom Software Development',
  'Cybersecurity Solutions',
  'Data Analytics & Business Intelligence',
];

const contactMethods: ContactMethod[] = [
  {
    title: "Schedule a Call",
    description: "Book a 30-minute consultation with our experts",
    icon: "📞",
    link: "https://calendly.com/romeobourne211/30min",
    type: "primary"
  },
  {
    title: "Email Us",
    description: "Send us a detailed message about your project",
    icon: "✉️",
    link: "mailto:info@qubic.com.ng",
    type: "secondary"
  }
];

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setFormStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Let&apos;s <motion.span 
                  className="italic relative inline-block text-blue-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  transform
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span> your business
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Choose your preferred way to connect with us. We&apos;re here to help you achieve your digital transformation goals.
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method) => (
                <motion.div
                  key={method.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-lg ${
                    method.type === 'primary' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm mb-4">{method.description}</p>
                  <Link 
                    href={method.link}
                    className={`inline-block px-4 py-2 rounded ${
                      method.type === 'primary'
                        ? 'bg-white text-blue-600'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">We&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full bg-transparent border-b border-gray-500 focus:border-white text-white placeholder-white p-3 outline-none transition-all"
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
                    className="w-full bg-transparent border-b border-gray-500 focus:border-white text-white placeholder-white p-3 outline-none transition-all"
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
                      className="w-full bg-transparent border-b border-gray-500 focus:border-white text-left text-white placeholder-white p-3 flex justify-between items-center outline-none transition-all"
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
                    className="w-full bg-transparent text-white placeholder-white border-b border-gray-500 focus:border-white p-3 outline-none transition-all resize-none"
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
                    className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all relative overflow-hidden group"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : "SEND MESSAGE"}
                    </span>
                  </motion.button>
                </motion.div>
              </form>
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