import {
   House,
   GraduationCap,
   FolderOpen,
   FileText,
   ClipboardCheck,
   Package,
   Settings,
} from "lucide-react";

export const MENUS = [
   {
      label: "Home",
      description: "Overview",
      href: "/",
      icon: House,
   },

   {
      label: "Programs",
      description: "Learning Paths",
      href: "/programs",
      icon: GraduationCap,
   },

   {
      label: "Modules",
      description: "Course Modules",
      href: "/modules",
      icon: FolderOpen,
   },

   {
      label: "Lessons",
      description: "Learning Content",
      href: "/lessons",
      icon: FileText,
   },

   {
      label: "Assignments",
      description: "Coding Challenges",
      href: "/assignments",
      icon: ClipboardCheck,
   },

   {
      label: "Resources",
      description: "Downloads & Assets",
      href: "/resources",
      icon: Package,
   },

   {
      label: "Settings",
      description: "Preferences",
      href: "/settings",
      icon: Settings,
   },
] as const;