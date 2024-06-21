import { getCreatorPlans } from "@/actions/contracts/router";
import { getPlanByContract } from "@/actions/db/plans";
import { getUser } from "@/actions/db/user";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import useSWR from "swr";
import { Address } from "viem";
import { useAccount } from "wagmi";

const fetcher = async (id: string) => {
  return await getUser(id);
};

const planFetcher = async (creator: Address) => {
  const plans = await getCreatorPlans(creator);

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
  const account = useAccount();

  const { data: user } = useSWR(
    dynamicUser?.userId ? `user/${dynamicUser.userId}` : null,
    () => fetcher(dynamicUser?.userId!)
  );

  const { data: plans, error } = useSWR(
    dynamicUser?.userId ? `plans/${dynamicUser.userId}` : null,
    () => planFetcher(account.address!)
  );

  return { user, plans };
}
