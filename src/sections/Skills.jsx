import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";
import { tech } from "@/data/tech";

// Each group is a numbered "specimen". Icons stay greyscale until you hover the card.
export default function Skills() {
  return (
    <section id="skills" className="section border-y border-line bg-sand">
      <div className="container-page">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I work with"
          description="A focused stack I know well, chosen for building reliable products quickly."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07} className="h-full">
              <div className="group card h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{group.note}</p>

                <ul className="mt-6 space-y-3">
                  {group.items.map((id) => {
                    const { Icon, name, color } = tech[id];
                    return (
                      <li key={id} className="flex items-center gap-3 text-sm">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand grayscale opacity-60 transition duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                          <Icon
                            size={18}
                            style={{ color }}
                            aria-hidden="true"
                          />
                        </span>
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
