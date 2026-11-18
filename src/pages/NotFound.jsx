import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import usePageTitle from "@/hooks/usePageTitle";
import OrbitGraphic from "@/components/graphics/OrbitGraphic";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="container-page grid min-h-[90vh] place-items-center pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <OrbitGraphic className="mx-auto w-56 sm:w-64" />
        <p className="eyebrow mt-6">Error 404</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">Lost in transit.</h1>
        <p className="mx-auto mt-5 max-w-sm text-muted">
          This page doesn&apos;t exist, or it has moved somewhere new.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back home
        </Link>
      </motion.div>
    </section>
  );
}
