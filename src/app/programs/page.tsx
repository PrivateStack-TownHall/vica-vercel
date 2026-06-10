"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";

import ViewSwitcher from "@/components/shared/ViewSwitcher";
import ProgramGrid from "@/features/programs/components/ProgramGrid";

import { PROGRAMS } from "@/features/programs/constants/programs.constants";
import ProgramTable from "@/features/programs/components/ProgramTable";

export default function ProgramsPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <PageHeader
        title="Programs"
        description="Explore available learning paths, modules, lessons, assignments, and resources."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Programs",
          },
        ]}
      />

      {/* Search + View */}
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
        className="
          mb-8
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div className="flex-1">
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder="Search Programs..."
          />
        </div>

        <ViewSwitcher view={view} onChange={setView} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.4,
        }}
      >
        {view === "grid" ? (
          <ProgramGrid programs={PROGRAMS} />
        ) : (
          <ProgramTable programs={PROGRAMS} />
        )}
      </motion.div>
    </motion.div>
  );
}
