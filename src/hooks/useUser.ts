// src/hooks/useUser.tsx
import { getUser } from "@/actions/db/user";
import useSWR from "swr";

const userFetcher = async (id: string) => {
  return await getUser(id);
};

export function useUser(id: string) {
  const { data: user, error } = useSWR(id ? `/api/users/${id}` : null, () =>
    userFetcher(id)
  );

  return {
    user,
    isLoading: !error && !user,
    isError: error,
  };
}
