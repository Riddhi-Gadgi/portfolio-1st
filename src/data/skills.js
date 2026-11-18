export const skillGroups = [
  {
    title: "Frontend",
    note: "Interfaces that feel fast and considered.",
    items: ["html", "css", "javascript", "react", "tailwind", "vite"],
  },
  {
    title: "Backend",
    note: "APIs, server logic and cloud services.",
    items: ["node", "express", "firebase"],
  },
  {
    title: "Databases",
    note: "Relational and document stores.",
    items: ["mysql", "mongodb"],
  },
  {
    title: "Tooling",
    note: "Version control and collaboration.",
    items: ["git", "github"],
  },
];

export const skillCount = skillGroups.reduce((n, g) => n + g.items.length, 0);
