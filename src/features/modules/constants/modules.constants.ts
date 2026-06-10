import { Module } from "../types/module.type";

import { LESSONS } from "@/features/lessons/constants/lessons.constants";
import { ASSIGNMENTS } from "@/features/assignments/constants/assignments.constants";
import { RESOURCES } from "@/features/resources/constants/resources.constants";

export const MODULES: Module[] = [
   {
      id: "mod-001",

      slug: "javascript-fundamentals",

      title: "1 - JavaScript Fundamentals",

      description:
         "Learn variables, functions, arrays, objects, loops, and modern JavaScript fundamentals.",

      programSlug: "full-stack-javascript",

      programTitle: "Full Stack JavaScript",

      githubPath:
         "Programs/Full Stack JavaScript/1 - JavaScript Fundamentals",

      lessons: [
         LESSONS[0],
         LESSONS[1],
         LESSONS[2],
      ],

      assignments: [
         ASSIGNMENTS[0],
         ASSIGNMENTS[1],
      ],

      resources: [],

      createdAt: "2026-01-01",

      updatedAt: "2026-01-05",
   },

   {
      id: "mod-002",

      slug: "javascript-oop",

      title: "2 - JavaScript OOP",

      description:
         "Object-oriented programming concepts including classes, inheritance, encapsulation, and polymorphism.",

      programSlug: "full-stack-javascript",

      programTitle: "Full Stack JavaScript",

      githubPath:
         "Programs/Full Stack JavaScript/2 - JavaScript OOP",

      lessons: [],

      assignments: [],

      resources: [],

      createdAt: "2026-01-02",

      updatedAt: "2026-01-06",
   },

   {
      id: "mod-003",

      slug: "react-fundamentals",

      title: "5 - React Fundamentals",

      description:
         "Learn React components, props, state, hooks, and component architecture.",

      programSlug: "front-end",

      programTitle: "Front End",

      githubPath:
         "Programs/Front End/5 - React Fundamentals",

      lessons: [
         LESSONS[3],
      ],

      assignments: [
         ASSIGNMENTS[2],
      ],

      resources: [
         RESOURCES[0],
         RESOURCES[1],
      ],

      createdAt: "2026-01-13",

      updatedAt: "2026-01-17",
   },

   {
      id: "mod-004",

      slug: "expressjs-backend",

      title: "1 - Express.js",

      description:
         "Build REST APIs using Express.js.",

      programSlug: "back-end",

      programTitle: "Back End",

      githubPath:
         "Programs/Back End/1 - Express.js",

      lessons: [
         LESSONS[4],
      ],

      assignments: [
         ASSIGNMENTS[3],
      ],

      resources: [
         RESOURCES[4],
      ],

      createdAt: "2026-01-18",

      updatedAt: "2026-01-22",
   },
];