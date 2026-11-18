import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiVite,
  SiFirebase,
  SiPwa,
} from "react-icons/si";

// One source of truth for every technology icon used on the site.
export const tech = {
  html: { name: "HTML", Icon: FaHtml5, color: "#e34f26" },
  css: { name: "CSS", Icon: FaCss3Alt, color: "#264de4" },
  javascript: { name: "JavaScript", Icon: SiJavascript, color: "#d9b800" },
  react: { name: "React", Icon: SiReact, color: "#149eca" },
  tailwind: { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#0ea5e9" },
  vite: { name: "Vite", Icon: SiVite, color: "#646cff" },
  node: { name: "Node.js", Icon: FaNodeJs, color: "#3c873a" },
  express: { name: "Express", Icon: SiExpress, color: "#111110" },
  firebase: { name: "Firebase", Icon: SiFirebase, color: "#f5a000" },
  mongodb: { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  mysql: { name: "MySQL", Icon: SiMysql, color: "#00758f" },
  git: { name: "Git", Icon: FaGitAlt, color: "#f05032" },
  github: { name: "GitHub", Icon: FaGithub, color: "#181717" },
  pwa: { name: "PWA", Icon: SiPwa, color: "#5a0fc8" },
};
