"use client"


import Image from 'next/image';
import { motion } from "framer-motion";
import HeroButton from '@/components/ui/buttons/HeroButton';

const Hero = () => {
  return (
    <div className="relative w-full h-150 flex items-center justify-center overflow-hidden">
      <Image
        src="/pe.avif"
        alt="Hero background"
        fill
        className="object-cover -z-10 blur-[2px]"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-start max-w-3xl space-y-6 -translate-x-50 translate-y-20">
          <h2 className="text-4xl text-zinc-50">Aoteroa&apos;s partner for innovative, culturally grounded molecular diagnostics — 
                combining global scientific leadership with deep local relationships.</h2>
          <HeroButton/>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;