import { notFound } from "next/navigation";

import ProgramContent from "./ProgramContent";

import { getPrograms } from "@/features/programs/api/program.api";

import { data } from "@/lib/data";

interface ProgramDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params;

  const programs = await getPrograms();

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  const modules = data.modules.filter((module) => module.programSlug === slug);

  return (
    <ProgramContent
      program={{
        ...program,
        modules,
      }}
    />
  );
}
