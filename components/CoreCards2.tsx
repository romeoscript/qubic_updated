// components/CoreCards2.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Software Development",
    description:
      "Building tailored software solutions that seamlessly integrate with your existing systems, focusing on scalability and performance optimization for government agencies.",
    icon: "/images/dedicate.svg",
  },
  {
    title: "Public Sector Technology",
    description:
      "Developing specialized technology solutions for government operations, including secure digital infrastructure, citizen service portals, and regulatory compliance systems.",
    icon: "/images/dedicate.svg",
  },
];

const CoreCards2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ 
            y: -10, 
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.12)',
            background: '#011337'
          }}
          transition={{ duration: 0.3 }}
          className="bg-[#F9F9F9] relative cursor-pointer h-[400px] rounded-[20px] flex flex-col items-start justify-between p-8 overflow-hidden shadow-md group"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10 z-0">
            <Image
              src="/images/blur.svg"
              alt="Background pattern"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
          <div className="flex flex-col items-start relative z-10">
            <div className="mb-6 h-20 w-20 p-5 rounded-full bg-[#D9D9D9] group-hover:bg-black transition-all duration-300 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
          </div>

          <div className="text-left relative z-10">
            <p className="text-gray-700 group-hover:text-white transition-all duration-300 mb-8">
              {service.description}
            </p>
            <div className="flex gap-3">
              <Image src="/images/hero2.svg" width={48} height={48} alt="team member" />
              <Image src="/images/hero1.svg" width={48} height={48} alt="team member" />
              <Image src="/images/hero3.svg" width={48} height={48} alt="team member" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreCards2;