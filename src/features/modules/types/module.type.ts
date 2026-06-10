import { Lesson } from "@/features/lessons/types/lesson.type"
import { Assignment } from "@/features/assignments/types/assignment.type"
import { Resource } from "@/features/resources/types/resource.type"

export interface Module {
   id: string;

   slug: string;

   title: string;
   description: string;

   programSlug: string;
   programTitle: string;

   githubPath: string;

   lessons: Lesson[];
   assignments: Assignment[];
   resources: Resource[];

   createdAt: string;
   updatedAt: string;
}