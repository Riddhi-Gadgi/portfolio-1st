# Riddhi Gadgi — Portfolio

React + Vite + Tailwind CSS + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Where to edit things

| I want to change…                    | Edit this file                  |
| ------------------------------------ | ------------------------------- |
| Name, headline, bio, social links    | `src/data/profile.js`           |
| Add / edit a project                 | `src/data/projects.js`          |
| Skills shown on the home page        | `src/data/skills.js`            |
| Add a new technology icon            | `src/data/tech.js`              |
| BCA semesters and GPAs               | `src/data/journey.js`           |
| Colours and fonts                    | `tailwind.config.js`            |
| Images                               | `src/assets/` (see its README)  |
| Resume                               | `public/resume.pdf`             |

## Structure

```
src/
├─ components/
│  ├─ layout/   Navbar, Footer, Layout, ScrollToTop
│  └─ ui/       Reveal, SectionHeading, PageHeader, TechChip, ProjectCover
├─ sections/    Hero, Work, Skills, AboutTeaser, Journey, ContactCard
│  └─ work/     FeaturedProject, ProjectCard, ProjectModal, ProjectShowcase
├─ pages/       Home, ProjectsPage, AboutPage, ContactPage, NotFound
├─ data/        profile, projects, skills, tech, journey  (content only)
├─ hooks/       usePageTitle
├─ lib/         assets (image lookup with graceful fallback)
└─ styles/      index.css (tokens + small component classes)
```

## Before you deploy

1. Replace the GitHub and LinkedIn URLs in `src/data/profile.js`.
2. Add `public/resume.pdf`.
3. Drop screenshots into `src/assets/` (names listed in the assets README).
4. Fill in the missing GPA for semesters 3 and 5 (or leave them hidden).
5. If deploying to a static host, add an SPA rewrite so `/projects` etc. load directly
   (Netlify: `/* /index.html 200` in `public/_redirects`; Vercel handles Vite SPAs automatically).
