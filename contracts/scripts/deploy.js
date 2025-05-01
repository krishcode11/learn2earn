const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy Learn2EarnToken
  const Learn2EarnToken = await hre.ethers.getContractFactory("Learn2EarnToken");
  const rewardToken = await Learn2EarnToken.deploy(
    "Learn2Earn Token",
    "L2E",
    deployer.address
  );
  await rewardToken.waitForDeployment();
  console.log("Learn2EarnToken deployed to:", await rewardToken.getAddress());

  // Deploy CourseNFT
  const CourseNFT = await hre.ethers.getContractFactory("CourseNFT");
  const courseNFT = await CourseNFT.deploy(
    "Learn2Earn Certificate",
    "L2EC",
    deployer.address
  );
  await courseNFT.waitForDeployment();
  console.log("CourseNFT deployed to:", await courseNFT.getAddress());

  // Deploy RewardManager
  const RewardManager = await hre.ethers.getContractFactory("RewardManager");
  const rewardManager = await RewardManager.deploy(
    await rewardToken.getAddress(),
    await courseNFT.getAddress(),
    deployer.address
  );
  await rewardManager.waitForDeployment();
  console.log("RewardManager deployed to:", await rewardManager.getAddress());

  // Set initial course requirements
  const courseIds = [1, 2, 3]; // Example course IDs
  const requirements = [80, 85, 90]; // Example completion requirements
  const rewardAmounts = [
    hre.ethers.parseEther("100"),
    hre.ethers.parseEther("150"),
    hre.ethers.parseEther("200")
  ];

  for (let i = 0; i < courseIds.length; i++) {
    await rewardManager.setCourseRequirement(courseIds[i], requirements[i]);
    await rewardToken.setCourseReward(courseIds[i], rewardAmounts[i]);
    console.log(`Set requirements for course ${courseIds[i]}`);
  }

  // Verify contracts on Etherscan
  if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
    console.log("Waiting for block confirmations...");
    await rewardToken.deployTransaction.wait(6);
    await courseNFT.deployTransaction.wait(6);
    await rewardManager.deployTransaction.wait(6);

    console.log("Verifying contracts...");
    await hre.run("verify:verify", {
      address: await rewardToken.getAddress(),
      constructorArguments: ["Learn2Earn Token", "L2E", deployer.address],
    });

    await hre.run("verify:verify", {
      address: await courseNFT.getAddress(),
      constructorArguments: ["Learn2Earn Certificate", "L2EC", deployer.address],
    });

    await hre.run("verify:verify", {
      address: await rewardManager.getAddress(),
      constructorArguments: [
        await rewardToken.getAddress(),
        await courseNFT.getAddress(),
        deployer.address,
      ],
    });
  }

  console.log("Deployment completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 