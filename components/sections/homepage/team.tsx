import Image from "next/image";

const Team = () => {
  return (
    <div className="grid grid-cols-1 rounded-lg border border-primary/20 bg-white shadow-2xl lg:grid-cols-12">
      <div className="flex min-h-80 items-center justify-center border-b border-primary/20 bg-primary/5 lg:col-span-4 lg:min-h-95 lg:border-b-0 lg:border-r">
        <div className="relative w-[90%] h-[90%] overflow-hidden">
          <Image
            src="/team/lead-profile.jpg"
            alt="profile picture"
            fill
            sizes="(min-width: 1024px) 30vw, 80vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="p-7 lg:col-span-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Lead by
        </p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-4xl">
          Jeremy Thompson
        </h3>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
          With 20+ years’ global experience delivering plant health and biosecurity outcomes across government, academia, and research organisations, Jeremy is a specialist in translating complex biological information into plain English. His career spans programme leadership, stakeholder collaboration, and capability building, underpinned by a long-standing commitment to diversity.
        </p>

      </div>
    </div>
  );
};

export default Team;