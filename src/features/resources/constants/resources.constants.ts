import { Resource } from "../types/resource.type";

export const RESOURCES: Resource[] = [
   {
      id: "resource-001",
      title: "System Architecture",
      slug: "system-architecture",
      description:
         "Architecture diagram used throughout the course materials.",
      type: "jpg",
      size: "1.2 MB",
      githubPath:
         "contents/resources/1.jpg",
      downloadUrl:
         "/contents/resources/1.jpg",
      createdAt: "2026-01-20",
      updatedAt: "2026-01-22",
   },
   {
      id: "resource-002",
      title: "Course Handbook",
      slug: "course-handbook",
      description:
         "Official handbook containing course notes and references.",
      type: "pdf",
      size: "3.8 MB",
      githubPath:
         "contents/resources/1.pdf",
      downloadUrl:
         "/contents/resources/1.pdf",
      createdAt: "2026-01-21",
      updatedAt: "2026-01-23",
   },
];