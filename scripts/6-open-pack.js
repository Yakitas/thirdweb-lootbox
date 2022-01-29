import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x68b57B85606aCd6b59246cEF222373e48f201617';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}