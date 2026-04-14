"use client";


import Image from 'next/image';
import { motion } from "framer-motion";
import HeroButton from '@/components/ui/buttons/HeroButton';

const Hero = () => {
  return (
    <section className="relative h-160 flex w-full items-end overflow-hidden">
      <Image
        src="/pe.avif"
        alt="Hero background"
        fill
        className="object-cover -z-10 blur-[2px]"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="container-custom relative z-10 w-full pb-14 pt-40 sm:pb-18 lg:pb-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-3xl space-y-8">

          <h1 className="text-4xl font-semibold leading-extratight text-zinc-50 sm:text-5xl lg:text-6xl">
            Innovation in Diagnostics and Surveillance.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            An independent service providing consultative global-to-local expertise in biosecurity, molecular diagnostics and innovation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <HeroButton />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;