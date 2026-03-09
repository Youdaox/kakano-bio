"use client"


import Image from 'next/image';
import { motion } from "framer-motion";
import HeroButton from '@/buttons/HeroButton';

const Hero = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden h-[500px]">
      <Image
        src="/pe.avif"
        alt="Hero background"
        fill
        className="object-cover -z-10 blur-[2px]"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/50 to-black/70" />
      <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">Welcome to Kakano Biosciences</h1>
          <h2 className="text-2xl text-white">Global Innovation Specialists</h2>
          <HeroButton/>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;