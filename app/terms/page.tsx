'use client'

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Terms of Service</h1>
            <p className="text-gray-700 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Agreement to Terms</h2>
                <p className="text-gray-800 mb-4">
                  By accessing or using Qubic Studio&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Services Description</h2>
                <p className="text-gray-800 mb-4">
                  Qubic Studio provides software development, digital transformation, and technology consulting services. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Custom software development</li>
                  <li>Cloud infrastructure solutions</li>
                  <li>Digital transformation consulting</li>
                  <li>Technical support and maintenance</li>
                  <li>Project management and implementation</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Client Responsibilities</h2>
                <p className="text-gray-800 mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate with our team in a timely manner</li>
                  <li>Maintain confidentiality of proprietary information</li>
                  <li>Pay for services as agreed in the contract</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Intellectual Property</h2>
                <p className="text-gray-800 mb-4">
                  All intellectual property rights related to our services, including but not limited to software, designs, and documentation, remain the property of Qubic Studio unless explicitly stated otherwise in a written agreement.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Payment Terms</h2>
                <p className="text-gray-800 mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li>Payment schedules will be agreed upon before project commencement</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All fees are exclusive of applicable taxes</li>
                  <li>Refunds are subject to our refund policy as outlined in the service agreement</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Limitation of Liability</h2>
                <p className="text-gray-800 mb-4">
                  Qubic Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Termination</h2>
                <p className="text-gray-800 mb-4">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms of Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to Terms</h2>
                <p className="text-gray-800 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Information</h2>
                <p className="text-gray-800 mb-4">
                  For any questions about these Terms of Service, you can reach us through:
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

export default TermsOfService; 