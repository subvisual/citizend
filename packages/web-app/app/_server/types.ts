import type { SignerSupplier } from '@kwilteam/kwil-js/dist/core/builders.d';

export interface KwilSigner {
  signer: SignerSupplier;
  publicKey: string;
  signatureType: string;
}

export interface Grant {
  content: string;
  encryption_public_key: string;
}

export interface PublicInfo {
  grantee: string;
  encryptionPublicKey: string;
  lockTimeSpanSeconds: number;
}

export type TProjectPublicInfo = {
  id: string;
  address: string;
  publicKey: string;
};

export type TProjectsPublicInfo = {
  [key: string]: TProjectPublicInfo;
};

export type TInternalError = {
  error: string;
};
