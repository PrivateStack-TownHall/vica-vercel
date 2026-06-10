"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import SearchBox from "@/components/shared/SearchBox";
import ViewSwitcher from "@/components/shared/ViewSwitcher";

import ResourceGrid from "@/features/resources/components/ResourceGrid";
import ResourceTable from "@/features/resources/components/ResourceTable";

import { RESOURCES } from "@/features/resources/constants/resources.constants";

export default function ResourcesPage() {
  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">("grid");

  const filteredResources = useMemo(() => {
    return RESOURCES.filter((resource) =>
      [resource.title, resource.description, resource.type]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

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
        title="Resources"
        description="Explore downloadable learning resources and assets."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Resources",
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
            placeholder="Search Resources..."
          />
        </div>

        <ViewSwitcher view={view} onChange={setView} />
      </motion.div>

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
            <ResourceGrid resources={filteredResources} />
          ) : (
            <ResourceTable resources={filteredResources} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
