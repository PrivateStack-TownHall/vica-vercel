"use client";

import { useRouter } from "next/navigation";

import { FileCheck } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Assignment } from "../types/assignment.type";

interface AssignmentTableProps {
  assignments: Assignment[];
}

export default function AssignmentTable({ assignments }: AssignmentTableProps) {
  const router = useRouter();

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-white
        shadow-sm
      "
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F8FAFF]">
            <TableHead>Assignment</TableHead>

            <TableHead>Program</TableHead>

            <TableHead>Module</TableHead>

            <TableHead>Created</TableHead>

            <TableHead>Updated</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {assignments.map((assignment) => (
            <TableRow
              key={assignment.id}
              onClick={() => router.push(`/assignments/${assignment.slug}`)}
              className="
                cursor-pointer
                hover:bg-[#EDF2FF]
              "
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <FileCheck size={18} className="text-[#5477A6]" />

                  <div>
                    <p className="font-medium">{assignment.title}</p>

                    <p className="text-xs text-slate-500">
                      Markdown Assignment
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>{"assignment.program"}</TableCell>

              <TableCell>{"assignment.module"}</TableCell>

              <TableCell>{assignment.createdAt}</TableCell>

              <TableCell>{assignment.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
