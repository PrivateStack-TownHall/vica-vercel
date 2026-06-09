"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";

import { MODULES } from "@/features/modules/constants/modules.constants";

import ModuleGrid from "@/features/modules/components/ModuleGrid";
import ModuleTable from "@/features/modules/components/ModuleTable";

import ViewSwitcher from "@/components/shared/ViewSwitcher";

export default function ModulesPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  const filteredModules = MODULES.filter((module) =>
    module.title.toLowerCase().includes(search.toLowerCase()),
  );

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
        title="Modules"
        description="Explore learning modules and study materials."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Modules",
          },
        ]}
      />

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
          mb-6
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
            placeholder="Search Modules..."
          />
        </div>

        <ViewSwitcher view={view} onChange={setView} />
      </motion.div>

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
          <ModuleGrid modules={filteredModules} />
        ) : (
          <ModuleTable modules={filteredModules} />
        )}
      </motion.div>
    </motion.div>
  );
}
