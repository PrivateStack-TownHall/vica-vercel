export interface Module {
   id: string;
   slug: string;

   title: string;

   githubPath: string;

   programSlug: string;

   description?: string;
   programTitle?: string;

   lessons?: any[];
   assignments?: any[];
   resources?: any[];

   createdAt?: string;
   updatedAt?: string;
}