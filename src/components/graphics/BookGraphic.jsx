import { motion, useReducedMotion } from "framer-motion";

const leftLines = [
  [76, 76, 137],
  [76, 88, 145],
  [76, 100, 128],
  [76, 112, 140],
  [76, 124, 133],
  [76, 136, 145],
  [76, 148, 118],
];

const rightLines = [
  [181, 128, 245],
  [181, 140, 234],
  [181, 152, 242],
];

export default function BookGraphic({ className = "" }) {
  const reduce = useReducedMotion();

  const write = (delay) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.7, delay, ease: "easeOut" },
        };

  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`text-ink ${className}`}
    >
      {/* Soft shadow */}
      <ellipse
        cx="160"
        cy="190"
        rx="116"
        ry="9"
        fill="currentColor"
        opacity=".08"
        stroke="none"
      />

      {/* Bottom page stack */}
      <path
        d="M47 59 L47 181 Q105 170 160 182 Q215 170 273 181 L273 59"
        fill="white"
        strokeWidth="1.4"
      />
      <path
        d="M51 64 L51 185 Q108 174 160 186 Q212 174 269 185 L269 64"
        className="opacity-30"
      />

      {/* Main book cover */}
      <path
        d="M42 49 Q103 36 160 45 Q217 36 278 49 L278 179 Q216 168 160 181 Q104 168 42 179 Z"
        fill="currentColor"
        opacity=".10"
      />

      {/* Left page */}
      <path d="M53 48 Q106 35 160 46 L160 173 Q105 164 53 177 Z" fill="white" />

      {/* Right page */}
      <path
        d="M160 46 Q214 35 267 48 L267 177 Q215 164 160 173 Z"
        fill="white"
      />

      {/* Page outlines */}
      <path d="M53 48 Q106 35 160 46 Q214 35 267 48" />
      <path d="M53 177 Q105 164 160 173 Q215 164 267 177" />

      {/* Spine and binding */}
      <path d="M160 46 Q156 110 160 173" strokeWidth="2" />
      <path d="M165 48 Q168 110 165 171" className="opacity-20" />

      {/* Left page writing */}
      {leftLines.map(([x1, y, x2], i) => (
        <motion.path
          key={`l-${i}`}
          d={`M${x1} ${y} Q${(x1 + x2) / 2} ${y - 1} ${x2} ${y}`}
          {...write(0.2 + i * 0.14)}
          className="opacity-40"
        />
      ))}

      {/* Small chapter heading */}
      <motion.g {...write(0.15)}>
        <path d="M76 61 H112" strokeWidth="2" className="stroke-accent" />
        <path d="M76 66 H126" className="opacity-25" />
      </motion.g>

      {/* Botanical illustration on right page */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: 7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <path d="M216 111 Q210 88 221 69" className="opacity-60" />
        <path
          d="M216 101 Q194 96 198 82 Q213 83 216 101Z"
          fill="currentColor"
          opacity=".12"
        />
        <path
          d="M218 91 Q239 87 239 73 Q222 73 218 91Z"
          fill="currentColor"
          opacity=".12"
        />
        <path
          d="M216 101 Q194 96 198 82 M218 91 Q239 87 239 73"
          className="opacity-65"
        />
        <path
          d="M221 69 Q215 61 221 56 Q227 62 221 69Z"
          fill="currentColor"
          opacity=".18"
        />
        <path d="M216 111 L212 116 M216 111 L223 116" className="opacity-40" />
      </motion.g>

      {/* Right page text */}
      {rightLines.map(([x1, y, x2], i) => (
        <motion.path
          key={`r-${i}`}
          d={`M${x1} ${y} Q${(x1 + x2) / 2} ${y - 1} ${x2} ${y}`}
          {...write(1.4 + i * 0.14)}
          className="opacity-40"
        />
      ))}

      {/* Page corner detail */}
      <path d="M253 165 Q258 162 267 164" className="opacity-25" />

      {/* Cherry-red bookmark */}
      <path
        d="M238 43 V95 L247 86 L256 95 V46"
        fill="currentColor"
        stroke="none"
        className="fill-accent"
      />

      {/* Page lift - subtle, independent of text */}
      {!reduce && (
        <motion.path
          d="M160 46 Q207 35 267 48 L267 177 Q214 164 160 173 Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="1"
          style={{ transformOrigin: "160px 46px" }}
          animate={{
            skewX: [0, -1.5, 0],
            scaleY: [1, 1.015, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2,
          }}
        />
      )}
    </svg>
  );
}
