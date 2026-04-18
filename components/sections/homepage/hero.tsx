"use client";


import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex w-full items-end overflow-hidden min-h-136 sm:min-h-160 lg:h-160">
      <Image
        src="/pe.avif"
        alt="Hero background"
        fill
        className="object-cover -z-10 blur-[2px]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="container-custom relative z-10 w-full pb-10 pt-28 sm:pb-14 sm:pt-36 lg:pb-24 lg:pt-40"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-3xl space-y-6 sm:space-y-8">

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl sm:tracking-tighter lg:text-6xl lg:leading-extratight">
            Innovation in Diagnostics and Surveillance.
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed tracking-tight text-zinc-200 sm:text-lg">
            An independent service providing consultative global-to-local expertise in biosecurity, molecular diagnostics and innovation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/#about"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-primary sm:w-auto"
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