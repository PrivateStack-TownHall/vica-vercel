import { notFound } from "next/navigation";

import LessonContent from "./LessonContent";

import { getLessons } from "@/features/lessons/api/lesson.api";
import { getLessonMarkdown } from "@/features/lessons/api/lesson.api";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;

  const lessons = await getLessons();
  const lesson = lessons[0];
  const markdown = await getLessonMarkdown(lesson.githubPath);
  return <LessonContent lesson={lesson} markdown={markdown} />;
}
