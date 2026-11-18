import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { journey, overallCgpa } from "@/data/journey";

// Observation log: the timeline line fills in as you scroll.
export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section id="journey" className="section border-t border-line bg-sand">
      <div className="container-page">
        <SectionHeading
          eyebrow="Observation log"
          title="My BCA journey, semester by semester"
          description="Six stops, each one logged with what I learned and who I became along the way."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <Reveal>
              <div className="card p-6 shadow-soft lg:sticky lg:top-28">
                <p className="eyebrow">Overall CGPA</p>
                <p className="display mt-3 text-7xl">{overallCgpa}</p>
                <p className="mt-3 text-sm text-muted">
                  Bachelor of Computer Applications
                </p>
              </div>
            </Reveal>
          </aside>

          <ol ref={ref} className="relative space-y-5 lg:col-span-8">
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-5 top-4 w-px bg-line"
            />
            <motion.span
              aria-hidden="true"
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute bottom-4 left-5 top-4 w-px bg-ink"
            />

            {journey.map(
              ({ semester, title, Icon, gpa, stamp, subjects, quote }) => (
                <li key={semester} className="relative pl-14">
                  <span className="absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink shadow-soft">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <Reveal>
                    <div className="card p-5 transition duration-300 hover:shadow-lift sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="eyebrow">{semester}</p>
                          <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                            {title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          {gpa && (
                            <p className="text-right">
                              <span className="block font-display text-2xl font-semibold leading-none">
                                {gpa}
                              </span>
                              <span className="text-[11px] text-muted">
                                GPA
                              </span>
                            </p>
                          )}
                          <span className="rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/60">
                            {stamp}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-lg text-muted">
                        &ldquo;{quote}&rdquo;
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {subjects.map((subject) => (
                          <li key={subject} className="chip">
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ),
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
