"use client";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";
import MarkdownViewer from "@/components/shared/MarkdownViewer";

import { Assignment } from "@/features/assignments/types/assignment.type";

interface AssignmentContentProps {
  assignment: Assignment;
  markdown: string;
}

export default function AssignmentContent({
  assignment,
  markdown,
}: AssignmentContentProps) {
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
            label: "Assignments",
            href: "/assignments",
          },
          {
            label: assignment.title,
          },
        ]}
      />

      <div>
        <MarkdownViewer content={markdown} />
      </div>
    </motion.div>
  );
}
