import { getUser } from "@/actions/user";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";

//TODO get more user info

export function useUser() {
  const { user } = useDynamicContext();
  const [about, setAbout] = useState<string>("");

  const _getUser = async () => {
    if (user?.userId) {
      const _user = await getUser(user.userId);
      setAbout(_user.description || "No description provided yet.");
    }
  };

  useEffect(() => {
    _getUser();
  }, [user]);

  return { about };
}
