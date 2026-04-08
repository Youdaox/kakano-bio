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

          <div className="md:col-span-6 flex flex-col gap-4">
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