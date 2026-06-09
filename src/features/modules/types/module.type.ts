export interface Module {
   id: string;

   title: string;
   slug: string;

   program: string;

   lessons: number;
   assignments: number;
   resources: number;

   createdAt: string;
   updatedAt: string;
}