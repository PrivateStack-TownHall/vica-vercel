"use client";

import { useRouter } from "next/navigation";

import { Assignment } from "../types/assignment.type";

import AssignmentCard from "./AssignmentCard";

interface AssignmentGridProps {
  assignments: Assignment[];
}

export default function AssignmentGrid({ assignments }: AssignmentGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
      "
    >
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          title={assignment.title}
          program={assignment.program}
          module={assignment.module}
          onClick={() => router.push(`/assignments/${assignment.slug}`)}
        />
      ))}
    </div>
  );
}
