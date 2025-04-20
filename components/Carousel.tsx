// components/Carousel.tsx
import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CarouselProps = {
  children: ReactNode[];
  showIndicators?: boolean;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
};

const Carousel = ({
  children,
  showIndicators = true,
  className = '',
  autoPlay = true,
  interval = 5000
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle auto-play functionality

  //ts-ignore
  useEffect(() => {
    if (!autoPlay) return;
    
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, interval);
    };
    
    startTimer();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoPlay, interval]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full flex justify-center"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 p-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 p-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;