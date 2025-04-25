// components/CoreValues.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import CoreCards from "./CoreCards";
import Carousel from "./Carousel";

const CoreValues = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const coreValues = [
    {
      id: "01",
      title: "Results-Driven Innovation",
      description: "Delivering measurable business outcomes through cutting-edge technology solutions",
    },
    {
      id: "02",
      title: "Strategic Partnership",
      description: "Building long-term relationships that drive sustainable growth and success",
    },
    {
      id: "03",
      title: "Proven Excellence",
      description: "Backed by a track record of successful implementations and satisfied clients",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 py-20 bg-black text-white">
      <motion.div
        className="flex flex-col-reverse md:flex-row gap-8 mb-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
      >
        <motion.div className="md:w-2/3">
          {/* Mobile Carousel */}
          <motion.div className="md:hidden" variants={fadeInUp}>
            <Carousel showIndicators={false} className="md:hidden">
              {coreValues.map((card) => (
                <CoreCards
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Carousel>
          </motion.div>

          {/* Desktop Cards */}
          <motion.div 
            className="max-md:hidden flex gap-4"
            variants={fadeInUp}
          >
            {coreValues.map((card) => (
              <CoreCards
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-left md:w-1/3 flex flex-col gap-4"
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block rounded-full w-fit px-5 py-2 bg-[#003399] text-[#fdfcf7] text-sm font-medium"
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            variants={fadeInUp}
          >
            Your Success Is Our Priority
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#fdfcf7] my-4"
            variants={fadeInUp}
          >
            We combine technical expertise with business acumen to deliver solutions that drive real results. Our proven approach has helped organizations across industries achieve their digital transformation goals.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Link
              href="/contact"
              className="bg-[#fdfcf7] text-[black] rounded-md px-8 py-4 inline-block font-medium hover:bg-gray-800 transition-colors"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="text-left flex flex-col gap-4 mt-26"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span
          className="inline-block rounded-full px-5 py-2 bg-[#0033991A] text-[#003399] text-sm font-medium"
          variants={fadeInUp}
        >
          Core Services
        </motion.span>
        
        <motion.div className="flex items-start flex-col my-6" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Explore Our
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Core Services</h2>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/home/brain.svg"
                alt="brain"
                width={40}
                height={40}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <CoreCards2 />
          </motion.div>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default CoreValues;