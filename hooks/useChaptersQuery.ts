import { Sources } from "@/sources";
import { sources } from "@/sources/plugins";
import { Chapter } from "@/types/source";
import { useQuery } from "@tanstack/react-query";

export default function useChaptersQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ["chapters", sourceName, id],
    queryFn: async () => {
      const source = new sources[sourceName]();
      return source.fetchChapters(id) as Promise<Chapter[]>;
    },
  });
}
