// app/resources/[slug]/page.tsx

import { notFound } from "next/navigation";

import ResourceContent from "./ResourceContent";

import { getResources } from "@/features/resources/api/resource.api";

interface ResourceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ResourceDetailPage({
  params,
}: ResourceDetailPageProps) {
  const { slug } = await params;

  const resources = await getResources();

  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return <ResourceContent resource={resource} />;
}
