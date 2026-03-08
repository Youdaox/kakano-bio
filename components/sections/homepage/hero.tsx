"use client"


import Image from 'next/image';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <Image
        src="/pe.avif"
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
      />
      <motion.div
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
          <h1 className="text-5xl font-bold text-white">Welcome to Kakano Biosciences</h1>
          <p className="text-2xl text-white">Global Innovation Specialists</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;