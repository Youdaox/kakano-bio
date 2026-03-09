
interface TeamMember {
  name: string;
  position: string;
  description: string;
}

interface CardProps {
  member: TeamMember;
  isParent?: boolean;
}

const Card = ({ member, isParent = false }: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-center rounded-xl border p-5 text-center transition-transform duration-300 ${
        isParent
          ? "h-60 w-72 rounded-2xl border-white/30 bg-linear-to-br from-primary to-[#1f3a2c] text-white shadow-2xl ring-1 ring-black/20 md:h-72 md:w-80"
          : "h-52 w-56 border-[#758f69] bg-[#b7c9ad] text-foreground shadow-sm md:h-56 md:w-64"
      }`}
    >
      <p className={`font-semibold tracking-tight ${isParent ? "text-3xl text-amber-100" : "text-2xl"}`}>
        {member.name}
      </p>
      <p
        className={`mt-2 text-xs font-semibold uppercase tracking-[0.11em] ${
          isParent ? "text-white/85" : "text-foreground/70"
        }`}
      >
        {member.position}
      </p>
      <p className={`mt-3 text-sm leading-6 ${isParent ? "text-white/90" : "text-foreground/80"}`}>
        {member.description}
      </p>
    </div>
  );
};

const parentMember: TeamMember = {
  name: "Jeremy Thompson",
  position: "Founder & Executive Director",
  description:
    "Sets strategic direction, builds partnerships, and keeps the team focused on long-term impact.",
};

const teamMembers: TeamMember[] = [
  {
    name: "Pilar Villablanca",
    position: "Operations Lead",
    description:
      "Coordinates daily workflows and ensures projects move smoothly from planning to delivery.",
  },
  {
    name: "Adam Andreas",
    position: "Community Programs Manager",
    description:
      "Designs engagement programs and supports partners across local community initiatives.",
  },
  {
    name: "Sathish Puthigae",
    position: "Research & Data Analyst",
    description:
      "Turns field insights into actionable reports to guide decisions and measure outcomes.",
  },
  {
    name: "Alan Flynn",
    position: "Partnerships Coordinator",
    description:
      "Maintains sponsor relationships and helps launch collaborative projects with external teams.",
  },
];

const Team = () => {
  return (
    <section className="bg-accent px-4 py-12 md:px-8 md:py-16">
      <div className="relative mx-auto flex min-h-[90vh] max-w-352 flex-col items-center justify-center px-6 py-10 md:px-10 md:py-14">

        <div className="org-fade-up org-delay-1 z-10 flex justify-center">
          <Card member={parentMember} isParent />
        </div>

      <div className="org-fade-up org-delay-2 z-10 mt-5 flex flex-col items-center gap-4 md:hidden">
          <div className="h-5 w-0.5 rounded-full bg-gray-700/80" />
          {teamMembers.map((member, index) => (
            <div key={member.name} className="org-fade-up" style={{ animationDelay: `${260 + index * 90}ms` }}>
              <Card member={member} />
            </div>
          ))}
        </div>

        <div className="org-fade-up org-delay-2 relative z-10 mt-5 hidden h-14 w-6xl md:block">
          <div className="org-line-grow-y absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded-full bg-gray-700/80" />
          <div className="org-line-grow-x absolute left-[12.5%] right-[12.5%] top-5 h-0.5 rounded-full bg-gray-700/80" />
          <div className="absolute left-0 right-0 top-5 grid grid-cols-4">
            {teamMembers.map((member) => (
              <div key={`${member.name}-line`} className="org-line-grow-y mx-auto h-5 w-0.5 rounded-full bg-gray-700/80" />
            ))}
          </div>
        </div>

        <div className="z-10 mt-2 hidden p-6 md:flex md:justify-center md:gap-10">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="org-fade-up" style={{ animationDelay: `${350 + index * 110}ms` }}>
              <Card member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team