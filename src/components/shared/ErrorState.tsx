"use client";

import { TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred while loading the data.",
  onRetry,
}: ErrorStateProps) {
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
          bg-red-50
          p-4
        "
      >
        <TriangleAlert
          className="
            size-12
            text-red-500
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

      <p
        className="
          mb-6
          max-w-md
          text-slate-500
        "
      >
        {description}
      </p>

      {onRetry && (
        <Button
          onClick={onRetry}
          className="
            bg-[#0D1B2A]
            hover:bg-[#1B263B]
          "
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
