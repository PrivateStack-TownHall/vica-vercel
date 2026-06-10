"use client";

import { useRouter } from "next/navigation";

import { FolderOpen } from "lucide-react";

interface ProgramModule {
  id: string;
  title: string;
  slug: string;
}

interface ProgramModulesProps {
  modules: ProgramModule[];
}

export default function ProgramModules({ modules }: ProgramModulesProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {modules.map((module) => (
        <div
          key={module.id}
          onClick={() => router.push(`/modules/${module.slug}`)}
          className="
            cursor-pointer
            rounded-xl
            p-3
            transition-all
            hover:bg-[#EDF2FF]
          "
        >
          <FolderOpen size={64} className="mb-2 text-[#5477A6]" />

          <p className="text-sm font-medium">{module.title}</p>
        </div>
      ))}
    </div>
  );
}
