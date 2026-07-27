import Image from 'next/image';
import Bilingual from '@/components/ui/Bilingual';
import { about } from '@/lib/content/bilingual';

const specialties = [
  'Biocontainment',
  'Biosafety',
  'Biosecurity',
  'Biotechnology',
  'Genetic Engineering',
  'GMOs',
  'Mentorship & Training',
  'Molecular Biology',
  'Molecular Diagnostics',
  'People Leadership',
  'Point-of-Use Testing',
  'Science Communication',
  'Surveillance',
  'Transgenics',
  'Virology',
];

export default function About() {
  return (
    <section className="scroll-mt-24 py-12 bg-background sm:py-16 lg:py-20" id="about">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="max-w-xl text-left">
              <Bilingual
                as="h2"
                hint={false}
                en={about.title.en}
                mi={about.title.mi}
                className="section-title tracking-tight"
              />

              <Bilingual
                as="p"
                en={about.body.en}
                mi={about.body.mi}
                className="mt-6 text-sm leading-relaxed text-muted sm:text-base"
              />

              <Bilingual
                as="p"
                en={about.bodySecondary.en}
                mi={about.bodySecondary.mi}
                className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
              />

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  We specialize in
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm sm:px-3 sm:py-1.5 sm:text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <figure>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl sm:aspect-16/10 lg:aspect-4/5">
                <Image
                  src="/nz2.jpg"
                  alt={about.imageCaption.en}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <Bilingual
                as="figcaption"
                en={about.imageCaption.en}
                mi={about.imageCaption.mi}
                className="mt-3 text-xs leading-relaxed text-muted sm:text-sm"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
