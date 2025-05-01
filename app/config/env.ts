export const env = {
  // Database
  database: {
    url: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/learn2earn",
  },

  // Authentication
  auth: {
    secret: process.env.NEXTAUTH_SECRET || "your-secret",
    url: process.env.NEXTAUTH_URL || "http://localhost:3000",
  },

  // Blockchain
  blockchain: {
    alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    sepoliaRpcUrl: process.env.SEPOLIA_RPC_URL,
    mainnetRpcUrl: process.env.MAINNET_RPC_URL,
    privateKey: process.env.PRIVATE_KEY,
    etherscanApiKey: process.env.ETHERSCAN_API_KEY,
  },

  // IPFS
  ipfs: {
    projectId: process.env.NEXT_PUBLIC_IPFS_PROJECT_ID,
    projectSecret: process.env.NEXT_PUBLIC_IPFS_PROJECT_SECRET,
  },

  // API Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"),
  },

  // Email
  email: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM || "noreply@example.com",
  },

  // Analytics
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    mixpanelToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
  },

  // Feature Flags
  features: {
    enableWhitelabel: process.env.ENABLE_WHITELABEL === "true",
    enableCorporateTraining: process.env.ENABLE_CORPORATE_TRAINING === "true",
    enableApiAccess: process.env.ENABLE_API_ACCESS === "true",
  },
} as const;

// Type for environment variables
export type Env = typeof env;

// Validate required environment variables
export function validateEnv() {
  const requiredVars = [
    "DATABASE_URL",
    "NEXTAUTH_SECRET",
    "NEXT_PUBLIC_ALCHEMY_API_KEY",
    "NEXT_PUBLIC_CONTRACT_ADDRESS",
  ];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
} 