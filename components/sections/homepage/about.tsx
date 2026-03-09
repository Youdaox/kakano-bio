import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full">
      <div className="flex min-h-128 w-full">
        {/* Left side - Text */}
        <div className="w-1/2 flex items-center bg-muted px-10 lg:px-14">
          <div className="max-w-xl text-left space-y-4">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-lg text-black">
                Aoteroa's partner for innovative, culturally grounded molecular diagnostics — 
                combining global scientific leadership with deep local relationships.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 relative min-h-128">
          <Image
            src="/nz1.avif"
            alt="About section image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
