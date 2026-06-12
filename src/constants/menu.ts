import {
   House,
   GraduationCap,
   FolderOpen,
   FileText,
   ClipboardCheck,
   Package,
   LifeBuoy,
} from "lucide-react";

import { ROUTES } from "./routes"

export const MENUS = [
   {
      label: "Home",
      description: "Overview",
      href: ROUTES.HOME,
      icon: House,
   },

   {
      label: "Programs",
      description: "Learning Paths",
      href: ROUTES.PROGRAMS,
      icon: GraduationCap,
   },

   {
      label: "Modules",
      description: "Course Modules",
      href: ROUTES.MODULES,
      icon: FolderOpen,
   },

   {
      label: "Lessons",
      description: "Learning Content",
      href: ROUTES.LESSONS,
      icon: FileText,
   },

   {
      label: "Assignments",
      description: "Coding Challenges",
      href: ROUTES.ASSIGNMENTS,
      icon: ClipboardCheck,
   },

   {
      label: "Resources",
      description: "Downloads & Assets",
      href: ROUTES.RESOURCES,
      icon: Package,
   },

   {
      label: "Supports",
      description: "Help Center",
      href: ROUTES.SUPPORT,
      icon: LifeBuoy,
   },
] as const;