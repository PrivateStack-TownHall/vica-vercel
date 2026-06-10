"use client";

import { useRouter } from "next/navigation";

import { Lesson } from "../types/lesson.type";

import LessonCard from "./LessonCard";

interface LessonGridProps {
  lessons: Lesson[];
}

export default function LessonGrid({ lessons }: LessonGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-2
        xl:grid-cols-6
      "
    >
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          description={lesson.description}
          program={"lesson.program"}
          module={"lesson.module"}
          createdAt={lesson.createdAt}
          onClick={() => router.push(`/lessons/${lesson.slug}`)}
        />
      ))}
    </div>
  );
}
