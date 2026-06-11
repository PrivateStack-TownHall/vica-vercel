// features/resources/mappers/resource.mapper.ts

import {
   Resource,
   ResourceType,
} from "../types/resource.type";

function slugify(text: string) {
   return text
      .toLowerCase()
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
}

export function mapResource(
   item: any,
   programSlug = "",
   moduleSlug = "",
): Resource {
   const extension =
      item.name
         .split(".")
         .pop()
         ?.toLowerCase() || "pdf";

   return {
      id: slugify(item.name),

      slug: slugify(item.name),

      title: item.name,

      description: "",

      type: extension as ResourceType,

      size: item.size
         ? `${(
            item.size / 1024
         ).toFixed(2)} KB`
         : "0 KB",

      programSlug,

      moduleSlug,

      githubPath: item.path,

      downloadUrl:
         item.download_url,

      createdAt: "",

      updatedAt: "",
   };
}