import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // subtle depth once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll + Esc to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <motion.nav
          aria-label="Primary"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className={`flex w-full max-w-md items-center justify-between gap-1 rounded-full border bg-white/70 p-1.5 backdrop-blur-xl transition-shadow duration-300 md:w-auto md:max-w-none md:justify-start ${
            scrolled ? "border-line shadow-lift" : "border-white/60 shadow-soft"
          }`}
        >
          <Link
            to="/"
            aria-label={`${profile.name} — home`}
            className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm text-white transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {profile.initials}
          </Link>

          {/* desktop links: a soft pill follows the cursor, a dot marks the current page */}
          <ul
            className="hidden items-center md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onMouseEnter={() => setHovered(link.to)}
                  onFocus={() => setHovered(link.to)}
                  onBlur={() => setHovered(null)}
                  className={({ isActive }) =>
                    `relative block rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {hovered === link.to && (
                        <motion.span
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-full bg-ink/[0.06]"
                          transition={{ type: "spring", stiffness: 500, damping: 38 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            download
            className="group ml-1 hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm text-white transition-transform duration-300 hover:scale-[1.03] active:scale-95 md:inline-flex"
          >
            Resume
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "m"}
                initial={{ rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 80, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="grid place-items-center"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed inset-x-4 top-[4.75rem] z-50 mx-auto max-w-md origin-top rounded-3xl border border-line bg-white p-3 shadow-lift md:hidden"
            >
              <ul>
                {links.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-2xl transition-colors ${
                          isActive
                            ? "bg-accent-soft text-accent"
                            : "text-ink active:bg-ink/5"
                        }`
                      }
                    >
                      {link.label}
                      <ArrowUpRight size={18} className="opacity-40" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <a
                href={profile.resume}
                download
                className="btn-primary mt-2 w-full"
              >
                Download resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}