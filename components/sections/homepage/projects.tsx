import { projectCategories, projects } from "@/lib/content/bilingual";

const Projects = () => {
  return (
    <section
      className="scroll-mt-24 bg-background py-14 sm:py-20 lg:py-24"
      id="projects"
    >
      <div className="container-custom">
        <p className="eyebrow">Current work</p>
        <h2 className="section-title mt-3">Projects and Activities</h2>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {projectCategories.map((category) => {
            const entries = projects.filter(
              (project) => project.category === category,
            );

            if (entries.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-4">
                  <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {category}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-zinc-300/70"
                  />
                </div>

                <ul className="mt-5 space-y-4">
                  {entries.map((project, index) => (
                    <li
                      key={index}
                      className="rounded-2xl border border-zinc-200/80 bg-surface p-5 shadow-sm sm:p-6"
                    >
                      <div className="flex gap-4">
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          {project.kind ? (
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                              {project.kind}
                            </p>
                          ) : null}

                          <p className="mt-1 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                            {project.title}
                          </p>

                          {project.organisation ? (
                            <p className="mt-1.5 text-sm text-muted">
                              {project.organisation}
                            </p>
                          ) : null}

                          {project.detail ? (
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {project.detail}
                            </p>
                          ) : null}

                          {project.points ? (
                            <ul className="mt-3 space-y-1.5 border-l border-zinc-200 pl-4">
                              {project.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="text-sm leading-relaxed text-muted"
                                >
                                  {point}
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          {project.timeframe ||
                          project.funder ||
                          project.links ? (
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
                              {project.links?.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm hover:border-primary/30 hover:text-primary"
                                >
                                  {link.label}
                                  <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="h-3 w-3 shrink-0"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14 5h5v5M19 5l-7.5 7.5M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4"
                                    />
                                  </svg>
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
