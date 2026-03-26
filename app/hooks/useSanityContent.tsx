import { useQuery } from "@tanstack/react-query";
import { getContent } from "@/app/actions/services";

const useSanityContent = (types: string, slug?: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["content", types, slug],
    queryFn: () => getContent(types, slug),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  return { data, isLoading, error };
};

export default useSanityContent;
