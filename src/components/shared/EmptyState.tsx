"use client";

import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "No Data Found",
  description = "There is currently no data available.",
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        min-h-[400px]
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      <div
        className="
          mb-4
          rounded-full
          bg-[#EDF2FF]
          p-4
        "
      >
        <Inbox
          className="
            size-12
            text-[#5477A6]
          "
        />
      </div>

      <h2
        className="
          mb-2
          text-xl
          font-semibold
          text-[#0D1B2A]
        "
      >
        {title}
      </h2>

      <p className="max-w-md text-slate-500">{description}</p>
    </div>
  );
}
