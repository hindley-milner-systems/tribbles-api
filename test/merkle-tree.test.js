
import test from 'ava';
import { 
  merkleTreeAPI, 
  generateMerkleRoot, 
  generateMerkleProof, 
  generateMerkleTree,
  getMerkleRootFromMerkleProof
} from '../merkle-tree/index.js';

// Sample test data
const testPublicKeys = [
  'pubkey1',
  'pubkey2',
  'pubkey3',
  'pubkey4'
];

test('generateMerkleTree creates a valid tree structure', t => {
  const hashes = testPublicKeys.map(key => merkleTreeAPI.createSha256HexHash(key));
  const tree = generateMerkleTree(hashes);
  
  // Tree should have correct number of levels (log2(n) + 1, rounded up)
  const expectedLevels = Math.ceil(Math.log2(testPublicKeys.length)) + 1;
  t.is(tree.length, expectedLevels);
  
  // First level should contain all original hashes
  t.is(tree[0].length, hashes.length);
  
  // Last level should contain only the root
  t.is(tree[tree.length - 1].length, 1);
});

test('generateMerkleRoot produces consistent results', t => {
  const hashes = testPublicKeys.map(key => merkleTreeAPI.createSha256HexHash(key));
  const root1 = generateMerkleRoot(hashes);
  const root2 = generateMerkleRoot(hashes);
  
  // Same input should produce same root
  t.is(root1, root2);
  
  // Different order should produce different root
  const reversedHashes = [...hashes].reverse();
  const root3 = generateMerkleRoot(reversedHashes);
  t.not(root1, root3);
});

test('generateMerkleProof creates valid proof', t => {
  const hashes = testPublicKeys.map(key => merkleTreeAPI.createSha256HexHash(key));
  const targetHash = hashes[1]; // Second hash
  
  const proof = generateMerkleProof(targetHash, hashes);
  
  // Proof should exist
  t.truthy(proof);
  
  // First element should be the target hash
  t.is(proof[0].hash, targetHash);
  
  // Proof should have correct length (log2(n) + 1, rounded up)
  const expectedProofLength = Math.ceil(Math.log2(hashes.length)) + 1;
  t.is(proof.length, expectedProofLength);
});

test('getMerkleRootFromMerkleProof reconstructs correct root', t => {
  const hashes = testPublicKeys.map(key => merkleTreeAPI.createSha256HexHash(key));
  const originalRoot = generateMerkleRoot(hashes);
  
  // For each hash, verify proof reconstructs the same root
  for (let i = 0; i < hashes.length; i++) {
    const targetHash = hashes[i];
    const proof = generateMerkleProof(targetHash, hashes);
    const reconstructedRoot = getMerkleRootFromMerkleProof(proof);
    
    t.is(reconstructedRoot, originalRoot);
  }
});

test('merkleTreeAPI wrapper functions correctly', t => {
  const root = merkleTreeAPI.generateMerkleRoot(testPublicKeys);
  t.truthy(root);
  
  const tree = merkleTreeAPI.generateMerkleTree(testPublicKeys);
  t.truthy(tree);
  t.true(Array.isArray(tree));
  
  const proof = merkleTreeAPI.generateMerkleProof(testPublicKeys[0], testPublicKeys);
  t.truthy(proof);
});

test('Empty input handling', t => {
  t.is(generateMerkleRoot([]), '');
  t.is(generateMerkleRoot(), '');
  
  t.deepEqual(generateMerkleTree([]), []);
  t.deepEqual(generateMerkleTree(), []);
  
  t.is(generateMerkleProof('hash', []), null);
  t.is(generateMerkleProof(null, []), null);
  
  t.is(getMerkleRootFromMerkleProof([]), '');
  t.is(getMerkleRootFromMerkleProof(null), '');
});
