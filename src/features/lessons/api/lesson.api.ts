import { data } from "@/lib/data";

import GithubService from "@/services/github.service";

export async function getLessons() {
   return data.lessons;
}

export async function getLessonMarkdown(
   githubPath: string,
) {
   return GithubService.getMarkdown(
      `${githubPath}/README.md`,
   );
}