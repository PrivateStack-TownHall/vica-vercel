import { Module } from "../types/module.type";

function slugify(text: string) {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
}

export function mapModule(
   item: any,
   programSlug: string,
   programTitle: string,
): Module {
   return {
      id: `${programSlug}-${slugify(item.name)}`,
      slug: `${programSlug}-${slugify(item.name)}`,
      title: item.name,
      description: "",
      githubPath: item.path,
      programSlug,
      programTitle,
      lessons: [],
      assignments: [],
      resources: [],
      createdAt: "",
      updatedAt: "",
   };
}