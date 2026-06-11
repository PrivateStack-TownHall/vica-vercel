import { useQuery } from "@tanstack/react-query";

import { getModules } from "../api/module.api";

export function useModules() {
  return useQuery({
    queryKey: ["modules"],

    queryFn: getModules,
  });
}
