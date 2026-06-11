"use client";

import { useRouter } from "next/navigation";

import { Folder } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Program } from "../types/program.type";

interface ProgramTableProps {
  programs: Program[];
}

export default function ProgramTable({ programs }: ProgramTableProps) {
  const router = useRouter();

  return (
    <div
      className="
        overflow-hidden
        rounded-md
        border
        border-[#D9E2F2]
        bg-white
        shadow-sm
      "
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F8FAFF] hover:bg-[#F8FAFF]">
            <TableHead className="h-14 font-semibold text-[#0D1B2A]">
              Program
            </TableHead>

            <TableHead className="font-semibold text-[#0D1B2A]">
              Level
            </TableHead>

            <TableHead className="text-center font-semibold text-[#0D1B2A]">
              Modules
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {programs.map((program) => (
            <TableRow
              key={program.id}
              onClick={() => router.push(`/programs/${program.slug}`)}
              className="
                cursor-pointer
                transition-all
                hover:bg-[#EDF2FF]
              "
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Folder size={20} className="text-[#5477A6]" />

                  <div>
                    <p className="font-medium text-[#0D1B2A]">
                      {program.title}
                    </p>

                    <p className="text-xs text-slate-500">Learning Path</p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  className="
                    border-[#5477A6]
                    text-[#5477A6]
                  "
                >
                  {program.level ?? "-"}
                </Badge>
              </TableCell>

              <TableCell className="text-center font-medium">
                {program.modules?.length ?? 0} modules
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
