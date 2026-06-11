"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";
import ViewSwitcher from "@/components/shared/ViewSwitcher";

import AssignmentGrid from "@/features/assignments/components/AssignmentGrid";
import AssignmentTable from "@/features/assignments/components/AssignmentTable";

import { useAssignments } from "@/features/assignments/hooks/useAssignments";

import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/ErrorState";
import EmptyState from "@/components/shared/EmptyState";

import { Assignment } from "@/features/assignments/types/assignment.type";

export default function AssignmentsPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  const {
    data: assignments = [],
    isLoading,
    isError,
    error,
  } = useAssignments();

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment: Assignment) =>
      [assignment.title, assignment.description]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [assignments, search]);

  if (isLoading) {
    return <LoadingState title="Loading assignments..." />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load assignments"
        description={error instanceof Error ? error.message : "Unknown error"}
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
        title="Assignments"
        description="Explore assignments and challenges."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Assignments",
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
            placeholder="Search Assignments..."
          />
        </div>

        <ViewSwitcher view={view} onChange={setView} />
      </motion.div>

      {filteredAssignments.length === 0 ? (
        <EmptyState
          title="No assignments found"
          description="Try another keyword."
        />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {view === "grid" ? (
              <AssignmentGrid assignments={filteredAssignments} />
            ) : (
              <AssignmentTable assignments={filteredAssignments} />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
