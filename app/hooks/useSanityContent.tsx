
import { useQuery } from "@tanstack/react-query";
import { getContent } from "@/app/actions/services";


const useSanityContent = (types: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["content", types],
    queryFn: () => getContent(types), 
  });

  return { data, isLoading, error };
};

export default useSanityContent;