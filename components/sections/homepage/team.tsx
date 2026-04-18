import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className="bg-zinc-50 scroll-mt-24 py-14 sm:py-20 lg:py-28" id="team">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-12 lg:gap-0">
        <div className="relative min-h-72 sm:min-h-80 lg:col-span-4 lg:min-h-120">
          <div className="relative h-full overflow-hidden shadow-lg rounded-2xl">
            <Image
              src="/team/lead-profile.jpg"
              alt="Jeremy Thompson, lead of Kākano Biosciences"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover object-top saturate-110"
              priority
            />
          </div>
        </div>

        <div className="px-1 py-2 sm:px-2 lg:col-span-8 lg:px-16 lg:py-10 xl:px-24 xl:py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who are we
          </p>
          <h3 className="my-4 text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
            Jeremy Thompson
          </h3>
          <p className="mt-5 max-w-xl leading-relaxed text-gray-600 text-sm sm:text-base">
            Jeremy has more than 20 years of global cross-cultural experience leading and collaborating in cutting-edge research. All while lecturing, training and mentoring at Ivy League and international centres of excellence. He specialises in turning complex biological ideas into clear, practical language.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/in/jeremy-thompson-5896293a9"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-primary/30 hover:text-primary hover:shadow-md"
              aria-label="LinkedIn"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.86-3.04-1.87 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.33 2.41 4.33 5.55v6.2ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
              LinkedIn
            </Link>

          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-350 px-6 text-center text-2xl font-medium tracking-tighter sm:mt-16 sm:text-3xl md:text-4xl">
        Stay tuned for more...
      </p>
    </section>
  );
};

export default Team;