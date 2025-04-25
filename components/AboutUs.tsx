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
    role: "Chief Technology Officer",
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
    role: "Chief Executive Officer",
    image: "/assets/home/romeo.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Emmanuel Umoren",
    role: "Head of Product Strategy",
    image: "/assets/home/emma.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 4,
    name: "Golda Velez",
    role: "Strategic Advisor",
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
  const titleWords = ["We", "deliver", "transformative", "digital", "solutions", "that", "drive", "real", "business", "results"];
  const experiencesText = "excellence";
  const usersLoveText = "clients trust.";
  
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
        
        {/* Team section */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-12"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Meet Our Leadership Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                custom={index}
                variants={teamMemberVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-[#111] p-6 rounded-lg"
              >
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex gap-4">
                  {member.socialLinks?.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks?.twitter && (
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                  )}
                  {member.socialLinks?.github && (
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;