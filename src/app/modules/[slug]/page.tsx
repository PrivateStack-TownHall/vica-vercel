import { notFound } from "next/navigation";

import ModuleContent from "./ModuleContent";

import GithubService from "@/services/github.service";

import { mapModule } from "@/features/modules/mappers/module.mapper";

import { mapLesson } from "@/features/lessons/mappers/lesson.mapper";
import { mapAssignment } from "@/features/assignments/mappers/assignment.mapper";
import { mapResource } from "@/features/resources/mappers/resource.mapper";

import slugify from "@/utils/slugify";

interface ModuleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModuleDetailPage({
  params,
}: ModuleDetailPageProps) {
  const { slug } = await params;

  const programs = await GithubService.getPrograms();

  let selectedModule = null;

  for (const program of programs) {
    const modules = await GithubService.getModules(program.name);

    const found = modules.find(
      (module: any) =>
        `${slugify(program.name)}-${slugify(module.name)}` === slug,
    );

    if (!found) {
      continue;
    }

    const moduleData = mapModule(found, slugify(program.name), program.name);

    try {
      const lessons = await GithubService.getLessons(program.name, found.name);

      moduleData.lessons = Array.isArray(lessons)
        ? lessons
            .filter((item: any) => item.type === "dir")
            .map((item: any) => mapLesson(item, program.name, found.name))
        : [];

      console.log("LESSONS");
      console.log(lessons);
    } catch {
      moduleData.lessons = [];
    }

    try {
      const assignments = await GithubService.getAssignments(
        program.name,
        found.name,
      );

      moduleData.assignments = Array.isArray(assignments)
        ? assignments
            .filter((item: any) => item.type === "dir")
            .map((item: any) => mapAssignment(item, program.name, found.name))
        : [];

      console.log("ASSIGNMENTS");
      console.log(assignments);
    } catch {
      moduleData.assignments = [];
    }

    try {
      const resources = await GithubService.getResources(
        program.name,
        found.name,
      );

      moduleData.resources = Array.isArray(resources)
        ? resources
            .filter((item: any) => item.type !== "dir")
            .map((item: any) => mapResource(item))
        : [];
      console.log("RESOURCES");
      console.log(resources);
    } catch {
      moduleData.resources = [];
    }

    selectedModule = moduleData;

    break;
  }

  if (!selectedModule) {
    notFound();
  }

  return <ModuleContent module={selectedModule} />;
}
