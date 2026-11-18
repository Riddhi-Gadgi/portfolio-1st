import { assets } from "@/lib/assets";

// Add a project by adding one object here. Nothing else needs to change.
// `tech` values are keys from src/data/tech.js.
// `images` are file names inside src/assets (missing files fall back to a placeholder).

const make = (project) => {
  const images = assets(project.images);
  return { ...project, images, cover: images[0] ?? null };
};

export const projects = [
  make({
    id: "bhumi-gold",
    featured: true,
    year: "2026",
    title: "Bhumi Gold",
    subtitle: "Enterprise gold trading & jewellery ecosystem",
    description:
      "A full-scale gold trading and jewellery management platform that connects customers, inventory, pricing, orders and analytics into one unified system with a luxury-grade interface.",
    highlights: [
      "Authentication & secure profile management",
      "Live metal & gold rate tracking engine",
      "Raw metal stock inventory management",
      "Product catalog with category system",
      "Inquiry & quotation workflow",
      "Advanced product customization",
      "Smart cart & checkout experience",
      "Jewellery rate calculator with real-time pricing logic",
      "Order lifecycle (order → pickup → completion)",
      "Payment integration flow",
      "Admin dashboard with full control panel",
      "Invoice generation",
      "Reports & analytics dashboard",
      "Review & feedback system",
    ],
    tech: ["react", "javascript", "tailwind", "vite", "node", "github"],
    images: ["bhumi-1.jpg", "bhumi-2.jpg", "bhumi-3.jpg"],
    links: {
      presentation: "https://canva.link/ye97gokb55361oq",
      github: null,
      live: null,
    },
  }),

  make({
    id: "finexa",
    year: null,
    title: "Finexa",
    subtitle: "Fintech dashboard",
    description: "Clean portfolio insights and investor onboarding.",
    highlights: [
      "Interactive portfolio overview with dynamic charts",
      "Customizable watchlists & holdings view",
      "Investor onboarding flow with guided forms",
      "Responsive data tables with sorting & filters",
      "Lightweight client-side caching for snappy UX",
      "Accessible, color-safe charts (WCAG-aware)",
      "Unit-tested small modules for reliability",
      "Easy-to-integrate REST API layer",
    ],
    tech: ["react", "javascript", "tailwind", "vite", "node", "firebase", "github"],
    images: ["fin-1.jfif", "fin-2.jfif", "fin-3.jfif"],
    links: { presentation: null, github: null, live: null },
  }),

  make({
    id: "githive",
    year: null,
    title: "GitHive",
    subtitle: "Developer collaboration",
    description: "Collaborate, follow repositories and manage issues.",
    highlights: [
      "Activity feed with real-time updates",
      "Repository starring & simple code previewer",
      "Issue boards for lightweight project tracking",
      "Profile follow system and notifications",
      "Role-based permission model",
      "Simple markdown-based editor",
      "Cloud-sync and offline-resilient UI",
    ],
    tech: ["react", "node", "firebase", "javascript", "tailwind", "vite", "github"],
    images: ["hive-1.jfif", "hive-2.jfif", "hive-3.jfif"],
    links: { presentation: null, github: null, live: null },
  }),

  make({
    id: "note-down",
    year: null,
    title: "Note Down",
    subtitle: "Minimal notes app",
    description: "Distraction-free notes with offline support.",
    highlights: [
      "Minimal WYSIWYG editor with markdown support",
      "Offline persistence using local storage",
      "Tagging and quick search",
      "Lightweight PWA shell for installability",
      "Keyboard-first interactions",
      "Export / import notes (JSON)",
      "Small bundle, high performance",
    ],
    tech: ["react", "javascript", "tailwind", "pwa", "vite", "github"],
    images: ["nd-1.jfif", "nd-2.jfif", "nd-3.jfif"],
    links: { presentation: null, github: null, live: null },
  }),
];
