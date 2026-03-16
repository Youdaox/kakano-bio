"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (href: string) => {
    const active = pathname === href;

    return `group relative text-[0.98rem] font-medium tracking-[0.02em] transition-colors duration-200 ${
      active
        ? "text-secondary"
        : scrolled
          ? "text-zinc-700 hover:text-primary"
          : "text-zinc-100 hover:text-zinc-200"
    }`;
  };


  return (
    <nav className={`fixed z-50 flex w-full items-center justify-between px-6 py-2.5 transition-all duration-300 lg:px-16 
      ${scrolled
        ? "bg-zinc-50/95 text-zinc-900 shadow-lg backdrop-blur-md"
        : "text-zinc-50 shadow-md backdrop-blur-md"
      }`}
    >
      <Link href="/" className="relative aspect-video w-36 bg-transparent">
        <Image
          src="/image.png"
          alt="Kakano Biosciences Logo"
          fill
          className="object-contain"
        />
      </Link>

      <div className="flex flex-row items-center gap-10">
        <Link href="/about" className={navLinkClass("/about")}>
          What we do
          <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-200 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
        </Link>

        <Link href="/team" className={navLinkClass("/team")}>
          Who are we
          <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-200 ${pathname === "/team" ? "w-full" : "w-0 group-hover:w-full"}`} />
        </Link>

        <Link href="/contact" className={navLinkClass("/contact")}>
          Services We Offer
          <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-200 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`} />
        </Link>
      </div>

      <div className="flex flex-row gap-8">
        <Link href="/contact" className="text-sm font-semibold tracking-[0.03em]">
          <button className={`cursor-pointer rounded-full border px-5 py-2.5 transition-all duration-200 ${scrolled ? "border-primary bg-primary text-white hover:bg-secondary hover:border-secondary" : "border-white/80 bg-transparent text-white hover:bg-white/10"}`}>
            Get In Touch
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;