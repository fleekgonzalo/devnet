import useSWR from "swr";
import { getPlanById } from "../actions/db/plans";
import { Plan } from "@prisma/client";

const fetchPlan = async (planId: string) => {
  const plan = await getPlanById(planId);
  if (!plan) throw new Error(`Plan with ID ${planId} not found`);

  return plan;
};

const usePlans = (planIds: string[] = []) => {
  const { data } = useSWR<Plan[]>(planIds.length > 0 ? planIds : null, {
    fetcher: async (ids: string[]) => {
      const fetchPromises = ids.map((id) => fetchPlan(id));
      return await Promise.all(fetchPromises);
    },
  });

  return {
    plans: data,
  };
};

export default usePlans;
