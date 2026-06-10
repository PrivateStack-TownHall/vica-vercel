import { notFound } from "next/navigation";

import ResourceContent from "./ResourceContent";

import { RESOURCES } from "@/features/resources/constants/resources.constants";

interface ResourceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return RESOURCES.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function ResourceDetailPage({
  params,
}: ResourceDetailPageProps) {
  const { slug } = await params;

  const resource = RESOURCES.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return <ResourceContent resource={resource} />;
}
