import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="w-full mx-auto max-w-350 scroll-mt-24 py-16" id="about">
      <div className="flex min-h-128 w-full py-12">
        {/* Left side - Text */}
        <div className="w-1/2 flex items-center bg-transparent px-10 lg:px-14">
          <div className="max-w-xl text-left space-y-10">
            <h2 className="text-4xl font-bold">About Us.</h2>
            <p className='text-gray-600'>
              Established in March 2026 Kākano Biosciences is an international team of subject matter experts that aims to support, complement and enhance domestic and global scientific communication and innovation in the areas of biosecurity, molecular diagnostics and surveillance.
              <br />
              <br />
              Kākano Biosciences sets out to offer independent cutting-edge biotech know-how for every audience.
            </p>
            <div className="flex">
              <Link href="/#contact" className="btn-primary bg-transparent outline-gray-800 outline-1 text-gray-800 cursor-pointer">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative w-3xl aspect-9/6 rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src="/nz1.avif"
            alt="About section image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
