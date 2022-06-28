async function main() {
  const SecureNFT = await hre.ethers.getContractFactory('SecureNFT');
  const nft = await SecureNFT.deploy();

  await nft.deployed();

  console.log('SecureNFT deployed to:', nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
