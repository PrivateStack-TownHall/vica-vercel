"use client";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import MarkdownViewer from "@/components/shared/MarkdownViewer";

import { Lesson } from "@/features/lessons/types/lesson.type";

interface LessonContentProps {
  lesson: Lesson;

  markdown: string;
}

export default function LessonContent({
  lesson,
  markdown,
}: LessonContentProps) {
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
        title={""}
        description={""}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Lessons",
            href: "/lessons",
          },
          {
            label: lesson.title,
          },
        ]}
      />

      <div
        className="
         
        "
      >
        <MarkdownViewer content={markdown} />
      </div>
    </motion.div>
  );
}
