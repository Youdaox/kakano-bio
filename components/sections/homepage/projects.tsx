import { projects } from "@/lib/content/bilingual";

const Projects = () => {
  return (
    <section
      className="scroll-mt-24 bg-background py-14 sm:py-20 lg:py-24"
      id="projects"
    >
      <div className="container-custom">
        <p className="eyebrow">Current work</p>
        <h2 className="section-title mt-3">Projects and Activities</h2>

        <ul className="mt-8 space-y-4 sm:mt-10">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group relative rounded-2xl border border-zinc-200/80 bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:p-6"
            >
              <div className="flex gap-4">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
                    {project.title}
                  </p>

                  {project.detail ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.detail}
                    </p>
                  ) : null}

                  {project.timeframe || project.funder ? (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {project.timeframe ? (
                        <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm">
                          {project.timeframe}
                        </span>
                      ) : null}
                      {project.funder ? (
                        <span className="rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          Funded by {project.funder}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
