import { getPlansByUserId } from "@/actions/db/plans";
import { getUser } from "@/actions/db/user";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import useSWR from "swr";

const fetcher = async (id: string) => {
  console.log("Fetching user data");
  return await getUser(id);
};

const planFetcher = async (id: string) => {
  console.log("Fetching plan data");
  return await getPlansByUserId(id);
};

export function useCurrentUser() {
  const { user: dynamicUser } = useDynamicContext();
  const { data: user } = useSWR(
    dynamicUser?.userId ? `user/${dynamicUser.userId}` : null,
    () => fetcher(dynamicUser?.userId!)
  );

  const { data: plans } = useSWR(
    dynamicUser?.userId ? `plans/${dynamicUser.userId}` : null,
    () => planFetcher(dynamicUser?.userId!)
  );

  return { user, plans };
}
