# DiscoveryDAO monorepo

[notion]: https://www.notion.so/fractal-/Discovery-DAO-0b8ada556f544e219e4756032f97c0e7
[gitbook]: https://app.gitbook.com/o/wJRQafZq48KlUkYl9v4X/s/txjkyhfQuOMVFy4HSbaM/
[hardhat]: https://hardhat.org/
[subvisual]: https://subvisual.com/
[token-alloc]: https://docs.google.com/spreadsheets/d/1KPmg42jJYDyhaShfwE8DNzEl1pk99AGFQx56E9VfwFY/edit#gid=2019661501
[figma-flows]: https://www.figma.com/file/pP7j75NZkAhL31C4hqwSNg/Stealth-DAO?node-id=3%3A4
[figma-designs]: https://www.figma.com/file/cTQvLFRdIxXA9Cr4qmBYwV/Citizend---Web-Design---Draft?node-id=78%3A310
[token-one-pager]: https://docs.google.com/document/d/1vswBT46bVJub2uGqz-fzuhznolyuRPwgkxJtFfz5FmE/edit#heading=h.w7ipbahzitg7
[mandala-explorer]: https://blockscout.mandala.acala.network/
[karura-explorer]: https://blockscout.karura.network/

## Relevant links

- [Notion][notion]
- [Gitbook][gitbook]
- [Token One Pager][token-one-pager]
- [Token Allocation and P&L][token-alloc]
- [Figma User Stories][figma-flows]
- [Figma Web Design][figma-designs]
- Acala explorers: [Mandala][mandala-explorer] [Karura][karura-explorer]

## Audit reports

- [2022-05-04 - Hacken - Token Sale contracts](./audits/2022-05-04_hacken_token-sale.pdf)

## Development

1. Clone the project and install dependencies

```
git clone git@github.com/subvisual/discoveryDAO
cd discoveryDAO
yarn install
```

2. `yarn contracts:dev` boots the local development chain (`hardhat node`), with a test contract

## Contracts

A [hardhat][hardhat] project. Details to be added in the future

## Web

To start the project locally run:

```sh
yarn web:start
```

To bundle the project run:

```sh
yarn web:bundle
```

### About

TODO
