"use client";

import { useRouter } from "next/navigation";

import { BookOpen } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Lesson } from "../types/lesson.type";

interface LessonTableProps {
  lessons: Lesson[];
}

export default function LessonTable({ lessons }: LessonTableProps) {
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
            <TableHead>Lesson</TableHead>

            <TableHead>Program</TableHead>

            <TableHead>Module</TableHead>

            <TableHead>Created</TableHead>

            <TableHead>Updated</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {lessons.map((lesson) => (
            <TableRow
              key={lesson.id}
              onClick={() => router.push(`/lessons/${lesson.slug}`)}
              className="
                cursor-pointer
                hover:bg-[#EDF2FF]
              "
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-[#5477A6]" />

                  <div>
                    <p className="font-medium">{lesson.title}</p>

                    <p className="text-xs text-slate-500">Markdown Lesson</p>
                  </div>
                </div>
              </TableCell>

              <TableCell>{lesson.program}</TableCell>

              <TableCell>{lesson.module}</TableCell>

              <TableCell>{lesson.createdAt}</TableCell>

              <TableCell>{lesson.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
