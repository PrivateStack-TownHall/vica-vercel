"use client";

import { Search } from "lucide-react";

interface SearchBoxProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function SearchBox({
  value,
  placeholder = "Search...",
  onChange,
}: SearchBoxProps) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          h-11
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          pl-10
          pr-4
          text-sm
          outline-none
          transition-all
          focus:border-[#5477A6]
          focus:ring-2
          focus:ring-[#5477A6]/10
        "
      />
    </div>
  );
}
