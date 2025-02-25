import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  const bundleModuleAddress = '0xDB1FEE44be6Af043f35b796DD28d9a4AfFe70AA4'; // your bundle module address
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = '0x68b57B85606aCd6b59246cEF222373e48f201617'; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Getting all NFTs from bundle...');
  const nftsInBundle = await bundleModule.getAll();

  console.log('NFTs in bundle:');
  console.log(nftsInBundle);

  console.log('Creating a pack containing the NFTs from bundle...');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Katt Profileurs Pack!',
      image: readFileSync('./assets/kattt.png'),
    },
    assets: nftsInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log('Pack created!')
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}