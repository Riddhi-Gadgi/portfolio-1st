import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">{title}</h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              {description}
            </p>
          )}
        </div>

        {action && (
          <Link
            to={action.to}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent"
          >
            {action.label}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
