import Image from "next/image";
import { advisoryBoard, advisoryBoardPendingCount } from "@/lib/content/bilingual";

const AdvisoryBoard = () => {
  return (
    <section
      className="bg-zinc-50 scroll-mt-24 pb-14 sm:pb-20 lg:pb-28"
      id="advisory-board"
    >
      <div className="container-custom">
        <div className="border-t border-zinc-300 pt-12 sm:pt-16">
          <p className="eyebrow">Advisory board</p>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold sm:text-3xl md:text-4xl">
            The expertise behind the work.
          </h3>
        </div>

        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {advisoryBoard.map((member) => (
            <article
              key={member.name}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm"
            >
              <header className="relative flex items-center gap-5 p-6 pb-5 sm:gap-6 sm:p-8 sm:pb-6">
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 sm:h-28 sm:w-24">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 96px, 80px"
                    className="object-cover object-top saturate-110"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    {member.name}
                  </h4>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-secondary">
                    {member.role}
                  </p>
                </div>
              </header>

              <div className="relative space-y-3 border-t border-zinc-100 px-6 pt-5 sm:px-8 sm:pt-6">
                {member.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="relative mt-auto flex flex-wrap gap-2 p-6 pt-6 sm:p-8 sm:pt-7">
                {member.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {advisoryBoardPendingCount > 0 ? (
            <div className="flex items-center gap-5 rounded-2xl border border-dashed border-zinc-300 bg-white/40 p-6 sm:gap-6 sm:p-8 lg:col-span-2">
              <div
                className="flex shrink-0 items-center -space-x-3"
                aria-hidden="true"
              >
                {Array.from({ length: advisoryBoardPendingCount }).map((_, index) => (
                  <span
                    key={index}
                    className="h-11 w-11 rounded-full border border-dashed border-zinc-300 bg-zinc-100/80 sm:h-12 sm:w-12"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-600">
                  {advisoryBoardPendingCount} further advisors are joining the board.
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Appointments to be announced.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
