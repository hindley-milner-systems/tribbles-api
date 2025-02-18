import fs from 'fs/promises';
import path from 'path';
import os from 'os';
// import TEST_ACCOUNTS, { tree } from './1k-keys.js';
import { makeMerkleTreeAPI } from '../merkle-tree/tree.js';
import TEST_ACCOUNTS from './demo-keys.js';

const tree = makeMerkleTreeAPI(
  TEST_ACCOUNTS.map(x => x.pubkey.key),
  TEST_ACCOUNTS,
);

const accountsWithProofs = TEST_ACCOUNTS.map(x => ({
  ...x,
  proof: tree.constructProof(x.pubkey.key),
  tier: Math.floor(Math.random() * 5),
}));

// Write proofs to Agoric SDK directory
const writeProofsToAgoricSDK = async () => {
  const agoricPath = path.join(
    os.homedir(),
    'agoric-sdk',
    'packages',
    'agoric-cli',
  );
  const outputPath = path.join(agoricPath, 'with-proofs.json');

  try {
    await fs.writeFile(outputPath, JSON.stringify(accountsWithProofs, null, 2));
    console.log(`Successfully wrote proofs to ${outputPath}`);
  } catch (error) {
    console.error('Error writing proofs:', error);
    process.exit(1);
  }
};

// Execute the write operation
await writeProofsToAgoricSDK();

export { tree };
export default TEST_ACCOUNTS;
