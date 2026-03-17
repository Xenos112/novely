import { useQuery } from "@tanstack/react-query";
import { sources } from "@/sources/plugins";
import { Sources } from "@/sources";
import { AbstactNovel } from "@/types/source";

export function usePopularQuery(sourceName: Sources, page: number) {
  return useQuery({
    queryKey: ["popular", page],
    queryFn: () => {
      const source = new sources[sourceName]();
      return source.fetchPopular(page) as Promise<AbstactNovel[]>;
    },
  });
}
