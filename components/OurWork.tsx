'use client'
// components/OurWorks.tsx
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  categories: string[];
  link: string;
  size: 'small' | 'medium' | 'large'; // Controls the card size in grid
  featured?: boolean; // Optional flag for featured projects
}

const projects: Project[] = [
//   {
//     id: 1,
//     title: "Monetise Your Craft",
//     client: "Cirrden",
//     image: "/images/work-1.jpg",
//     categories: ["Website", "Web App"],
//     link: "/projects/monetise",
//     size: 'large',
//     featured: true
//   },
  {
    id: 2,
    title: "Unizon",
    client: "Unizon",
    image: "/assets/product/unizon.jpeg",
    categories: ["Website", "Brand Identity"],
    link: "#",
    size: 'medium'
  },
  {
    id: 3,
    title: "Mobile Banking ",
    client: "GM Coffee",
    image: "/assets/product/finance.jpeg",
    categories: ["UI/UX", "Development"],
    link: "/projects/healthcare",
    size: 'medium'
  },
  {
    id: 4,
    title: "E-commerce Platform",
    client: "ShopNow",
    image: "/assets/product/outat.svg",
    categories: ["Web App", "UX Design"],
    link: "#",
    size: 'medium'
  },
  {
    id: 5,
    title: "Mobile Banking App",
    client: "FinTech Solutions",
    image: "/assets/product/balldraft.jpeg",
    categories: ["Mobile App", "UI Design"],
    link: "/projects/banking-app",
    size: 'medium'
  },
//   {
//     id: 6,
//     title: "Smart City Initiative",
//     client: "Municipal Corp",
//     image: "/images/work-6.jpg",
//     categories: ["Platform", "Development"],
//     link: "/projects/smart-city",
//     size: 'medium',
//     featured: true
//   }
];

const OurWorks: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.1
      }
    })
  };

  // Function to determine grid column span based on project size
  const getColumnSpan = (size: 'small' | 'medium' | 'large'): string => {
    switch(size) {
      case 'small':
        return 'col-span-12 sm:col-span-6 lg:col-span-4';
      case 'medium':
        return 'col-span-12 sm:col-span-6 lg:col-span-6';
      case 'large':
        return 'col-span-12 md:col-span-12 lg:col-span-8';
      default:
        return 'col-span-12 sm:col-span-6';
    }
  };
  
  // Function to determine aspect ratio based on project size
  const getAspectRatio = (size: 'small' | 'medium' | 'large'): string => {
    switch(size) {
      case 'small':
        return 'aspect-[3/4]';
      case 'medium':
        return 'aspect-[4/3]';
      case 'large':
        return 'aspect-[16/9]';
      default:
        return 'aspect-[4/3]';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
      id='works'
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="mb-16 md:mb-24"
        >
          <p className="text-gray-500 text-lg mb-4">— Success Stories</p>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gray-900">
            <span>PROVEN </span>
            <span className="font-bold">RESULTS</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`${getColumnSpan(project.size)}`}
            >
              <Link href={project.link} className="block h-full">
                <div 
                  className={`relative rounded-lg overflow-hidden mb-4 ${project.featured ? 'ring-2 ring-black' : 'ring-1 ring-gray-100'}`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`${getAspectRatio(project.size)} relative w-full overflow-hidden bg-gray-100`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                      }}
                      className="h-full w-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-all duration-700"
                      />
                    </motion.div>
                    
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70 opacity-0 transition-opacity duration-300"
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    />
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 p-5 text-white z-10 w-full"
                      animate={{ 
                        y: hoveredProject === project.id ? 0 : 10,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-wrap gap-2 items-center mb-2">
                        {project.categories.map((category, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {project.client}
                      </p>
                      
                      <div className="mt-3 flex items-center text-sm font-medium">
                        <span>View Case Study</span>
                        <svg 
                          className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Project info below the image */}
                <div className="mt-2">
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    {project.categories.slice(0, 2).map((category, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gray-100 px-2.5 py-0.5 rounded-full inline-block text-gray-700"
                      >
                        {category}
                      </span>
                    ))}
                    {project.categories.length > 2 && (
                      <span className="text-xs text-gray-500">+{project.categories.length - 2}</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.client}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-20 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white text-lg font-medium hover:bg-gray-900 transition-colors group"
          >
            <span>Start Your Project</span>
            <motion.svg 
              className="ml-2 w-5 h-5"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorks;