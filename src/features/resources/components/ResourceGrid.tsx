"use client";

import { Resource } from "../types/resource.type";

import ResourceCard from "./ResourceCard";

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
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
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </div>
  );
}
