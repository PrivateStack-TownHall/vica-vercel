"use client";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LessonGrid from "@/features/lessons/components/LessonGrid";
import AssignmentGrid from "@/features/assignments/components/AssignmentGrid";
import ResourceGrid from "@/features/resources/components/ResourceGrid";

import { Module } from "@/features/modules/types/module.type";

interface ModuleContentProps {
  module: Module;
}

export default function ModuleContent({ module }: ModuleContentProps) {
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
      className="space-y-8"
    >
      <PageHeader
        title={module.title}
        description={module.description ?? ""}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Modules",
            href: "/modules",
          },
          {
            label: module.title,
          },
        ]}
      />

      <Tabs defaultValue="lessons" className="w-full">
        <TabsList
          className="
            mb-6
            grid
            w-full
            grid-cols-3
          "
        >
          <TabsTrigger value="lessons">
            Lessons ({module.lessons?.length ?? 0})
          </TabsTrigger>

          <TabsTrigger value="assignments">
            Assignments ({module.assignments?.length ?? 0})
          </TabsTrigger>

          <TabsTrigger value="resources">
            Resources ({module.resources?.length ?? 0})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lessons">
          <LessonGrid lessons={module.lessons ?? []} />
        </TabsContent>

        <TabsContent value="assignments">
          <AssignmentGrid assignments={module.assignments ?? []} />
        </TabsContent>

        <TabsContent value="resources">
          <ResourceGrid resources={module.resources ?? []} />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
