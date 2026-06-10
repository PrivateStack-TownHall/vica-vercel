import fs from "fs/promises";
import path from "path";

import { notFound } from "next/navigation";

import LessonContent from "./LessonContent";

import { LESSONS } from "@/features/lessons/constants/lessons.constants";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return LESSONS.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;

  const lesson = LESSONS.find((item) => item.slug === slug);

  if (!lesson) {
    notFound();
  }

  const markdownPath = path.join(
    process.cwd(),
    "src",
    "contents",
    "lessons",
    slug,
    "README.md",
  );

  const markdown = await fs.readFile(markdownPath, "utf8");

  return <LessonContent lesson={lesson} markdown={markdown} />;
}
