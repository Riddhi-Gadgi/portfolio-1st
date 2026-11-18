import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ProjectCover from "@/components/ui/ProjectCover";
import TechChip from "@/components/ui/TechChip";

// A chapter. On hover the bottom corner turns like a page.
export default function ProjectCard({ project, index = 0, chapter, onOpen }) {
  const visible = project.tech.slice(0, 4);
  const extra = project.tech.length - visible.length;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="group card relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="overflow-hidden bg-sand">
          <ProjectCover
            src={project.cover}
            title={project.title}
            className="aspect-[16/10] w-full transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="eyebrow">
            Chapter {String(chapter).padStart(2, "0")} · {project.subtitle}
          </p>
          <h3 className="mt-2 flex items-center justify-between gap-3 font-display text-2xl font-semibold tracking-tight">
            {/* stretched button makes the whole card keyboard-accessible */}
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="text-left after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </button>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
            />
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {visible.map((id) => (
              <TechChip key={id} id={id} iconOnly />
            ))}
            {extra > 0 && <span className="chip">+{extra}</span>}
          </div>
        </div>

        {/* page-turn corner */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 bg-sand transition-all duration-300 [clip-path:polygon(100%_0,0_100%,100%_100%)] group-hover:h-8 group-hover:w-8"
        />
      </article>
    </Reveal>
  );
}
