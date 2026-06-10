import { Lesson } from "../types/lesson.type";

export const LESSONS: Lesson[] = [
   {
      id: "lesson-001",
      title: "Byte Burger",
      slug: "byte-burger",
      description:
         "Byte Burger study case and project documentation.",
      programTitle: "Byte Burger",
      moduleTitle: "Byte Burger Module 1",
      githubPath:
         "contents/lessons/byte-burger/README.md",
      createdAt: "2026-01-20",
      updatedAt: "2026-01-22",
   },

   {
      id: "lesson-002",
      title: "Theory",
      slug: "theory",
      description:
         "JavaScript fundamentals including variables, data types, functions, arrays, objects, loops, conditions, and ES6 features.",
      programTitle: "Theory Of Full Stack JavaScript",
      moduleTitle: "FS JS Theory",
      githubPath:
         "contents/lessons/theory/README.md",
      createdAt: "2026-01-21",
      updatedAt: "2026-01-23",
   },
];