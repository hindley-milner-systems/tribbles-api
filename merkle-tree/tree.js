import accounts from '../data/feb-keys2.js';
import { makeMerkleTreeAPI } from './index.js';

const trace = label => value => {
  console.log(label, '::::', value);
  return value;
};

const defaultPubkeys = accounts.map(x => x.pubkey.key);

const tree = makeMerkleTreeAPI(defaultPubkeys, accounts);

export { defaultPubkeys as pubkeys, makeMerkleTreeAPI };

export default tree;
