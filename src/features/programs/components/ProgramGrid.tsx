"use client";

import { useRouter } from "next/navigation";

import ProgramFolderCard from "./ProgramFolderCard";

interface Program {
  id: string;
  title: string;
}

interface ProgramGridProps {
  programs: Program[];
}

export default function ProgramGrid({ programs }: ProgramGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-6
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {programs.map((program) => (
        <ProgramFolderCard
          key={program.id}
          title={program.title}
          onClick={() => router.push(`/programs/${program.id}`)}
        />
      ))}
    </div>
  );
}
