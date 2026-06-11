import { useQuery } from "@tanstack/react-query";

import { getAssignmentMarkdown } from "../api/assignment.api";

export function useAssignmentMarkdown(
   githubPath: string,
) {
   return useQuery({
      queryKey: [
         "assignment-markdown",
         githubPath,
      ],

      queryFn: () =>
         getAssignmentMarkdown(
            githubPath,
         ),

      enabled: !!githubPath,
   });
}