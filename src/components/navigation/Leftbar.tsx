"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MENUS } from "@/constants/menu";

export default function Leftbar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[15vw] flex-col border-r border-[#D9E2F2] bg-[#EDF2FF]">
      {/* Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {MENUS.map((menu) => {
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
            group flex items-center gap-4 rounded-2xl px-2 py-2 transition-all duration-200
            ${
              active
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-[#DCE7FF]"
            }
          `}
              >
                {/* Icon */}
                <div
                  className={`
              flex h-10 w-10 items-center justify-center rounded-sm transition-all
              ${active ? "text-white" : "text-slate-600 "}
            `}
                >
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span
                    className={`
                text-sm font-semibold transition-colors
                ${active ? "text-white" : "text-slate-700 "}
              `}
                  >
                    {menu.label}
                  </span>

                  <span
                    className={`
                text-xs transition-colors
                ${active ? "text-blue-300" : "text-slate-500 "}
              `}
                  >
                    {menu.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t p-6">
        <p className="text-xs text-slate-400">VICA v1.0</p>
      </div>
    </aside>
  );
}
