import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCount } from "@/data/skills";
import { overallCgpa } from "@/data/journey";
import { portrait } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function Card({ label, children, className = "" }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`relative overflow-hidden rounded-[1.75rem] border border-line bg-white/80 p-5 shadow-soft backdrop-blur ${className}`}
    >
      <span className="inline-block rounded-full border border-line bg-white px-3 py-1 text-xs text-ink/70">
        {label}
      </span>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const focus = profile.focus;

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % focus.length),
      2400,
    );
    return () => clearInterval(timer);
  }, [reduce, focus.length]);

  const firstName = profile.name.split(" ")[0];

  const stats = [
    { value: overallCgpa, label: "CGPA" },
    { value: String(projects.length), label: "Projects built" },
    { value: String(skillCount), label: "Technologies" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* one soft glow, nothing else competing for attention */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent-soft blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative pb-16 pt-36 sm:pt-44 lg:pb-24"
      >
        {/* headline */}
        <motion.h1
          variants={item}
          className="display text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.08]"
        >
          <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
            Hi, I&apos;m
            <motion.span
              whileHover={reduce ? undefined : { rotate: -6, scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
              className="inline-block h-[1.05em] w-[1.05em] shrink-0 overflow-hidden rounded-[0.3em] border-2 border-white bg-sand shadow-lift"
            >
              {portrait ? (
                <img
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <span className="grid h-full w-full place-items-center bg-accent-soft text-[0.4em] italic text-accent">
                  {profile.initials}
                </span>
              )}
            </motion.span>
            {firstName}!
          </span>

          {/* second line: grey -> ink, like the reference */}
          <span className="mt-1 block text-ink/25">
            I&apos;m a <span className="text-ink">{profile.role}</span>
          </span>

          {/* rotating focus in accent colour */}
          <span className="mt-1 flex flex-wrap items-center gap-x-4">
            <span className="relative inline-flex h-[1.15em] min-w-[6ch] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.em
                  key={focus[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="font-normal not-italic text-accent"
                >
                  {focus[index]}.
                </motion.em>
              </AnimatePresence>
            </span>
          </span>
        </motion.h1>

        {/* CTA + intro */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8"
        >
          <Link to="/projects" className="btn-primary self-start">
            View projects
            <ArrowRight size={16} />
          </Link>
          <p className="max-w-md text-base leading-relaxed text-ink/70">
            {profile.intro}
          </p>
        </motion.div>

        {/* bento row */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <Card label="Currently focused on" className="min-h-[15rem]">
            <ul className="relative mt-5 space-y-3 pl-5">
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-[5px] top-1 w-px bg-line"
              />
              {focus.map((f, i) => (
                <li
                  key={f}
                  className={`relative text-sm transition-all duration-500 ${
                    i === index ? "text-ink" : "text-ink/30"
                  }`}
                >
                  <span
                    className={`absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white transition-colors duration-500 ${
                      i === index ? "bg-ink" : "bg-ink/20"
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </Card>

          <Card label="By the numbers" className="min-h-[15rem]">
            <dl className="mt-5 grid grid-cols-1 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="font-display text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <motion.a
            variants={item}
            href={profile.resume}
            download
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-ink p-5 text-white shadow-lift"
          >
            <span className="inline-block self-start rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              My résumé
            </span>
            <div>
              <p className="font-display text-3xl leading-tight">
                The short
                <br />
                version.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white">
                Download CV
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
