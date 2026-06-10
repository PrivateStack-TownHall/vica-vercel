import { Module } from "@/features/modules/types/module.type"

export interface Program {
   id: string;

   slug: string;

   title: string;
   description: string;

   level: string;

   githubPath: string;

   modules: Module[];

   createdAt: string;
   updatedAt: string;
}