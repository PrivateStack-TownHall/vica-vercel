export interface Assignment {
   id: string;
   slug: string;

   title: string;

   githubPath: string;

   programSlug: string;
   moduleSlug: string;

   description?: string;

   programTitle?: string;
   moduleTitle?: string;

   createdAt?: string;
   updatedAt?: string;
}