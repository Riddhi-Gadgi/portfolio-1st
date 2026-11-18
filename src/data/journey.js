import { Sprout, Search, Settings, Rocket, Bot, Globe } from "lucide-react";

export const overallCgpa = "8.89";

// `gpa` is optional. Add it for semesters 3 and 5 when you have the numbers.
export const journey = [
  {
    semester: "Semester 01",
    title: "The Beginning",
    Icon: Sprout,
    gpa: "9.36",
    stamp: "Foundation Visa",
    subjects: [
      "Elements of Programming",
      "Computer Organization",
      "C Language",
      "Emerging Computer Technologies",
      "Indian Knowledge System",
      "Literature and Language",
    ],
    quote: "The first line of code became my first destination.",
  },
  {
    semester: "Semester 02",
    title: "Logic Explorer",
    Icon: Search,
    gpa: "9.09",
    stamp: "Logic Visa",
    subjects: ["Data Structures", "Java", "Web Technology", "DBMS", "MySQL"],
    quote: "Learning how ideas transform into systems.",
  },
  {
    semester: "Semester 03",
    title: "System Builder",
    Icon: Settings,
    gpa: null,
    stamp: "Engineering Visa",
    subjects: [
      "Operating System",
      "Object Oriented Java",
      "E-Commerce Technology",
      "Graphics, Multimedia & Animation",
    ],
    quote: "Understanding the machines behind the magic.",
  },
  {
    semester: "Semester 04",
    title: "Engineering Mind",
    Icon: Rocket,
    gpa: "8.36",
    stamp: "Creation Visa",
    subjects: [
      "Software Engineering",
      "Advanced DBMS",
      "Software Testing",
      "Great Epics - Ramayan and Mahabharat",
    ],
    quote: "Building discipline through engineering.",
  },
  {
    semester: "Semester 05",
    title: "Innovation Lab",
    Icon: Bot,
    gpa: null,
    stamp: "Innovation Visa",
    subjects: [
      "Object Oriented Analysis and Design",
      "Python",
      "ASP.NET",
      "Software Development Project",
    ],
    quote: "Moving from learning to creating.",
  },
  {
    semester: "Semester 06",
    title: "Developer World",
    Icon: Globe,
    gpa: null,
    stamp: "Final Journey",
    subjects: ["Final Year Project"],
    quote: "Ready to build meaningful technology.",
  },
];
