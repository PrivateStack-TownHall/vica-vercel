import fs from "fs/promises";
import path from "path";

import { notFound } from "next/navigation";

import AssignmentContent from "./AssignmentContent";

import { ASSIGNMENTS } from "@/features/assignments/constants/assignments.constants";

interface AssignmentDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ASSIGNMENTS.map((assignment) => ({
    slug: assignment.slug,
  }));
}

export default async function AssignmentDetailPage({
  params,
}: AssignmentDetailPageProps) {
  const { slug } = await params;

  const assignment = ASSIGNMENTS.find((item) => item.slug === slug);

  if (!assignment) {
    notFound();
  }

  const markdownPath = path.join(
    process.cwd(),
    "src",
    "contents",
    "assignments",
    slug,
    "README.md",
  );

  const markdown = await fs.readFile(markdownPath, "utf8");

  return <AssignmentContent assignment={assignment} markdown={markdown} />;
}
