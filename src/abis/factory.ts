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
    outputs: [{ name: "plan", type: "address", internalType: "address" }],
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
    name: "isPlan",
    inputs: [
      { name: "creator", type: "address", internalType: "address" },
      { name: "plan", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "userToPlans",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "PlanCreated",
    inputs: [
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "name", type: "string", indexed: true, internalType: "string" },
      {
        name: "plan",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "createAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
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
