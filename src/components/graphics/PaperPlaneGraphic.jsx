import { motion, useReducedMotion } from "framer-motion";

export default function PaperPlaneGraphic({ className = "" }) {
  const reduce = useReducedMotion();

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
      {/* Soft background details */}
      <circle
        cx="258"
        cy="43"
        r="2"
        fill="currentColor"
        stroke="none"
        opacity=".35"
      />
      <path d="M273 65 V73 M269 69 H277" className="stroke-accent opacity-60" />

      {/* Curved flight trail */}
      <motion.path
        d="M22 185 C57 180 53 151 91 157 C117 161 119 135 148 131 C165 129 168 118 177 108"
        strokeDasharray="3 6"
        className="opacity-40"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Small trail marks */}
      <circle
        cx="39"
        cy="174"
        r="1.5"
        fill="currentColor"
        stroke="none"
        opacity=".35"
      />
      <circle
        cx="79"
        cy="153"
        r="1.2"
        fill="currentColor"
        stroke="none"
        opacity=".3"
      />
      <circle
        cx="119"
        cy="143"
        r="1"
        fill="currentColor"
        stroke="none"
        opacity=".25"
      />

      {/* Floating plane */}
      <motion.g
        style={{ transformOrigin: "205px 105px" }}
        animate={
          reduce
            ? undefined
            : {
                y: [0, -6, 0, 3, 0],
                rotate: [0, -1.5, 0, 1, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Plane shadow / rear wing */}
        <path
          d="M125 112 L287 40 L216 180 L185 137 Z"
          fill="currentColor"
          opacity=".06"
          stroke="none"
        />

        {/* Main paper silhouette */}
        <path d="M119 109 L292 35 L220 184 L183 139 Z" fill="white" />

        {/* Upper wing */}
        <path
          d="M119 109 L292 35 L183 139 Z"
          fill="currentColor"
          opacity=".045"
        />

        {/* Lower wing */}
        <path
          d="M119 109 L183 139 L220 184 Z"
          fill="currentColor"
          opacity=".09"
        />

        {/* Center fold */}
        <path d="M119 109 L183 139 L292 35" />

        {/* Lower crease */}
        <path d="M183 139 L220 184 L208 120" className="opacity-50" />

        {/* Fine upper crease */}
        <path d="M183 139 L208 120 L292 35" className="opacity-35" />

        {/* Folded paper tip */}
        <path
          d="M183 139 L179 169 L199 153"
          fill="currentColor"
          stroke="none"
          className="fill-accent"
        />

        <path d="M183 139 L179 169 L199 153" className="stroke-accent" />

        {/* Small paper crease */}
        <path d="M183 139 L220 184" className="opacity-25" />
      </motion.g>

      {/* Decorative tiny spark */}
      <motion.path
        d="M267 112 V124 M261 118 H273"
        className="stroke-accent"
        animate={
          reduce
            ? undefined
            : { opacity: [0.25, 0.8, 0.25], scale: [0.8, 1.1, 0.8] }
        }
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          transformOrigin: "267px 118px",
          transformBox: "view-box",
        }}
      />
    </svg>
  );
}
