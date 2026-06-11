import { Module } from "@/features/modules/types/module.type";

export interface Program {
   id: string;
   slug: string;

   title: string;

   githubPath: string;

   description?: string;
   level?: string;

   modules?: Module[];

   createdAt?: string;
   updatedAt?: string;
}