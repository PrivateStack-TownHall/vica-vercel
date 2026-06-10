"use client";

import { useRouter } from "next/navigation";

import { Module } from "../types/module.type";

import ModuleFolderCard from "./ModuleFolderCard";

interface ModuleGridProps {
  modules: Module[];
}

export default function ModuleGrid({ modules }: ModuleGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {modules.map((module) => (
        <ModuleFolderCard
          key={module.id}
          title={module.title}
          program={"module.program"}
          lessons={module.lessons.length}
          assignments={module.assignments.length}
          resources={module.resources.length}
          onClick={() => router.push(`/modules/${module.slug}`)}
        />
      ))}
    </div>
  );
}
