"use client";

import { useRouter } from "next/navigation";

import { Resource } from "../types/resource.type";

import ResourceCard from "./ResourceCard";

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
      "
    >
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description}
          program={resource.programSlug}
          module={resource.moduleSlug}
          type={resource.type}
          size={resource.size}
          onClick={() => router.push(`/resources/${resource.slug}`)}
        />
      ))}
    </div>
  );
}
