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

   title: string;
   slug: string;

   type: ResourceType;

   size: string;

   program: string;
   module: string;

   createdAt: string;
   updatedAt: string;

   downloadUrl: string;
}