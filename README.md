# 💡 Learn2Earn Full Stack Web3 DApp 🚀

This is a complete plug-n-play **Learn2Earn Web3 DApp** built with:
- ✅ Smart Contracts (Hardhat + Solidity)
- ✅ Fullstack App (Next.js + Prisma + API)
- ✅ Multichain Support (EVM compatible)
- ✅ Reward system for learners via blockchain
- ✅ Easily deployable to any EVM chain (Polygon, Base, Sepolia, etc.)

---
[learn2Earn Demo](https://prnt.sc/AMt8QVdqfyqb)

## 📆 Project Structure

```
learn2earn-dapp/
├── contracts/              # Hardhat project for smart contracts
│   ├── contracts/          # .sol files
│   ├── scripts/            # Deployment scripts
│   ├── hardhat.config.ts
│   └── package.json        # Hardhat, ethers
│
├── learn2earn/             # Fullstack frontend/backend (Next.js)
│   ├── app/ or pages/      # Frontend UI
│   ├── api/                # API routes
│   ├── lib/                # ABI, contract address
│   ├── prisma/             # Schema, DB
│   └── package.json
│
└── README.md               # 📍 You're here!
```

---

## ✨ Features

- 📚 Learn2Earn Model: Complete flow for users to learn → earn crypto
- 🔐 Smart Contracts: Secure Solidity contracts
- 🌐 Next.js: Web frontend + API backend
- 📍 Prisma: Database integration ( MongoDB, SQLite, PostgreSQL or PlanetScale)
- 🛄 Deployable to: **Ethereum, Polygon, Base, Sepolia, BNB Chain, Optimism, Arbitrum, etc.**

![Learn2Earn Demo](https://prnt.sc/uL0PEinlKcec)
![Learn2Earn Demo](https://prnt.sc/dV7hVYQ7D9FZ)
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/krishcode11/learn.git
cd learn2earn
```

---

### 2. Setup & Deploy Smart Contracts

```bash
cd contracts
npm install
```

#### Fill `.env` in `contracts/`:

```env
PRIVATE_KEY=your_private_key
INFURA_API_KEY=your_infura_key
MONGODB/DATABASE_URL=your_database_url
```

#### Compile & Deploy:

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network sepolia or your fav EVM chain
```

After deploy, copy the **contract address** and **ABI** to:

```ts
// learn2earn/lib/contracts.ts
export const CONTRACT_ADDRESS = "0x...";
export const ABI = [...];
```

✅ Done! Now your frontend can connect to the deployed contract.

---

### 3. Setup Fullstack App (Frontend + Backend + DB)

```bash
cd ../learn2earn
npm install
```

#### Fill `.env` in `learn2earn/`:

```env
MONGODB/DATABASE_URL=your_database_url
NEXT_PUBLIC_CONTRACT_ADDRESS="0x..."
NEXT_PUBLIC_CHAIN_ID="11155111" # (Sepolia in this case)
```

#### Init DB:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 4. Run the App 🚀

```bash
npm run dev
```

Open in browser: [http://localhost:3000](http://localhost:3000)

---

## 📱 Supported Chains

| Chain     | Network ID  | RPC Required? |
|-----------|-------------|---------------|
| Polygon   | 137         | Yes           |
| Sepolia   | 11155111    | Yes           |
| Base      | 8453        | Yes           |
| Optimism  | 10          | Yes           |
| Arbitrum  | 42161       | Yes           |
| Ethereum  | 1           | Yes           |

Add your RPC + Private Key in `.env` to deploy accordingly.

---
![Learn2Earn Demo](https://prnt.sc/TG4TL0V1aHU3)

## 🛠️ Customization

- You can easily update the **contract logic** inside `/contracts/contracts/`
- All rewards & logic are modular
- Full support for Learn2Earn, Proof-of-Knowledge, Quiz-based systems, etc.
- Add your own ERC20 reward token 

---

## 🦾 License

This DApp is licensed under [MIT] or [Commercial License] (based on your sale model).  
Buyers can deploy and customize it on their chain.

![Learn2Earn Demo](https://prnt.sc/zyvWMyIUGkcZ)

---

## 🧐 Questions?

Contact us on [Telegram] or [Twitter] or [Email].

---

## ✅ Final Notes

- You MUST deploy your own contract to your desired EVM chain before using frontend
- This project includes smart contracts and frontend/backend — all ready to sell or use
- Ideal for: Developers, Founders, Educators, NFT Projects, Web3 Communities

---

Built with 💜 by OmniRadhaNexus

Support me : https://buymeacoffee.com/omniradhanexus
