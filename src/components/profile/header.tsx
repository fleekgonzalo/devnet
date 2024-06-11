import { GithubIcon, TwitterIcon } from "@dynamic-labs/iconic";
import {
  useDynamicContext,
  useSocialAccounts,
} from "@dynamic-labs/sdk-react-core";
import { ProviderEnum } from "@dynamic-labs/types";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user } = useDynamicContext();

  const { isLinked, getLinkedAccountInformation } = useSocialAccounts();

  const isGithubLiken = isLinked(ProviderEnum.Github);
  const githubInfo = getLinkedAccountInformation(ProviderEnum.Github);

  const isTwitter = isLinked(ProviderEnum.Twitter);
  const twitterInfo = getLinkedAccountInformation(ProviderEnum.Twitter);

  return (
    <section className="flex gap-0 items-start self-stretch relative w-full bg-transparent">
      <div className="flex justify-between items-center flex-1 relative w-full bg-transparent">
        <div className="flex gap-4 items-start relative bg-transparent">
          <div
            className={`overflow-hidden rounded-[64px] relative w-32 h-32 bg-[url('https://picsum.photos/id/81/128/128')] bg-cover bg-center`}
          ></div>
          <div className="flex flex-col gap-0 justify-center items-start relative h-32 bg-transparent">
            <div className="flex flex-col gap-0 items-start relative w-[138px] bg-transparent">
              <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
                {user?.username}
              </h4>
            </div>
            <div className="flex flex-col gap-0 items-start relative bg-transparent">
              <p className="leading-6 text-base text-[#637587]">Taiwan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-[10px] flex gap-x-5">
        {isGithubLiken && (
          <Link
            href={`https://github.com/${githubInfo?.username}`}
            className="w-[25px] h-[25px]"
          >
            <GithubIcon />
          </Link>
        )}
        {isTwitter && (
          <Link
            href={`https://twitter.com/${twitterInfo?.username}`}
            className="w-[25px] h-[25px]"
          >
            <TwitterIcon />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Header;
