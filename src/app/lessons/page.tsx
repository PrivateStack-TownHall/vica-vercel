"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";
import ViewSwitcher from "@/components/shared/ViewSwitcher";

import LessonGrid from "@/features/lessons/components/LessonGrid";
import LessonTable from "@/features/lessons/components/LessonTable";

import { useLessons } from "@/features/lessons/hooks/useLessons";

import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/ErrorState";
import EmptyState from "@/components/shared/EmptyState";

import { Lesson } from "@/features/lessons/types/lesson.type";

export default function LessonsPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  const { data: lessons = [], isLoading, isError, error } = useLessons();

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson: Lesson) =>
      [lesson.title, lesson.description]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [lessons, search]);

  if (isLoading) {
    return <LoadingState title="Loading lessons..." />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load lessons"
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
        title="Lessons"
        description="Explore lesson materials and study content."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Lessons",
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
            placeholder="Search Lessons..."
          />
        </div>

        <ViewSwitcher view={view} onChange={setView} />
      </motion.div>

      {filteredLessons.length === 0 ? (
        <EmptyState
          title="No lessons found"
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
              <LessonGrid lessons={filteredLessons} />
            ) : (
              <LessonTable lessons={filteredLessons} />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
