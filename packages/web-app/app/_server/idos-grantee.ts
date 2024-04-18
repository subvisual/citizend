import { KwilSigner, NodeKwil } from '@kwilteam/kwil-js';
import * as Base64Codec from '@stablelib/base64';
import * as Utf8Codec from '@stablelib/utf8';
import { ethers } from 'ethers';
import nacl from 'tweetnacl';
import { decodeBase58, toBeHex } from 'ethers';

export function implicitAddressFromPublicKey(publicKey: string) {
  const key_without_prefix = publicKey.replace(/^ed25519:/, '');
  const implicitAddress = toBeHex(decodeBase58(key_without_prefix));
  return implicitAddress;
}

export class NoncedBox {
  keyPair: nacl.BoxKeyPair;

  constructor(keyPair: nacl.BoxKeyPair) {
    this.keyPair = keyPair;
  }

  static fromBase64SecretKey(secret: Uint8Array): NoncedBox {
    return new NoncedBox(nacl.box.keyPair.fromSecretKey(secret));
  }

  async decrypt(
    b64FullMessage: string,
    b64SenderPublicKey: string,
  ): Promise<string> {
    const fullMessage = Base64Codec.decode(b64FullMessage);
    const senderPublicKey = Base64Codec.decode(b64SenderPublicKey);

    const nonce = fullMessage.slice(0, nacl.box.nonceLength);
    const message = fullMessage.slice(nacl.box.nonceLength, fullMessage.length);

    const decrypted = nacl.box.open(
      message,
      nonce,
      senderPublicKey,
      this.keyPair.secretKey,
    );

    if (decrypted == null || !decrypted) {
      throw Error(
        `Couldn't decrypt. ${JSON.stringify(
          {
            fullMessage: Base64Codec.encode(fullMessage),
            message: Base64Codec.encode(message),
            nonce: Base64Codec.encode(nonce),
            senderPublicKey: Base64Codec.encode(senderPublicKey),
            receiverPublicKey: Base64Codec.encode(this.keyPair.publicKey),
          },
          null,
          2,
        )}`,
      );
    }

    return Utf8Codec.decode(decrypted);
  }
}

const buildKwilSignerAndGrantee = (
  granteeSigner: ethers.Wallet,
): [KwilSigner, string] => {
  const signer = granteeSigner as ethers.Wallet;
  return [new KwilSigner(signer, signer.address), signer.address];
};

interface idOSGranteeInitParams {
  encryptionSecret: Uint8Array;
  nodeUrl?: string;
  chainId?: string;
  dbId?: string;
  granteeSigner: ethers.Wallet;
}

const throwError = (message: string): never => {
  throw new Error(message);
};

export class idOSGrantee {
  noncedBox: NoncedBox;
  nodeKwil: NodeKwil;
  kwilSigner: KwilSigner;
  dbId: string;
  address: string;

  static async init({
    encryptionSecret,
    nodeUrl = process.env.NEXT_PUBLIC_IDOS_NODE_URL,
    chainId,
    dbId,
    granteeSigner,
  }: idOSGranteeInitParams) {
    const kwil = new NodeKwil({ kwilProvider: nodeUrl, chainId: '' });

    chainId ||=
      // biome-ignore lint/style/noNonNullAssertion: I wanna let it fall to throwError.
      (await kwil.chainInfo()).data?.chain_id! ||
      throwError("Can't discover chainId. You must pass it explicitly.");

    dbId ||=
      // biome-ignore lint/style/noNonNullAssertion: I wanna let it fall to throwError.
      (await kwil.listDatabases()).data?.filter(
        ({ name }) => name === 'idos',
      )[0].dbid! ||
      throwError("Can't discover dbId. You must pass it explicitly.");

    const nodeKwil = new NodeKwil({ kwilProvider: nodeUrl, chainId });

    const [kwilSigner, address] = buildKwilSignerAndGrantee(granteeSigner);

    return new idOSGrantee(
      NoncedBox.fromBase64SecretKey(encryptionSecret),
      nodeKwil,
      kwilSigner,
      dbId,
      address,
    );
  }

  private constructor(
    noncedBox: NoncedBox,
    nodeKwil: NodeKwil,
    kwilSigner: KwilSigner,
    dbId: string,
    address: string,
  ) {
    this.noncedBox = noncedBox;
    this.nodeKwil = nodeKwil;
    this.kwilSigner = kwilSigner;
    this.dbId = dbId;
    this.address = address;
  }

  async fetchSharedCredentialFromIdos<T extends Record<string, unknown>>(
    dataId: string,
  ): Promise<T> {
    return (
      (await this.nodeKwil.call(
        {
          action: 'get_credential_shared',
          dbid: this.dbId,
          inputs: [{ $id: dataId }],
        },
        this.kwilSigner,
        // biome-ignore lint/suspicious/noExplicitAny: NodeKwil doesn't have the best type defs.
      )) as any
    ).data.result[0] as unknown as T;
  }

  async getSharedCredentialContentDecrypted(dataId: string): Promise<string> {
    const credentialCopy = await this.fetchSharedCredentialFromIdos<{
      content: string;
      encryption_public_key: string;
    }>(dataId);

    return await this.noncedBox.decrypt(
      credentialCopy.content,
      credentialCopy.encryption_public_key,
    );
  }

  get grantee() {
    return this.address;
  }

  get encryptionPublicKey() {
    return Base64Codec.encode(this.noncedBox.keyPair.publicKey);
  }
}
