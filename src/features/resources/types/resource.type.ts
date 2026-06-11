export type ResourceType =
   | "pdf"
   | "ppt"
   | "zip"
   | "png"
   | "jpg"
   | "docx"
   | "xlsx"
   | "figma"
   | "starter-project";

export interface Resource {
   id: string;
   slug: string;

   title: string;
   description: string;

   type: ResourceType;

   size: string;

   programSlug: string;
   moduleSlug: string;

   githubPath: string;

   downloadUrl?: string;

   createdAt: string;
   updatedAt: string;
}