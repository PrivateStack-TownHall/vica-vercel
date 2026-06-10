import { notFound } from "next/navigation";

import ProgramContent from "./ProgramContent";

import { PROGRAMS } from "@/features/programs/constants/programs.constants";

interface ProgramDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params;

  const program = PROGRAMS.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramContent program={program} />;
}
