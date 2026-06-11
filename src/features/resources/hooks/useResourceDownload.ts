import { useQuery } from "@tanstack/react-query";

import { getResources } from "../api/resource.api";

export function useResourceDownload(
   resourceSlug: string,
) {
   return useQuery({
      queryKey: [
         "resource-download",
         resourceSlug,
      ],

      queryFn: async () => {
         const resources =
            await getResources();

         const resource =
            resources.find(
               (item) =>
                  item.slug ===
                  resourceSlug,
            );

         return (
            resource?.downloadUrl ||
            ""
         );
      },

      enabled: !!resourceSlug,
   });
}