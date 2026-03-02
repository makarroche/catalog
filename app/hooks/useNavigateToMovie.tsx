import { useRouter } from "next/navigation";

export const useNavigateToMovie = () => {
  const router = useRouter();

  const handleNavigate = (id: number) => {
    router.push(`/catalog/${id}`);
  };

  return { handleNavigate };
};
