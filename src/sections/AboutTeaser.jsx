import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

function Word({ children, range, progress, reduce }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span
      style={{ opacity: reduce ? 1 : opacity }}
      className="mr-[0.26em] inline-block"
    >
      {children}
    </motion.span>
  );
}

// The first paragraph "reads itself" as you scroll, word by word.
export default function AboutTeaser() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = profile.story[0].split(" ");

  return (
    <section id="about" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <p
          ref={ref}
          className="mt-8 max-w-4xl text-3xl font-semibold leading-[1.18] tracking-[-0.03em] sm:text-4xl lg:text-5xl"
        >
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              range={[i / words.length, (i + 1) / words.length]}
              progress={scrollYProgress}
              reduce={reduce}
            >
              {word}
            </Word>
          ))}
        </p>

        <Reveal delay={0.1}>
          {profile.story[1] && (
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.story[1]}
            </p>
          )}
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            Read my story
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
