# DiscoveryDAO-web

## Project setup

### Requirements

- Node.js >= 14.17.0
- NPM >= please-use-yarn
- Yarn >= 1.22.0

## Docs and links

- [Figma design](https://www.figma.com/file/dOZmX40XVwwlLLHX9mg2mc/Citizend?node-id=0%3A1)

### Install dependencies

```sh
yarn
```

## Running the application

To start the project locally run:

```sh
yarn start
```

## Bundle the application

To bundle the project run:

```sh
yarn bundle
```

## Running tests

To run the project tests (eslint, stylelint and typescript):

```sh
yarn lint
```

### Environment variables

## NEXT_PUBLIC_TERMS_URL

Its used to open the Terms of Service URL.

## NEXT_PUBLIC_PRIVACY_POLICY_URL

Its used to open the Terms of Privacy Policy URL.

## NEXT_PUBLIC_CAP_CALCULATION_INFO_URL

Its used to open Sale Cap Change info URL.

## NEXT_PUBLIC_CONTRIBUTE_AGAIN_INFO_URL

Its used to open Contribute Again info URL.

## NEXT_PUBLIC_FRACTAL_KYC_URL

Its used to open Fractal KYC profile URL.

## NEXT_PUBLIC_DAO_CONTRACTS_FOLDER

This application will run with the `mandala (staging)` contracts by default.
In order to bundle the application with other contracts schemas, please use:
`NEXT_PUBLIC_DAO_CONTRACTS_FOLDER=<folderName> yarn bundle`

Where the `folderName` should be one of the folders in the following folder:
`../packages/contracts/deployments/`

If running a local blockchain network, use: `NEXT_PUBLIC_DAO_CONTRACTS_FOLDER=localhost yarn start`
