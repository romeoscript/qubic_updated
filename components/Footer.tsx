'use client'
// components/EnhancedFooter.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Twitter as TwitterIcon, 
  LinkedIn as LinkedInIcon, 
  Instagram as InstagramIcon, 
  GitHub as GitHubIcon,
  ArrowForward as ArrowForwardIcon,
  Email as EmailIcon
} from '@mui/icons-material';

const socialLinks = [
  { 
    name: 'X', 
    icon: <TwitterIcon />, 
    url: 'https://twitter.com/#',
    handle: '@qubic'
  },
  { 
    name: 'LinkedIn', 
    icon: <LinkedInIcon />, 
    url: 'https://www.linkedin.com/company/qubic-digital-services/',
    handle: '@qubic'
  },
  { 
    name: 'Instagram', 
    icon: <InstagramIcon />, 
    url: 'https://instagram.com/#',
    handle: '@qubic'
  },
  { 
    name: 'GitHub', 
    icon: <GitHubIcon />, 
    url: 'https://github.com/#',
    handle: '@qubic'
  },
];



const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
];

const EnhancedFooter = () => {
    return (
        <footer className="bg-white text-black py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-8">
                {/* Work with us section */}
                <div className="mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-500 mb-6"
                    >
                        — Let&apos;s Build Together
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            We build and deliver <span className="italic">exceptional</span> solutions.
                            <br />
                            Let&apos;s <span className="text-gray-400">transform</span> your vision into reality.
                        </h2>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/contact">
                            <span className="inline-flex items-center text-lg bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 ease-in-out">
                                Start a Project
                                <ArrowForwardIcon className="ml-2" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <div className="h-px w-full bg-gray-200 my-12"></div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-6 mb-16">
                    {/* Company Section */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold mb-4">Qubic </h3>
                            <p className="text-gray-500 mb-6">
                                Transforming ideas into innovative digital solutions.
                                We specialize in web development, mobile apps, and digital experiences.
                            </p>
                            
                            {/* Contact Email with Icon */}
                            <div className="flex items-center mt-4">
                                <EmailIcon className="text-gray-400 mr-2" />
                                <a
                                    href="mailto:info@qubic.com.ng"
                                    className="text-gray-500 hover:text-black transition-colors duration-300"
                                >
                                    info@qubic.com.ng
                                </a>
                            </div>
                        </motion.div>
                    </div>

                

                    {/* Legal Links */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                {legalLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.path}
                                            className="text-gray-500 hover:text-black transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4 mb-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black rounded-full transform hover:-translate-y-1 transition-all duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <p className="text-gray-500">
                                Follow us to stay updated with our latest projects and insights.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-200 my-8"></div>

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Qubic Studio. All rights reserved.
                    </p>
                    
                    <p className="text-gray-500 text-sm">
                        Made with passion in Nigeria
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default EnhancedFooter;