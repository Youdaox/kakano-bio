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
        <Link href="/#about" className={navLinkClass("/about")}>
          About Us
          <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-200 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
        </Link>

        <Link href="/#team" className={navLinkClass("/team")}>
          Our Team
          <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-200 ${pathname === "/team" ? "w-full" : "w-0 group-hover:w-full"}`} />
        </Link>
      </div>

      <div className="flex flex-row gap-8">
        <Link
          href="/#contact"
          className={`inline-flex items-center gap-2 rounded-full border border-secondary/50 px-6 py-4 text-sm font-medium text-white transition-all duration-200 hover:border-secondary hover:bg-transparent hover:text-secondary ${scrolled ? "bg-secondary" : "bg-transparent"}`}
        >
          Get In Touch
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;