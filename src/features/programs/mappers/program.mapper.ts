import { Program } from "../types/program.type";

function slugify(text: string) {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
}

export function mapProgram(
   item: any,
): Program {
   return {
      id: slugify(item.name),
      slug: slugify(item.name),
      title: item.name,
      githubPath: item.path,
      description: "",
      level: "",
      modules: [],
      createdAt: "",
      updatedAt: "",
   };
}