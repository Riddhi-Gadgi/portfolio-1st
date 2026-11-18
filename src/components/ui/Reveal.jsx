import { motion } from "framer-motion";

// Fade-up on scroll. Respects reduced-motion via <MotionConfig> in main.jsx.
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
