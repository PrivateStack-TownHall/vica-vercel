import { useQuery } from "@tanstack/react-query";

import { getLessonMarkdown } from "../api/lesson.api";

export function useLessonMarkdown(
   githubPath: string,
) {
   return useQuery({
      queryKey: [
         "lesson-markdown",
         githubPath,
      ],

      queryFn: () =>
         getLessonMarkdown(githubPath),

      enabled: !!githubPath,
   });
}