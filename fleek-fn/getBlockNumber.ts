import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const main = async (params: Fleek.HttpRequest) => {
  const { method, path } = params;

  const block = await client.getBlock();

  return `Block Number ${block.number}`;
};
