'use client'
// components/AboutUs.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ani Peter",
    role: "Co-Founder & Executive Manager",
    image: "/assets/home/peter.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    name: "Chukwuemeka Romeo",
    role: "Co-founder & Executive Admin",
    image: "/assets/home/romeo.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Emmanuel Umoren",
    role: "Founding Product Designer",
    image: "/assets/home/emma.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 4,
    name: "Golda Velez",
    role: "What's Cookin' Inc Co-founder & Advisor",
    image: "/assets/home/golda.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  }
];

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const titleCharVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + custom * 0.04
      }
    })
  };
  
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1, 
      transition: { 
        duration: 1.5, 
        ease: "easeInOut", 
        delay: 0.3 
      }
    }
  };

  const teamMemberVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.6 + custom * 0.15
      }
    })
  };

  // Split text into characters for animated reveal
  const titleWords = ["We", "are", "a", "team", "of", "builders", "who", "take", "pride", "in", "creating"];
  const experiencesText = "experiences";
  const usersLoveText = "users love.";
  
  return (
    <section 
      ref={sectionRef}
      id='about'
      className="py-20 md:py-32 bg-black text-white overflow-hidden relative"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black"></div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [0, Math.random() * -30 - 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* "About Us" subtitle */}
        <motion.p 
          className="text-gray-400 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          — About Us
        </motion.p>
        
        {/* First headline - animated by word */}
        <div className="mb-8 md:mb-12 overflow-hidden">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={titleCharVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <motion.span
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 italic mr-4"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
            >
              {experiencesText}
            </motion.span>
            
            <motion.span
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              {usersLoveText}
            </motion.span>
          </div>
        </div>
        
        {/* Animated path */}
        <div className="relative my-16 md:my-24 px-4">
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 -top-10 md:-top-24 w-full max-w-xl"
          >
            <svg 
              width="100%" 
              height="150" 
              viewBox="0 0 500 150" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <motion.path
                d="M10,10 C50,10 50,140 120,140 C190,140 190,60 260,60 C330,60 330,10 390,10 L490,10"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ pathLength }}
                fill="transparent"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        
        {/* Second headline */}
        <motion.div
          style={{ y: y2 }}
          className="mt-16 mb-24 md:mb-32 text-center md:text-right max-w-4xl ml-auto"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold flex flex-wrap md:justify-end"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="mr-3">We push the boundaries of</span>
            <span className="text-blue-400 italic">digital design.</span>
          </motion.h2>
        </motion.div>
        
        {/* Team section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-12 text-center">Meet the team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                custom={index}
                variants={teamMemberVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-900 rounded-lg overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-blue-400">{member.role}</p>
                  
                  {member.socialLinks && (
                    <div className="flex space-x-3 mt-4">
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} className="text-gray-300 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} className="text-gray-300 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      
                      {member.socialLinks.github && (
                        <a href={member.socialLinks.github} className="text-gray-300 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default AboutUs;