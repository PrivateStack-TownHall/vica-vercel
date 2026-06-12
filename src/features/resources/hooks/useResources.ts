import { useQuery } from "@tanstack/react-query";

import { getResources } from "../api/resource.api";

export function useResources() {
   return useQuery({
      queryKey: ["resources"],
      queryFn: getResources,
   });
}