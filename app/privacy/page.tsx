'use client'

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            <p className="text-gray-700 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
                <p className="text-gray-800 mb-4">
                  At Qubic Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
                <p className="text-gray-800 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Name and contact information</li>
                  <li>Company information</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
                <p className="text-gray-800 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Provide and maintain our services</li>
                  <li>Process your requests and inquiries</li>
                  <li>Send you updates and marketing communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Information Sharing</h2>
                <p className="text-gray-800 mb-4">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors and consultants</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Data Security</h2>
                <p className="text-gray-800 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Your Rights</h2>
                <p className="text-gray-800 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact Us</h2>
                <p className="text-gray-800 mb-4">
                  If you have any questions about this Privacy Policy, you can reach us through:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800">
                    Email: <a href="mailto:info@qubic.com.ng" className="text-blue-700 hover:text-blue-800 hover:underline">info@qubic.com.ng</a>
                  </p>
                  <p className="text-gray-800">
                    Schedule a Call: <a href="https://calendly.com/romeobourne211/30min" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">Book a 30-minute consultation</a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 