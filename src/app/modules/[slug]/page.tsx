import { notFound } from "next/navigation";

import ModuleContent from "./ModuleContent";

import { MODULES } from "@/features/modules/constants/modules.constants";

interface ModuleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModuleDetailPage({
  params,
}: ModuleDetailPageProps) {
  const { slug } = await params;

  const module = MODULES.find((item) => item.slug === slug);

  if (!module) {
    notFound();
  }

  return <ModuleContent module={module} />;
}
