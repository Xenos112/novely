import { sources } from "@/sources/plugins";
import type { Novel } from "@/types/source";
import { useQuery } from "@tanstack/react-query";
import type { Sources } from "@/sources";

export default function useNovelQuery(sourceName: Sources, id: string) {
	return useQuery({
		queryKey: ["novel", sourceName, id],
		queryFn: async () => {
			const source = new sources[sourceName]();
			const novel = (await source.fetchNovelInfo(id)) as Novel;

			return novel;
		}
	});
}
