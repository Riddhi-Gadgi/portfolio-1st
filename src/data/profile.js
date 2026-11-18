import { FaGithub, FaLinkedin } from "react-icons/fa";

export const profile = {
  name: "Riddhi Gadgi",
  initials: "RG",
  role: "Software Developer",

  // Hero headline: lead + accent word (italic, rose) + tail
  headline: {
    lead: "I turn ideas into",
    accent: "meaningful",
    tail: "digital experiences.",
  },
  intro:
    "I'm a full-stack developer who blends logic and creativity to build digital products that are clear, fast and a pleasure to use.",

  // Set to "" to hide the status badge
  status: "Open to opportunities",

  // Words that rotate in the hero ("Currently focused on …")
  focus: [
    "Algorithmic Thinking",
    "System Design",
    "Technical Innovation",
    "Problem Solving",
    "Creative Logic",
  ],

  email: "gadgiworkspace@gmail.com",
  resume: "/Riddhi%20Gadgi%20Resume%20-%203rd.pdf",

  // TODO: replace the placeholder URLs with your real profiles
  socials: [
    {
      label: "GitHub",
      handle: "github.com/Riddhi-Gadgi",
      href: "https://github.com/Riddhi-Gadgi",
      Icon: FaGithub,
    },
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/riddhi-gadgi379",
      href: "https://www.linkedin.com/in/riddhi-gadgi379",
      Icon: FaLinkedin,
    },
  ],

  story: [
    "I'm Riddhi Gadgi, a passionate full-stack developer who loves to explore, observe, and create meaningful software experiences.",
    "I believe technology can transform lives by making learning more accessible, interactive, and impactful.",
    "I enjoy taking on challenges that level me up, and I push myself to learn, experiment, and grow continuously.",
    "I love collaborating with teams, sharing ideas, and building products that solve meaningful problems.",
  ],
  quote:
    "Always curious. Always creating. Always searching for the next challenge that turns imagination into impact.",
};
