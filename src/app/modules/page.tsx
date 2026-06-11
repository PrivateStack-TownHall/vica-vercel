"use client";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";
import ViewSwitcher from "@/components/shared/ViewSwitcher";

import ModuleGrid from "@/features/modules/components/ModuleGrid";
import ModuleTable from "@/features/modules/components/ModuleTable";

import { useModules } from "@/features/modules/hooks/useModules";

import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/ErrorState";
import EmptyState from "@/components/shared/EmptyState";

import { Module } from "@/features/modules/types/module.type";

export default function ModulesPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  const { data: modules = [], isLoading, isError, error } = useModules();

  const filteredModules = useMemo(() => {
    return modules.filter((module: Module) =>
      [module.title, module.description ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [modules, search]);

  if (isLoading) {
    return <LoadingState title="Loading modules..." />;
  }

  if (isError) {
    console.error(error);

    return (
      <ErrorState
        title="Failed to load modules"
        description={error instanceof Error ? error.message : "Unknown error"}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
            placeholder="Search Modules..."
          />
        </div>

        <ViewSwitcher view={view} onChange={setView} />
      </motion.div>

      {filteredModules.length === 0 ? (
        <EmptyState
          title="No modules found"
          description="Try another keyword."
        />
      ) : (
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
      )}
    </motion.div>
  );
}
