"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Who are we" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={
        `fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled
        ? "bg-zinc-50/95 text-zinc-900 shadow-lg backdrop-blur-md"
        : "text-zinc-50 shadow-md backdrop-blur-md"
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="relative aspect-video w-34 bg-transparent" onClick={closeMenu}>
          <Image
            src="/image.png"
            alt="Kakano Biosciences logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-200 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`inline-flex items-center rounded-full border border-primary bg-secondary px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-primary ${scrolled ? "bg-secondary" : "bg-transparent"}`}
          >
            Get In Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/80 bg-white/80 text-primary md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path strokeLinecap="round" d="m5 5 14 14M19 5 5 19" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={[
          "md:hidden",
          "overflow-hidden border-t border-zinc-200/60 bg-[rgb(251,250,246,0.94)] px-6 transition-all duration-300",
          isMenuOpen ? "max-h-72 py-6" : "max-h-0 py-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-1 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            onClick={closeMenu}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;