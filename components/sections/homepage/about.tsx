import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full mx-auto px-32">
      <div className="flex min-h-128 w-full py-12">
        {/* Left side - Text */}
        <div className="w-1/2 flex items-center bg-transparent px-10 lg:px-14">
          <div className="max-w-xl text-left space-y-4">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-lg text-black">
                Aotearoa&apos;s partner for innovative, culturally grounded molecular diagnostics — 
                combining global scientific leadership with deep local relationships.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="btn-primary mt-6">Contact us</button>
              <button className="btn-primary bg-transparent outline-gray-800 outline-1 text-gray-800 mt-6">Learn More</button>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative w-3xl aspect-9/6 rounded-sm overflow-hidden">
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
