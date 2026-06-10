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
   description: string;
   title: string;
   type: ResourceType;
   size: string;
   githubPath: string;
   downloadUrl?: string;
   createdAt: string;
   updatedAt: string;
}