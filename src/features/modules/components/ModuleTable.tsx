"use client";

import { useRouter } from "next/navigation";

import { FolderOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Module } from "../types/module.type";

interface ModuleTableProps {
  modules: Module[];
}

export default function ModuleTable({ modules }: ModuleTableProps) {
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
          <TableRow className="bg-[#F8FAFF] hover:bg-[#F8FAFF]">
            <TableHead>Module</TableHead>

            <TableHead>Program</TableHead>

            <TableHead className="text-center">Lessons</TableHead>

            <TableHead className="text-center">Assignments</TableHead>

            <TableHead className="text-center">Resources</TableHead>

            <TableHead>Updated</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {modules.map((module) => (
            <TableRow
              key={module.id}
              onClick={() => router.push(`/modules/${module.id}`)}
              className="
                cursor-pointer
                transition-all
                hover:bg-[#EDF2FF]
              "
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <FolderOpen size={20} className="text-[#5477A6]" />

                  <div>
                    <p className="font-medium">{module.title}</p>

                    <p className="text-xs text-slate-500">Study Module</p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <Badge variant="outline">{"module.program"}</Badge>
              </TableCell>

              <TableCell className="text-center">
                {module.lessons?.length || 0}
              </TableCell>

              <TableCell className="text-center">
                {module.assignments?.length || 0}
              </TableCell>

              <TableCell className="text-center">
                {module.resources?.length || 0}
              </TableCell>

              <TableCell>{module.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
