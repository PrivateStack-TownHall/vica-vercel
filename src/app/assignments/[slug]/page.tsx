import { notFound } from "next/navigation";

import AssignmentContent from "./AssignmentContent";

import {
  getAssignments,
  getAssignmentMarkdown,
} from "@/features/assignments/api/assignment.api";

interface AssignmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  const { slug } = await params;

  const assignments = await getAssignments();

  const assignment = assignments.find((item) => item.slug === slug);

  if (!assignment) {
    notFound();
  }

  const markdown = await getAssignmentMarkdown(assignment.githubPath);

  return <AssignmentContent assignment={assignment} markdown={markdown} />;
}
