import { Folder, FileText, ClipboardList } from "lucide-react";

export const PROGRAMS = [
  "Full Stack JS",
  "JavaScript Basic",
  "Object Oriented Programming with JavaScript",
  "Asynchronous JavaScript",
  "Back End",
  "Front End",
  "Web Design",
  "Data Science",
  "Data Analyst",
  "Go Lang Basic",
];

export const LESSONS = [
  "React State Management",
  "TypeScript Generics",
  "REST API Design",
  "JWT Authentication",
  "Figma Fundamental",
];

export const ASSIGNMENTS = [
  "Build Todo App",
  "Create REST API",
  "Portfolio Website",
  "Authentication Challenge",
  "Figma Design",
];

export const OVERVIEWS = [
  {
    label: "Programs",
    value: 12,
  },
  {
    label: "Modules",
    value: 48,
  },
  {
    label: "Lessons",
    value: 180,
  },
  {
    label: "Assignments",
    value: 90,
  },
];

export const ICONS = {
  program: Folder,
  lesson: FileText,
  assignment: ClipboardList,
};
