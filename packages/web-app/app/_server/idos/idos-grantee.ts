import { KwilSigner, NodeKwil } from '@kwilteam/kwil-js';
import * as Base64Codec from '@stablelib/base64';
import * as Utf8Codec from '@stablelib/utf8';
import { ethers } from 'ethers';
import nacl from 'tweetnacl';
import { decodeBase58, toBeHex } from 'ethers';
import { EthSigner } from '@kwilteam/kwil-js/dist/core/builders';
import { idOS } from '@idos-network/idos-sdk';

const PLAYGROUND_FRACTAL_ISSUER = 'https://vc-issuers.next.fractal.id/idos';

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

interface idOSGranteeInitParams {
  encryptionSecret: Uint8Array;
  nodeUrl?: string;
  chainId?: string;
  dbId?: string;
  granteeSigner: ethers.Wallet;
}

type TUserCountry = {
  residentialCountry: string | undefined;
  idDocumentCountry: string | undefined;
};

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
    const kwilSigner = new KwilSigner(
      granteeSigner as unknown as EthSigner,
      granteeSigner.address,
    );

    return new idOSGrantee(
      NoncedBox.fromBase64SecretKey(encryptionSecret),
      nodeKwil,
      kwilSigner,
      dbId,
      granteeSigner.address,
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
    try {
      const credentialCopy = await this.fetchSharedCredentialFromIdos<{
        content: string;
        encryption_public_key: string;
      }>(dataId);

      return await this.noncedBox.decrypt(
        credentialCopy.content,
        credentialCopy.encryption_public_key,
      );
    } catch (error) {
      console.log(
        'Error fetching or decrypting shared credential from idos for dataId:',
        dataId,
      );
      throw error;
    }
  }

  async isValidCredential(credential: any): Promise<boolean> {
    try {
      let result: any;

      if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true') {
        result = await idOS.verifiableCredentials.verify(credential, {
          allowedIssuers: [PLAYGROUND_FRACTAL_ISSUER],
        });
      } else {
        result = await idOS.verifiableCredentials.verify(credential);
      }

      if (result !== true) {
        throw new Error('Invalid credential', result);
      }

      return true;
    } catch (error) {
      console.log('Error verifying credential');
      console.log(error);
      return new Promise((resolve, _reject) => {
        resolve(false);
      });
    }
  }

  async fetchUserCountriesFromSharedPlusCredential(
    dataId: string,
  ): Promise<TUserCountry> {
    const credentialString =
      await this.getSharedCredentialContentDecrypted(dataId);
    const credential = JSON.parse(credentialString);

    const isValid = await this.isValidCredential(credential);
    const isApproved = credential?.status === 'approved';

    if (credential?.level && credential.level !== 'plus') {
      console.log('Credential is not plus level, for dataId:', dataId);
    }

    if (!isApproved) {
      console.log('Credential is not approved, for dataId:', dataId);
    }

    if (credential?.level === 'plus' && isValid && isApproved) {
      return {
        residentialCountry:
          credential?.credentialSubject?.residential_address_country,
        idDocumentCountry:
          credential?.credentialSubject?.identification_document_country,
      };
    }

    return {
      residentialCountry: undefined,
      idDocumentCountry: undefined,
    };
  }

  get grantee() {
    return this.address;
  }

  get encryptionPublicKey() {
    return Base64Codec.encode(this.noncedBox.keyPair.publicKey);
  }
}
