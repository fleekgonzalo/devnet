export const FACTORY_ABI = [
  {
    type: "function",
    name: "_getBytecode",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
      { name: "totalSupply", type: "uint256", internalType: "uint256" },
      { name: "mintPrice_", type: "uint256", internalType: "uint256" },
      { name: "period_", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "createPlan",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
      { name: "totalSupply", type: "uint256", internalType: "uint256" },
      { name: "mintPrice_", type: "uint256", internalType: "uint256" },
      { name: "period_", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getPlans",
    inputs: [{ name: "creator", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerToProduct",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  { type: "error", name: "Create2EmptyBytecode", inputs: [] },
  { type: "error", name: "Create2FailedDeployment", inputs: [] },
  {
    type: "error",
    name: "Create2InsufficientBalance",
    inputs: [
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
] as const;
