import { useQuery } from "@tanstack/react-query";

import { getAssignments } from "../api/assignment.api";

export function useAssignments() {
   return useQuery({
      queryKey: ["assignments"],
      queryFn: getAssignments,
   });
}