import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ProjectCover from "@/components/ui/ProjectCover";
import TechChip from "@/components/ui/TechChip";

// The "abstract": the featured work gets the opening spread.
export default function FeaturedProject({ project, onOpen, chapter = 1 }) {
  const preview = project.highlights.slice(0, 5);
  const remaining = project.highlights.length - preview.length;

  return (
    <Reveal>
      <article className="card grid overflow-hidden shadow-soft lg:grid-cols-12">
        <div className="relative bg-sand lg:col-span-6">
          <ProjectCover
            src={project.cover}
            title={project.title}
            alt={`${project.title} screenshot`}
            className="h-64 w-full sm:h-80 lg:h-full lg:min-h-[28rem]"
          />
          <span className="chip absolute left-4 top-4 bg-white/90 backdrop-blur">
            Abstract{project.year ? ` · ${project.year}` : ""}
          </span>
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:col-span-6 lg:p-10">
          <p className="eyebrow">
            Chapter {String(chapter).padStart(2, "0")} · {project.subtitle}
          </p>
          <h3 className="display mt-3 text-4xl sm:text-5xl">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
            {preview.map((item) => (
              <li key={item} className="flex gap-3">
                <Check size={16} className="mt-0.5 shrink-0 text-ink" />
                {item}
              </li>
            ))}
          </ul>
          {remaining > 0 && (
            <p className="mt-3 pl-7 text-sm text-muted">
              + {remaining} more modules
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((id) => (
              <TechChip key={id} id={id} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="btn-primary"
            >
              Read chapter
            </button>
            {project.links.presentation && (
              <a
                href={project.links.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Presentation
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
