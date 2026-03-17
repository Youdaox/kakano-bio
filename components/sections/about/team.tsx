import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;  
  description: string;
  image: string;
}

const leadMember: TeamMember = {
  name: "Jeremy Thompson",
  position: "Founder & Director",
  description:
    "description",
  image: "/pe.avif",
};

const teamMembers: TeamMember[] = [
  {
    name: "Pilar Villablanca",
    position: "Partner",
    description:
      "description",
    image: "/nz.avif",
  },
  {
    name: "Adam Andreas",
    position: "Partner",
    description:
      "description",
    image: "/nz1.avif",
  },
  {
    name: "Sathish Puthigae",
    position: "Partner",
    description:
      "description",
    image: "/pe.avif",
  },
  {
    name: "Alan Flynn",
    position: "Partner",
    description:
      "description",
    image: "/nz.avif",
  },
];

const Team = () => {
  return (
    <section className="bg-background px-4 py-16 md:px-8 md:py-24">
      <div className="container-custom">
        <header className="mb-10 grid grid-cols-1 gap-6 border-b border-primary/15 pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="mt-3 text-3xl leading-tight md:text-5xl">
              Meet the team behind <br />
              <span className="block text-primary">Kakano Biosciences</span>
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 rounded-lg border border-primary/20 bg-white shadow-2xl lg:grid-cols-12">
          <div className="flex min-h-80 items-center justify-center border-b border-primary/20 bg-primary/5 lg:col-span-4 lg:min-h-95 lg:border-b-0 lg:border-r">
            <div className="relative w-[90%] h-[90%] overflow-hidden">
              <Image
                src={leadMember.image}
                alt={leadMember.name}
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="p-7 lg:col-span-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              {leadMember.position}
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-4xl">
              {leadMember.name}
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
              {leadMember.description}
            </p>

          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border border-primary/12 bg-white p-5 shadow-[0_12px_30px_-24px_rgba(20,20,20,0.55)] transition-all duration-300 hover:border-secondary/35"
            >
              <div className="grid grid-cols-[88px_1fr] gap-4 sm:grid-cols-[104px_1fr] sm:gap-5">
                <div className="relative h-24 w-full overflow-hidden border border-primary/20 bg-primary/5 sm:h-28">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="104px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-xl leading-tight text-primary">{member.name}</h4>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        {member.position}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
