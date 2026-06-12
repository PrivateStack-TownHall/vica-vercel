"use client";

import { Megaphone } from "lucide-react";

export default function Promotion() {
  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-gradient-to-r
        from-[#0D1B2A]
        to-[#274472]
        p-8
        text-white
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/20
              px-3
              py-1
              text-sm
            "
          >
            <Megaphone size={16} />
            Announcement
          </div>

          <h2
            className="
              mb-2
              text-3xl
              font-bold
            "
          >
            Welcome to VICA Learning Portal
          </h2>

          <p
            className="
              max-w-2xl
              text-blue-100
            "
          >
            Explore programs, modules, lessons, assignments, and downloadable
            resources designed for modern software development learning.
          </p>
        </div>
      </div>
    </section>
  );
}
