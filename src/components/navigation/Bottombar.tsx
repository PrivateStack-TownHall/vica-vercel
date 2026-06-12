"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  FolderKanban,
  Package,
  LifeBuoy,
  Menu,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Bottombar() {
  const pathname = usePathname();

  const menus = [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Programs",
      href: "/programs",
      icon: GraduationCap,
    },
    {
      label: "Lessons",
      href: "/lessons",
      icon: BookOpen,
    },
    {
      label: "Assignments",
      href: "/assignments",
      icon: ClipboardCheck,
    },
  ];

  const moreMenus = [
    {
      label: "Modules",
      href: "/modules",
      icon: FolderKanban,
    },
    {
      label: "Resources",
      href: "/resources",
      icon: Package,
    },
    {
      label: "Support",
      href: "/support",
      icon: LifeBuoy,
    },
  ];

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-[#D9E2F2]
        bg-white/95
        backdrop-blur
      "
    >
      <nav
        className="
          grid
          grid-cols-5
          px-2
          py-2
        "
      >
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            menu.href === "/"
              ? pathname === "/"
              : pathname.startsWith(menu.href);

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-1
                rounded-xl
                px-2
                py-2
                transition-all
                duration-200
                active:scale-95
                ${active ? "bg-[#EDF2FF]" : "hover:bg-slate-50"}
              `}
            >
              {active && (
                <div
                  className="
                    absolute
                    top-0
                    h-1
                    w-8
                    rounded-full
                    bg-[#5477A6]
                  "
                />
              )}

              <Icon
                size={20}
                className={`
                  transition-all
                  ${active ? "scale-110 text-[#5477A6]" : "text-slate-500"}
                `}
              />

              <span
                className={`
                  text-[10px]
                  font-medium
                  transition-all
                  ${active ? "text-[#5477A6]" : "text-slate-500"}
                `}
              >
                {menu.label}
              </span>
            </Link>
          );
        })}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1
                rounded-xl
                px-2
                py-2
                transition-all
                duration-200
                active:scale-95
                hover:bg-slate-50
              "
            >
              <Menu size={20} className="text-slate-500" />

              <span
                className="
                  text-[10px]
                  font-medium
                  text-slate-500
                "
              >
                More
              </span>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="top"
            align="end"
            className="
              mb-2
              w-52
              rounded-xl
              border-0
              bg-white
              p-2
              shadow-none
              ring-0
            "
          >
            {moreMenus.map((menu) => {
              const Icon = menu.icon;

              return (
                <DropdownMenuItem
                  key={menu.href}
                  asChild
                  className="
                    rounded-lg
                    focus:bg-[#EDF2FF]
                    data-[highlighted]:bg-[#EDF2FF]
                  "
                >
                  <Link
                    href={menu.href}
                    className="
                      flex
                      items-center
                      gap-3
                      px-3
                      py-2
                      transition-all
                      active:scale-[0.98]
                    "
                  >
                    <Icon size={18} className="text-[#5477A6]" />

                    <span>{menu.label}</span>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
