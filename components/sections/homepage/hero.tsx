"use client";


import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

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

          <h1 className="text-4xl font-semibold leading-extratight tracking-tighter text-zinc-50 sm:text-5xl lg:text-6xl">
            Innovation in Diagnostics and Surveillance.
          </h1>

          <p className="max-w-2xl text-base tracking-tight text-zinc-200 sm:text-lg">
            An independent service providing consultative global-to-local expertise in biosecurity, molecular diagnostics and innovation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/#about"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-primary"
            >
              Who are we?
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;