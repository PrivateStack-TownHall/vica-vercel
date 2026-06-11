"use client";

import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;
  description?: string;
}

export default function LoadingState({
  title = "Loading...",
  description = "Please wait while we load the data.",
}: LoadingStateProps) {
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
      <Loader2
        className="
          mb-4
          size-12
          animate-spin
          text-[#5477A6]
        "
      />

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
