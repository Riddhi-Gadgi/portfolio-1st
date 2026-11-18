import { motion, useReducedMotion } from "framer-motion";

const stars = [
  [60, 40, 1.8],
  [122, 22, 1.3],
  [236, 28, 1.6],
  [330, 150, 1.4],
  [310, 220, 1.2],
  [38, 130, 1.3],
  [200, 64, 1.1],
  [90, 96, 1],
  [24, 205, 1.2],
  [285, 260, 1.5],
  [180, 120, 0.9],
];

export default function TelescopeGraphic({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`text-ink ${className}`}
    >
      {/* Star field */}
      {stars.map(([x, y, r], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="currentColor"
          stroke="none"
          animate={
            reduce
              ? undefined
              : { opacity: [0.2, 0.85, 0.2], scale: [0.8, 1.2, 0.8] }
          }
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
          style={{
            opacity: 0.5,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        />
      ))}

      {/* Planet system */}
      <circle cx="270" cy="80" r="64" className="opacity-15" />
      <circle cx="270" cy="80" r="43" className="opacity-15" />
      <circle cx="270" cy="80" r="12" fill="currentColor" stroke="none" />

      <ellipse
        cx="270"
        cy="80"
        rx="25"
        ry="7"
        transform="rotate(-20 270 80)"
        className="opacity-70"
      />

      <g>
        <circle cx="334" cy="80" r="3" className="fill-accent stroke-none" />
        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 270 80"
            to="360 270 80"
            dur="26s"
            repeatCount="indefinite"
          />
        )}
      </g>

      {/* Telescope sight line */}
      <path
        d="M238 128 L258 98"
        strokeDasharray="3 5"
        className="stroke-accent opacity-70"
      />

      {/* Tripod */}
      <path d="M150 205 L108 282 M150 205 L194 282 M150 205 L150 284" />
      <path d="M80 286 H224" className="opacity-25" />
      <path d="M125 248 H175" className="opacity-40" />

      {/* Telescope assembly - flipped horizontally */}
      <g transform="translate(300 0) scale(-1 1)">
        <g transform="rotate(-32 150 190)">
          <g>
            {!reduce && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 150 190; 2 150 190; 0 150 190; -2 150 190; 0 150 190"
                dur="14s"
                repeatCount="indefinite"
              />
            )}

            {/* Main tube */}
            <rect x="60" y="174" width="150" height="30" rx="6" fill="white" />

            {/* Objective lens housing */}
            <path d="M210 170 L246 164 L246 214 L210 208 Z" fill="white" />
            <path d="M246 164 Q256 189 246 214" />

            {/* Eyepiece */}
            <rect x="40" y="181" width="20" height="16" rx="3" fill="white" />

            {/* Focus adjustment */}
            <rect x="100" y="158" width="60" height="9" rx="3" fill="white" />

            {/* Tube details */}
            <path
              d="M100 174 V204 M140 174 V204 M180 174 V204"
              className="opacity-35"
            />
            <path d="M65 179 H205" className="opacity-30" />
          </g>
        </g>
      </g>

      {/* Mount */}
      <circle cx="150" cy="190" r="6" fill="white" />
      <circle cx="150" cy="190" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
