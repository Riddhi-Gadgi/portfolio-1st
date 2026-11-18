import { motion, useReducedMotion } from "framer-motion";

// Concentric orbits with one satellite that has drifted off course; used for 404.
export default function OrbitGraphic({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      className={`text-ink ${className}`}
    >
      <circle cx="150" cy="150" r="40" className="opacity-25" />
      <circle cx="150" cy="150" r="80" className="opacity-20" />
      <circle
        cx="150"
        cy="150"
        r="120"
        className="opacity-15"
        strokeDasharray="2 6"
      />
      <circle cx="150" cy="150" r="8" fill="currentColor" stroke="none" />

      <g>
        <circle cx="230" cy="150" r="4" fill="currentColor" stroke="none" />
        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 150 150"
            to="360 150 150"
            dur="18s"
            repeatCount="indefinite"
          />
        )}
      </g>

      {/* the lost one */}
      <motion.circle
        r="4"
        className="fill-accent stroke-none"
        initial={{ cx: 240, cy: 90, opacity: 1 }}
        animate={
          reduce ? undefined : { cx: [240, 292], cy: [90, 36], opacity: [1, 0] }
        }
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 0.8,
        }}
      />
    </svg>
  );
}
