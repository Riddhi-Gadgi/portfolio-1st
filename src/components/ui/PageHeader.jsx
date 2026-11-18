import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// title = dark part, titleMuted = grey second half (Apple-style two-tone headline)
export default function PageHeader({
  eyebrow,
  title,
  titleMuted,
  description,
  graphic,
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-12%] h-[30rem] w-[30rem] rounded-full bg-accent-soft blur-3xl"
      />
      <div className="container-page relative grid items-center gap-10 pb-16 pt-36 sm:pt-44 lg:grid-cols-12 lg:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.p variants={item} className="eyebrow">
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="display mt-5 text-[clamp(2.7rem,7vw,5.4rem)]"
          >
            {title}
            {titleMuted && (
              <span className="block text-ink/25">{titleMuted}</span>
            )}
          </motion.h1>
          {description && (
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {graphic && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          >
            {graphic}
          </motion.div>
        )}
      </div>
    </header>
  );
}
