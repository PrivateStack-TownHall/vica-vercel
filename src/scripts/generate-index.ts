import fs from "fs/promises";
import path from "path";

import dotenv from "dotenv";

dotenv.config({
   path: ".env.local",
});

function slugify(text: string) {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
}

async function generate() {
   const { default: GithubService } = await import(
      "../services/github.service"
   );

   const programs: any[] = [];
   const modules: any[] = [];
   const lessons: any[] = [];
   const assignments: any[] = [];
   const resources: any[] = [];

   const githubPrograms =
      await GithubService.getPrograms();

   const programFolders =
      githubPrograms.filter(
         (item: any) =>
            item.type === "dir",
      );

   for (const program of programFolders) {
      const programSlug = slugify(
         program.name,
      );

      programs.push({
         id: programSlug,
         slug: programSlug,
         title: program.name,
         githubPath: program.path,
      });

      let githubModules: any[] = [];

      try {
         githubModules =
            await GithubService.getModules(
               program.name,
            );
      } catch {
         continue;
      }

      const moduleFolders =
         githubModules.filter(
            (item: any) =>
               item.type === "dir",
         );

      for (const module of moduleFolders) {
         const moduleSlug = `${programSlug}-${slugify(module.name)}`;

         modules.push({
            id: moduleSlug,
            slug: moduleSlug,
            title: module.name,
            programSlug,
            githubPath: module.path,
         });

         try {
            const lessonFolders =
               await GithubService.getLessons(
                  program.name,
                  module.name,
               );

            lessons.push(
               ...lessonFolders
                  .filter(
                     (item: any) =>
                        item.type === "dir",
                  )
                  .map((item: any) => ({
                     id: `${moduleSlug}-${slugify(item.name)}`,
                     slug: `${moduleSlug}-${slugify(item.name)}`,
                     title: item.name,
                     programSlug,
                     moduleSlug,
                     githubPath: item.path,
                  })),
            );
         } catch { }

         try {
            const assignmentFolders =
               await GithubService.getAssignments(
                  program.name,
                  module.name,
               );

            assignments.push(
               ...assignmentFolders
                  .filter(
                     (item: any) =>
                        item.type === "dir",
                  )
                  .map((item: any) => ({
                     id: `${moduleSlug}-${slugify(item.name)}`,
                     slug: `${moduleSlug}-${slugify(item.name)}`,
                     title: item.name,
                     programSlug,
                     moduleSlug,
                     githubPath: item.path,
                  })),
            );
         } catch { }

         try {
            const resourceFiles =
               await GithubService.getResources(
                  program.name,
                  module.name,
               );

            resources.push(
               ...resourceFiles
                  .filter(
                     (item: any) =>
                        item.type === "file",
                  )
                  .map((item: any) => ({
                     id: slugify(item.path),

                     slug: slugify(item.path),

                     title: item.name,

                     programSlug,

                     moduleSlug,

                     githubPath:
                        item.path,

                     downloadUrl:
                        item.download_url,
                  })),
            );
         } catch { }
      }
   }

   const output = {
      programs,
      modules,
      lessons,
      assignments,
      resources,
   };

   const outputDir = path.join(
      process.cwd(),
      "src",
      "data",
   );

   await fs.mkdir(
      outputDir,
      {
         recursive: true,
      },
   );

   const outputPath = path.join(
      outputDir,
      "index.json",
   );

   await fs.writeFile(
      outputPath,
      JSON.stringify(
         output,
         null,
         2,
      ),
   );

   console.log(
      "✅ index.json generated",
   );

   console.log({
      programs:
         programs.length,

      modules:
         modules.length,

      lessons:
         lessons.length,

      assignments:
         assignments.length,

      resources:
         resources.length,
   });
}

generate().catch(console.error);