'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PremiumRotatingElement = () => {
  const { scrollYProgress } = useScroll();
  const [isHovered, setIsHovered] = useState(false);
  
  // Create multiple rotation transforms for nested elements
  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [360, 0]); // Counter-rotation
  
  // Scale effect based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  
  // Opacity effect for entrance
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Show the element after a slight delay for a nice entrance effect
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed right-8 bottom-8 z-50 md:right-12 md:bottom-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ scale }}
    >
      {/* Outer rotating element */}
      <motion.div
        style={{ rotate: rotateOuter }}
        className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center"
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle with dashes */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            stroke="black" 
            strokeWidth="1.5" 
            strokeDasharray="4 2"
            fill="none" 
          />
          
          {/* Cardinal points */}
          {[0, 90, 180, 270].map((angle, index) => (
            <g key={index} transform={`rotate(${angle} 50 50)`}>
              <circle cx="50" cy="5" r="2" fill="black" />
              <rect x="49" y="10" width="2" height="5" fill="black" />
            </g>
          ))}
        </svg>
      </motion.div>
      
      {/* Middle rotating element (counter direction) */}
      <motion.div
        style={{ 
          rotate: rotateInner,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            stroke="black" 
            strokeWidth="1" 
            fill={isHovered ? "#f0f0f0" : "white"} 
          />
          
          {/* Decorative geometric elements */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <path 
              key={index}
              d={`M50 50 L${50 + 30 * Math.cos(angle * Math.PI/180)} ${50 + 30 * Math.sin(angle * Math.PI/180)}`}
              stroke="black" 
              strokeWidth="0.5"
              opacity="0.5"
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Central non-rotating element */}
      <div
        style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 50 50" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center circle */}
            <circle 
              cx="25" 
              cy="25" 
              r="20" 
              fill="black" 
            />
            
            {/* Q monogram */}
            <text 
              x="25" 
              y="30" 
              fill="white" 
              textAnchor="middle" 
              fontSize="18" 
              fontWeight="bold"
              fontFamily="Arial"
            >
              Q
            </text>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PremiumRotatingElement;