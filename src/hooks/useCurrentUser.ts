import { getPlans } from "@/actions/contracts/factory";
import { getPlanByContract } from "@/actions/db/plans";
import { getUser } from "@/actions/db/user";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import useSWR from "swr";
import { Address } from "viem";

const fetcher = async (id: string) => {
  return await getUser(id);
};

const planFetcher = async (creator: Address) => {
  const plans = await getPlans(creator);

  const planData = await Promise.all(
    plans.map(async (plan) => {
      const planData = await getPlanByContract(plan);
      return planData;
    })
  );

  return planData;
};

export function useCurrentUser() {
  const { user: dynamicUser } = useDynamicContext();
  const { data: user } = useSWR(
    dynamicUser?.userId ? `user/${dynamicUser.userId}` : null,
    () => fetcher(dynamicUser?.userId!)
  );

  const { data: plans, error } = useSWR(
    dynamicUser?.userId ? `plans/${dynamicUser.userId}` : null,
    () => planFetcher("0xE523084c3809821cb9eA1fB8792664E5CC420012")
  );

  return { user, plans };
}
