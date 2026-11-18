import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectCover from "@/components/ui/ProjectCover";
import TechChip from "@/components/ui/TechChip";

export default function ProjectModal({ project, onClose }) {
  const [active, setActive] = useState(0);
  const closeRef = useRef(null);

  // scroll lock, Esc to close, focus management
  useEffect(() => {
    const trigger = document.activeElement;
    const previous = document.body.style.overflow;
    const onKey = (e) => e.key === "Escape" && onClose();

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      trigger?.focus?.();
    };
  }, [onClose]);

  const { links } = project;
  const titleId = `${project.id}-title`;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-lift sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-white/90 backdrop-blur transition hover:border-ink"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto">
          <div className="bg-sand">
            <ProjectCover
              src={project.images[active] ?? null}
              title={project.title}
              alt={`${project.title} screenshot ${active + 1}`}
              className="aspect-[16/9] max-h-[46vh] w-full"
            />
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 p-3">
                {project.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === active}
                    className={`h-12 w-20 overflow-hidden rounded-lg border-2 transition ${
                      i === active ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <p className="eyebrow">
              {project.subtitle}
              {project.year ? ` · ${project.year}` : ""}
            </p>
            <h3 id={titleId} className="display mt-3 text-3xl sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h4 className="eyebrow">Highlights</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-ink/80">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="eyebrow">Built with</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((id) => (
                    <TechChip key={id} id={id} />
                  ))}
                </div>

                {(links.presentation || links.github || links.live) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {links.live && (
                      <a href={links.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Live site <ArrowUpRight size={16} />
                      </a>
                    )}
                    {links.presentation && (
                      <a href={links.presentation} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        Presentation <ArrowUpRight size={16} />
                      </a>
                    )}
                    {links.github && (
                      <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        <FaGithub size={16} /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
