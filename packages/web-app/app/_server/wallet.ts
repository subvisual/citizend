import { hexToBytes } from 'viem';
import nacl from 'tweetnacl';
import { ethers } from 'ethers';
import * as Base64Codec from '@stablelib/base64';

const ENCRYPTION_SECRET_KEY = hexToBytes(
  process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY,
);

const EVM_GRANTEE_PRIVATE_KEY = process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY;
const ENCRYPTION_KEY_PAIR = nacl.box.keyPair.fromSecretKey(
  ENCRYPTION_SECRET_KEY,
);

const EVM_NODE_URL = process.env.NEXT_PUBLIC_ENABLE_TESTNETS
  ? process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA
  : process.env.NEXT_PUBLIC_ALCHEMY_MAINNET;

const evmGrantee = new ethers.Wallet(
  EVM_GRANTEE_PRIVATE_KEY,
  new ethers.JsonRpcProvider(EVM_NODE_URL),
);

const evmGranteePublicKey = Base64Codec.encode(ENCRYPTION_KEY_PAIR.publicKey);

export { evmGrantee, ENCRYPTION_KEY_PAIR, evmGranteePublicKey };
