import { getUser } from "@/actions/user";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";

type User = {
  id: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export function useUser() {
  const { user: dynamicUser } = useDynamicContext();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const _getUser = async () => {
      if (dynamicUser?.userId) {
        const _user = await getUser(dynamicUser.userId);
        setUser(_user);
      }
    };

    _getUser();
  }, [dynamicUser]);

  return { user };
}
