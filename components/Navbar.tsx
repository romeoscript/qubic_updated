'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    // Handle scroll event to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    // Function to handle smooth scroll to section
    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on another page, navigate to home page with hash
            router.push(`/#${id}`);
        }
    };

    // Animation variants
    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };


    const mobileMenuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                when: "beforeChildren",
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const mobileItemVariants = {
        closed: { opacity: 0, x: 50 },
        open: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const logoVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    const buttonVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    };

    const slideInLinks = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        hover: {
            y: -2,
            transition: { duration: 0.2 }
        }
    };

    // Navigation links with their corresponding section IDs
    const navLinks = [
        { name: 'about', id: 'about' },
        { name: 'projects', id: 'works' }
    ];

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="relative z-10"
                    >
                        <Link href="/">
                            <div className="text-2xl font-bold flex items-center">
                                <span className={scrolled ? "text-black" : "text-black"}>
                                    QUBIC
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((item, index) => (
                            <motion.div
                                key={item.name}
                                custom={index}
                                variants={slideInLinks}
                                whileHover="hover"
                            >
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`font-medium relative overflow-hidden group ${
                                        isActive(`/#${item.id}`)
                                            ? 'text-black font-semibold'
                                            : scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-800 hover:text-black'
                                    }`}
                                >
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                                        initial={{ width: isActive(`/#${item.id}`) ? "100%" : "0%" }}
                                        animate={{ width: isActive(`/#${item.id}`) ? "100%" : "0%" }}
                                        exit={{ width: "0%" }}
                                    />
                                </button>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.div
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="/contact"
                                className={`px-5 py-2 font-medium transition-all duration-300 ${scrolled
                                        ? 'bg-black text-white'
                                        : 'bg-black text-white'
                                    }`}
                            >
                                BUILD YOUR PROJECT
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-10 p-2 focus:outline-none"
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="w-6 flex flex-col items-end justify-center space-y-1.5 transition-all duration-300">
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 8 : 0,
                                    width: isMobileMenuOpen ? 24 : 24
                                }}
                                className={`block h-0.5 ${scrolled || isMobileMenuOpen ? 'bg-black' : 'bg-black'} transition-all duration-300`}
                            />
                            <motion.span
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    width: isMobileMenuOpen ? 0 : 16
                                }}
                                className={`block h-0.5 ${scrolled || isMobileMenuOpen ? 'bg-black' : 'bg-black'} transition-all duration-300`}
                            />
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -8 : 0,
                                    width: isMobileMenuOpen ? 24 : 20
                                }}
                                className={`block h-0.5 ${scrolled || isMobileMenuOpen ? 'bg-black' : 'bg-black'} transition-all duration-300`}
                            />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 bg-white z-40"
                    >
                        <div className="container mx-auto px-4 py-20">
                            <nav className="flex flex-col space-y-8 text-2xl font-medium">
                                <motion.div variants={mobileItemVariants}>
                                    <Link
                                        href="/"
                                        className={`relative overflow-hidden block transition-colors ${
                                            isActive("/") ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="relative z-10">Home</span>
                                        <motion.span
                                            className="absolute left-0 right-0 bottom-0 h-[2px] bg-black origin-left"
                                            initial={{ scaleX: isActive("/") ? 1 : 0 }}
                                            animate={{ scaleX: isActive("/") ? 1 : 0 }}
                                            exit={{ scaleX: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </motion.div>

                                {navLinks.map((item) => (
                                    <motion.div key={item.name} variants={mobileItemVariants}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`relative overflow-hidden block transition-colors w-full text-left ${
                                                isActive(`/#${item.id}`) ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
                                            }`}
                                        >
                                            <span className="relative z-10">
                                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                            </span>
                                            <motion.span
                                                className="absolute left-0 right-0 bottom-0 h-[2px] bg-black origin-left"
                                                initial={{ scaleX: isActive(`/#${item.id}`) ? 1 : 0 }}
                                                animate={{ scaleX: isActive(`/#${item.id}`) ? 1 : 0 }}
                                                exit={{ scaleX: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </button>
                                    </motion.div>
                                ))}

                                <div className="pt-8 flex flex-col space-y-4">
                                    <motion.div
                                        variants={mobileItemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href="/contact"
                                            className="px-6 py-3 bg-black text-white font-medium block text-center"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            BUILD YOUR PROJECT
                                        </Link>
                                    </motion.div>

                                    {/* <motion.div
                                        variants={mobileItemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href="/explore"
                                            className="px-6 py-3 bg-gray-100 text-black font-medium block text-center"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            EXPLORE WORKS
                                        </Link>
                                    </motion.div> */}
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;