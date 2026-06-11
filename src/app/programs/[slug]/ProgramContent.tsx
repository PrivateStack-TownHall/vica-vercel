"use client";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";

import ProgramModules from "@/features/programs/components/ProgramModules";

import { Program } from "@/features/programs/types/program.type";

interface ProgramContentProps {
  program: Program;
}

export default function ProgramContent({ program }: ProgramContentProps) {
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
        title={program.title}
        description={program.description ?? ""}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Programs",
            href: "/programs",
          },
          {
            label: program.title,
          },
        ]}
      />

      <section>
        <h2
          className="
            mb-4
            text-2xl
            font-bold
          "
        >
          Modules
        </h2>

        <ProgramModules modules={program.modules ?? []} />
      </section>
    </motion.div>
  );
}
