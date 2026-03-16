import { useQuery } from "@tanstack/react-query";
import { getContent } from "@/app/actions/services";

const useSanityContent = (types: string, slug?: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["content", types, slug],
    queryFn: () => getContent(types, slug),
  });

  return { data, isLoading, error };
};

export default useSanityContent;
