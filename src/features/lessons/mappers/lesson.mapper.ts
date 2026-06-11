import { Lesson } from "../types/lesson.type";

function slugify(text: string) {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
}

export function mapLesson(
   item: any,
   programTitle = "",
   moduleTitle = "",
): Lesson {
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