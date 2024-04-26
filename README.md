# DiscoveryDAO monorepo

## Audit reports

- [2022-05-04 - Hacken - Token Sale contracts](./audits/2022-05-04_hacken_token-sale.pdf)

## Development

### Prerequisites

- [Foundry](https://getfoundry.sh/) development toolchain
- [Just](https://github.com/casey/just) command runner
- [asdf](https://github.com/asdf-vm/asdf) version manager

1. Clone the project and install dependencies

```
git clone git@github.com/subvisual/discoveryDAO
cd discoveryDAO
yarn install
cd packages/contracts
forge install
```

## Contracts

Solidity smart contracts are found in `./packages/contracts`

`yarn contracts:dev`, or `yarn dev` inside the `./packages/contracts` folder boots the local development chain

`forge test` runs the tests

## Web

NextJS web application that serves as the frontend is found in `./packages/web-app`

`yarn web:dev`, or `yarn dev` inside the `./packages/web-app` folder starts the project locally
