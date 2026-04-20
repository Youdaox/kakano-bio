import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 bg-[#182820] text-zinc-300">
      <div className="h-[2px] w-full bg-linear-to-r from-secondary/65 via-accent to-secondary/65" />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6 flex flex-col gap-5">
            <h4 className="text-3xl font-medium tracking-tighter text-zinc-50">
              Kākano Biosciences
            </h4>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Aotearoa&apos;s partner for innovative, culturally grounded molecular
              diagnostics, blending global scientific leadership with strong
              local relationships.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col gap-4 md:items-end md:text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li>
                <a
                  href="mailto:info@kākanobiosciences.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  info@kākanobiosciences.com
                </a>
              </li>
              <li className="leading-relaxed">
                Tāmaki Makaurau Auckland, Aotearoa New Zealand.
              </li>
              <li>
                <Link href="/#contact" className="transition-colors duration-200 hover:text-zinc-100">
                  Send an inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-700/60 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {year} Kākano Biosciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;