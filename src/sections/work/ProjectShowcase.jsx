import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const pad = (n) => String(n).padStart(2, "0");

// Thesis layout: contents page, abstract (featured), then numbered chapters.
export default function ProjectShowcase() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const ordered = featured ? [featured, ...others] : others;

  return (
    <>
      <Reveal>
        <nav aria-label="Contents" className="card mb-8 p-6 sm:p-8">
          <p className="eyebrow">Contents</p>
          <ol className="mt-4 divide-y divide-line">
            {ordered.map((p, i) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="group flex w-full items-baseline gap-4 py-3 text-left"
                >
                  <span className="font-mono text-xs text-muted">
                    {pad(i + 1)}
                  </span>
                  <span className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                    {p.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="min-w-[1rem] flex-1 -translate-y-1 border-b border-dotted border-ink/20"
                  />
                  <span className="text-sm text-muted">{p.year ?? "—"}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </Reveal>

      {featured && (
        <FeaturedProject project={featured} chapter={1} onOpen={setSelected} />
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            chapter={i + (featured ? 2 : 1)}
            onOpen={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal key={selected.id} project={selected} onClose={close} />
        )}
      </AnimatePresence>
    </>
  );
}
