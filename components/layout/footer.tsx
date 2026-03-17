import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3329] text-zinc-300">
      <div className="h-1 w-full bg-linear-to-r from-primary via-secondary to-primary" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          <div className="md:col-span-5 flex flex-col gap-5">
            <h4 className="text-xl font-semibold tracking-wide text-zinc-50">
              Kakano Biosciences
            </h4>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Aotearoa&apos;s partner for innovative, culturally grounded molecular diagnostics — combining global scientific leadership with deep local relationships.
            </p>

            <div className="flex items-center gap-4 pt-1">
              
  
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="md:col-span-3 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "What We Do", href: "/about" },
                { label: "Who Are We", href: "/team" },
                { label: "Services We Offer", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-4 bg-zinc-600 transition-all duration-200 group-hover:w-6 group-hover:bg-secondary" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li>
                <a
                  href="mailto:info@kakanobiosciences.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  info@kakanobiosciences.co.nz
                </a>
              </li>
              <li className="leading-relaxed">
                Auckland, New Zealand
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/50 px-4 py-2 text-xs font-medium text-secondary transition-all duration-200 hover:border-secondary hover:bg-secondary/10 hover:text-white"
                >
                  Get In Touch
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-700/60 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {year} Kakano Biosciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;