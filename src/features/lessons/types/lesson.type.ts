// features/lessons/types/lesson.type.ts

export interface Lesson {
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