const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["bulbasaur", "charmander", "squirtle", "caterpie"], // Names
    [
      "QmTH9DZ21D2rDpQcd459fufTCp9ENPqtkxWov5bA6d957N", // Images
      "QmaS83WvaooGAts4BWp6hAgyQHa8QYkuqsGPx2DYiP77or",
      "QmXj79aXjVHHQzJooMg2BAnuVSuvhSrRcNWcSJstBtGNmD",
      "QmX8ET9QZ3rXNvx7wT9NjDP99DnBQoYguRXzyR82CCDh1t",
    ],
    [100, 200, 300, 150], // HP values
    [100, 50, 25, 70], // Attack damage values
    "Elon Musk", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // let txn;
  // // We only have three characters.
  // // an NFT w/ the character at index 2 of our array.
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // console.log("Done!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
