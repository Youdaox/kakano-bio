"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <nav className={`fixed w-full z-50 flex flex-row items-center justify-between px-36 py-2 transition-all duration-300 
      ${scrolled 
        ? 'bg-background backdrop-blur-md shadow-2xl' 
        : 'backdrop-blur-md shadow-md text-zinc-50'
      }`}
    >
      <Link href="/" className='relative bg-transparent aspect-video w-48'>
        <Image
          src="/image.png"
          alt="Kakano Biosciences Logo"
          fill
          className="object-contain"
        />
      </Link>

      <div className="flex flex-row gap-8">
        <Link href="/team" className="hover:text-gray-300 text-xl font-semibold">
          Who we are
        </Link>
        <Link href="/contact" className="hover:text-gray-300 text-xl font-semibold">
          Services We Offer
        </Link>
      </div>

      <div className="flex flex-row gap-8">
        <Link href="/login" className="hover:text-gray-300 text-xl font-semibold">
          <button className={`px-4 py-2 border border-white rounded-full ${scrolled ? 'bg-white text-black' : 'bg-transparent'}`}>
            Get In Touch
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;