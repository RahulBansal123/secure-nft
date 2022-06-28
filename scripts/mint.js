const { PassportReader } = require('@gitcoinco/passport-sdk-reader');
const reader = new PassportReader('https://ceramic-clay.3boxlabs.com', '1');

const users = ['0x92bC0dA159D495d3Ca7081544841EC6BD415eB9E'];
const existingContractAddr = '0x91606B3b2B0b06411e332D9428c234e1fFBFfB82';

async function main() {
  const nft = await hre.ethers.getContractAt('SecureNFT', existingContractAddr);
  const notSent = [];

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  try {
    const tokenURI =
      'https://bafybeifs5payoxkdllpqnpi3arlrrs6rptxj23fn6sa45ekafthbjkawly.ipfs.dweb.link/';

    for (let i = 0; i < users.length; i++) {
      const passport = await reader.getPassport(users[i]);
      if (!passport) {
        console.log(`No passport for ${users[i]}`);
        notSent.push(users[i]);
        continue;
      }
      const res = await nft.reward(friends[i], tokenURI, {
        nonce: nonce + i,
      });
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }

  console.log("NFTs are't sent to these users: ", notSent);

  console.log('Minting is completed');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
