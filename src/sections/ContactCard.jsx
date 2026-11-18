import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { FaEnvelope, FaFilePdf } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import PaperPlaneGraphic from "@/components/graphics/PaperPlaneGraphic";
import { profile } from "@/data/profile";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const rows = [
    ...profile.socials,
    {
      label: "Email",
      handle: profile.email,
      href: `mailto:${profile.email}`,
      Icon: FaEnvelope,
    },
    {
      label: "Resume",
      handle: "Download PDF",
      href: profile.resume,
      Icon: FaFilePdf,
      download: true,
    },
  ];

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-white sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
            <p className="eyebrow !text-white/50">Get in touch</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-white/35">meaningful.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/60">
              Have a project, an opportunity or just an idea? My inbox is always
              open.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-light">
                Say hello
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="btn-outline-light"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>

            {/* <PaperPlaneGraphic className="mt-10 hidden w-56 text-white/80 sm:block" /> */}
          </div>

          <ul className="divide-y divide-white/10 self-start rounded-3xl border border-white/10 bg-white/[0.04]">
            {rows.map(({ label, handle, href, Icon, download }) => (
              <li key={label}>
                <a
                  href={href}
                  download={download || undefined}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block truncate text-sm text-white/50">
                      {handle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
