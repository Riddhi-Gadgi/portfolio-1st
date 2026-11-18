import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/profile";

const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const icons = [
    ...profile.socials,
    { label: "Email", href: `mailto:${profile.email}`, Icon: FaEnvelope },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} · Designed &amp; built with React
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="text-ink/70 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {icons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink/70 transition hover:border-ink hover:text-ink"
            >
              <Icon size={16} />
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition hover:bg-accent"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
