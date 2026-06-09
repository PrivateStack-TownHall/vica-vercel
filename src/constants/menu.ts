import {
   House,
   GraduationCap,
   BookMarked,
   ClipboardCheck,
   Settings,
   Package
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
      label: "Lessons",
      description: "Study Materials",
      href: "/lessons",
      icon: BookMarked,
   },
   {
      label: "Assignments",
      description: "Challenges",
      href: "/assignments",
      icon: ClipboardCheck,
   },
   {
      label: "Resources",
      description: "Materials",
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