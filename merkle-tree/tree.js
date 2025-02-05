import accounts from '../data/1k-keys.js';
import { makeMerkleTreeAPI } from './index.js';

const trace = label => value => {
  console.log(label, '::::', value);
  return value;
};

const defaultPubkeys = accounts.map(x => x.pubkey.key);

export default makeMerkleTreeAPI(defaultPubkeys, accounts);

export { defaultPubkeys as pubkeys, makeMerkleTreeAPI };
