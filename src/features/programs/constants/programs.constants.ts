import { Program } from "../types/program.type";

import { MODULES } from "@/features/modules/constants/modules.constants";

export const PROGRAMS: Program[] = [
   {
      id: "program-001",

      slug: "full-stack-javascript",

      title: "Full Stack JavaScript",

      description:
         "Learn Front End and Back End development using JavaScript, React, Express, PostgreSQL, and modern development workflows.",

      level: "Expert",

      githubPath:
         "Programs/Full Stack JavaScript",

      modules: MODULES.filter(
         (module) =>
            module.programSlug ===
            "full-stack-javascript"
      ),

      createdAt: "2026-01-01",

      updatedAt: "2026-01-15",
   },

   {
      id: "program-002",

      slug: "front-end",

      title: "Front End",

      description:
         "Master HTML, CSS, JavaScript, React, Next.js, TailwindCSS, and modern UI development.",

      level: "Expert",

      githubPath:
         "Programs/Front End",

      modules: MODULES.filter(
         (module) =>
            module.programSlug ===
            "front-end"
      ),

      createdAt: "2026-01-01",

      updatedAt: "2026-01-15",
   },

   {
      id: "program-003",

      slug: "back-end",

      title: "Back End",

      description:
         "Build scalable APIs, databases, authentication systems, and server-side applications.",

      level: "Expert",

      githubPath:
         "Programs/Back End",

      modules: MODULES.filter(
         (module) =>
            module.programSlug ===
            "back-end"
      ),

      createdAt: "2026-01-01",

      updatedAt: "2026-01-15",
   },
];