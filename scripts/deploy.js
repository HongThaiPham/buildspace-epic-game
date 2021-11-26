const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["bulbasaur", "charmander", "squirtle", "caterpie"], // Names
    [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", // Images
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    ],
    [100, 200, 300, 150], // HP values
    [100, 50, 25, 70] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");
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
