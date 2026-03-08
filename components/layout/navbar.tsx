import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative flex flex-row items-center justify-center px-8 py-8 bg-linear-to-r from-primary via-secondary to-primary text-white">
      <div className="flex flex-row gap-8">
        <Link href="/about" className="hover:text-gray-300 text-xl font-semibold">
          Who we are
        </Link>
        <Link href="/contact" className="hover:text-gray-300 text-xl font-semibold">
          Get in touch
        </Link>
      </div>

      <div className='absolute left-8 top-1/2 aspect-video w-48 -translate-y-1/2'>
        <Image
          src="/logo.png"
          alt="Kakano Biosciences Logo"
          fill
          className="object-contain"
        />
      </div>
    </nav>
  );
}

export default Navbar;