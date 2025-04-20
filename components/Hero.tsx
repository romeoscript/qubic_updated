'use client'
// components/Hero.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
    // For scroll-based animations
    const { scrollYProgress } = useScroll();
    
    // Transform values for arrow color and movement
    const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.7]);
    const arrowColor = useTransform(
        scrollYProgress, 
        [0, 0.05, 0.1], 
        ["#F0F0F0", "#A0A0A0", "#303030"]
    );
    const arrowX = useTransform(scrollYProgress, [0, 0.1], [0, 20]);
    const arrowScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.98, transition: { duration: 0.1 } },
    };

    return (
        <section className="w-full bg-[#fdfcf7] py-16 md:py-28 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative">
                {/* Decorative Shape - Left */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M0 0L120 120" stroke="#F5F5F5" strokeWidth="60" />
                    </svg>
                </div>

                {/* Decorative Shape - Right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:block">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M0 0L120 120" stroke="#F5F5F5" strokeWidth="60" />
                    </svg>
                </div>

                <motion.div
                    className="max-w-6xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Studio Name */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 mb-6 md:mb-8 flex items-center"
                    >
                        — Qubic 
                    </motion.p>

                    {/* Main Heading */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-10 md:mb-16"
                    >
                        <h1 className="text-5xl text-black md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
                            DIGITAL INNOVATION
                        </h1>
                        <div className="flex items-center">
                            <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-200">WITH</span>
                            <span className="text-5xl md:text-7xl text-black lg:text-8xl font-bold ml-4">PURPOSE</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            {/* Path Illustration - Now with scroll-based animations */}
                            <motion.div
                                variants={itemVariants}
                                className="max-w-md mx-auto md:mx-0"
                                style={{ 
                                    opacity: arrowOpacity,
                                    x: arrowX,
                                    scale: arrowScale
                                }}
                            >
                                <svg width="100%" height="80" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path 
                                        d="M10,50 C80,120 150,-20 390,50" 
                                        stroke={arrowColor} 
                                        strokeWidth="4" 
                                    />
                                    <motion.path 
                                        d="M370,50 L390,50 L380,40" 
                                        stroke={arrowColor} 
                                        strokeWidth="4" 
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        <div className="md:w-1/2">
                            {/* Description */}
                            <motion.div
                                variants={itemVariants}
                                className="max-w-lg mb-8"
                            >
                                <p className="text-lg text-black">
                                    Qubic is What's Cookin' Inc's independent subsidiary, which specializes in private and public sector technology solutions. we deliver custom and advanced software solutions, cloud infrastructure automation, and open source contributions focusing on transparency and social impacts.
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-4"
                            >
                                <motion.div
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <Link href="/contact" className="bg-black text-white px-8 py-4 inline-block font-medium">
                                        GET IN TOUCH
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;