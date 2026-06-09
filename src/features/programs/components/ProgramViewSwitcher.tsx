"use client";

import { LayoutGrid, Table } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewMode = "grid" | "table";

interface ProgramViewSwitcherProps {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
}

export default function ProgramViewSwitcher({
  view,
  onChange,
}: ProgramViewSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        // variant={view === "grid" ? "default" : "outline"}
        className={view === "grid" ? "bg-[#0d1b2a] text-white" : "outline"}
        onClick={() => {
          console.log("GRID");
          onChange("grid");
        }}
      >
        <LayoutGrid size={16} />
        Grid
      </Button>

      <Button
        type="button"
        // variant={view === "table" ? "default" : "outline"}
        className={view === "table" ? "bg-[#0d1b2a] text-white" : "outline"}
        onClick={() => {
          console.log("TABLE");
          onChange("table");
        }}
      >
        <Table size={16} />
        Table
      </Button>
    </div>
  );
}
