// usePlan.tsx
import { getPlanById } from "@/actions/db/plans";
import useSWR from "swr";

const planFetcher = async (id: string) => {
  return await getPlanById(id);
};

export function usePlan(planId: string) {
  const { data: plan, error } = useSWR(
    planId ? `/api/plans/${planId}` : null,
    () => planFetcher(planId)
  );

  return {
    plan,
    isLoading: !error && !plan,
    isError: error,
  };
}
