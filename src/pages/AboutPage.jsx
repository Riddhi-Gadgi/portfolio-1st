import { motion, useReducedMotion } from "framer-motion";
import usePageTitle from "@/hooks/usePageTitle";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import TelescopeGraphic from "@/components/graphics/TelescopeGraphic";
import Journey from "@/sections/Journey";
import ContactCard from "@/sections/ContactCard";
import { profile } from "@/data/profile";
import { portrait } from "@/lib/assets";

// The portrait sits inside a slowly turning "eyepiece" dial.
function Eyepiece() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs lg:sticky lg:top-28 lg:max-w-none">
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-ink/30"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="98" />
        {Array.from({ length: 72 }, (_, i) => (
          <line
            key={i}
            x1="100"
            y1="2"
            x2="100"
            y2={i % 6 === 0 ? 11 : 6}
            transform={`rotate(${i * 5} 100 100)`}
          />
        ))}
      </motion.svg>

      <svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full text-ink/20"
      >
        <path d="M100 18 V44 M100 156 V182 M18 100 H44 M156 100 H182" />
      </svg>

      <div className="absolute inset-[9%] overflow-hidden rounded-full border border-line bg-sand shadow-lift">
        {portrait ? (
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <span className="font-display text-8xl font-semibold text-ink/15">
              {profile.initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  usePageTitle("About");

  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Full-stack developer,"
        titleMuted="always curious."
        description="Every project here started with curiosity. I hope one of them inspires yours."
        graphic={<TelescopeGraphic className="w-full" />}
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyepiece />
          </Reveal>

          <div className="lg:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed text-ink/70 sm:text-xl">
              {profile.story.map((paragraph, i) => (
                <Reveal key={paragraph} delay={i * 0.05}>
                  <p
                    className={
                      i === 0
                        ? "text-2xl font-medium leading-snug text-ink sm:text-3xl"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <blockquote className="mt-14 border-l-2 border-ink pl-6 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                &ldquo;{profile.quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <Journey />

      <section className="container-page py-20 sm:py-28">
        <ContactCard />
      </section>
    </>
  );
}
