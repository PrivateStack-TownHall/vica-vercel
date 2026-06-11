"use client";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";
import ViewSwitcher from "@/components/shared/ViewSwitcher";

import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/ErrorState";
import EmptyState from "@/components/shared/EmptyState";

import ProgramGrid from "@/features/programs/components/ProgramGrid";
import ProgramTable from "@/features/programs/components/ProgramTable";

import { usePrograms } from "@/features/programs/hooks/usePrograms";
import { Program } from "@/features/programs/types/program.type";

export default function ProgramsPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  const {
    data: programs = [],
    isLoading,
    isError,
    error,
    refetch,
  } = usePrograms();

  const filteredPrograms = useMemo(() => {
    return programs.filter((program: Program) =>
      [program.title, program.description]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [programs, search]);

  if (isLoading) {
    return (
      <LoadingState
        title="Loading Programs"
        description="Fetching learning programs from GitHub..."
      />
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to Load Programs"
        description={
          error instanceof Error ? error.message : "Something went wrong."
        }
        onRetry={() => refetch()}
      />
    );
  }

  if (!filteredPrograms.length) {
    return (
      <EmptyState
        title="No Programs Found"
        description="No learning programs are available."
      />
    );
  }

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
          <ProgramGrid programs={filteredPrograms} />
        ) : (
          <ProgramTable programs={filteredPrograms} />
        )}
      </motion.div>
    </motion.div>
  );
}
