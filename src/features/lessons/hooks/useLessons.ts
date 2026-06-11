import { useQuery } from "@tanstack/react-query";

import { getLessons } from "../api/lesson.api";

export function useLessons() {
   return useQuery({
      queryKey: ["lessons"],
      queryFn: getLessons,
   });
}