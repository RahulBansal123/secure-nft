const { create } = require('ipfs-http-client');

const ipfs = create('https://ipfs.infura.io:5001');

async function run() {
  const files = [
    {
      path: '/',
      content: JSON.stringify({
        name: 'SNFT',
        attributes: [
          {
            trait_type: 'rarity',
            value: '100',
          },
          {
            trait_type: 'bored',
            value: '80',
          },
        ],
        image:
          'https://bafkreif3ejr5jisl2ubbeu5k5ii4srj7flhje2jls5dxzsiasud5kwmaza.ipfs.nftstorage.link/',
        description: 'The only secure SNFT that exists with the highest rarity',
      }),
    },
  ];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
