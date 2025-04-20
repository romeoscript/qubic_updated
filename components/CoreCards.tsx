// components/CoreCards.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  id: string;
  title: string;
  description: string;
};

const CoreCards = ({ id, title, description }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
      className="bg-[#F9F9F9] relative hover:bg-[#F5FFFC] cursor-pointer md:w-[250px] h-[320px] rounded-[20px] flex flex-col items-start justify-end p-[1.5rem] overflow-hidden transition-all duration-300 shadow-md"
    >
      <span className='absolute top-5 left-6 text-[#D9D9D9] text-5xl font-light'>
        {id}
      </span>
      
      <div
        className="mb-6 h-16 w-16 p-4 rounded-full bg-[#D9D9D9] transition-all duration-300 group-hover:bg-black flex items-center justify-center"
      >
        <Image 
          src="/images/dedicate.svg" 
          alt="Icon" 
          width={32} 
          height={32}
          className="transition-transform duration-300 group-hover:scale-110" 
        />
      </div>

      <div className="text-left">
        <h3 className="text-xl text-black font-semibold transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-3 transition-all duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CoreCards;