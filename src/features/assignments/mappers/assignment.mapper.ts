import { Assignment } from "../types/assignment.type";

function slugify(text: string) {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
}

export function mapAssignment(
   item: any,
   programTitle = "",
   moduleTitle = "",
): Assignment {
   const slug = `${slugify(programTitle)}-${slugify(moduleTitle)}-${slugify(item.name)}`;

   return {
      id: slug,
      slug,
      title: item.name,
      githubPath: item.path,
      programSlug: slugify(programTitle),
      moduleSlug: slugify(moduleTitle),
      programTitle,
      moduleTitle,
      description: "",
      createdAt: "",
      updatedAt: "",
   };
}