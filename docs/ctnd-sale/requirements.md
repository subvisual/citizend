# Token Sale Contracts - Tech Requirements

# Resources

**Token sale details**

[Google Sheets - create and edit spreadsheets online, for free.](https://docs.google.com/spreadsheets/d/1KPmg42jJYDyhaShfwE8DNzEl1pk99AGFQx56E9VfwFY/edit#gid=2013058788)

# Timeline of Public Sale

Specific dates are not final. This is meant to show only the relative duration and overlap of each stage

[Untitled](https://www.notion.so/a029b3cec9c24745b9a115f5f3e5eee0)

# Contracts

## Token Contract (ERC20)

A standard ERC20

- Total supply: 100 Million $CTND
- Decimals: 18
- Minting / burning functionality: Burnable & Pausable
- Supply reserved for public sale: 15%
- Supply reserved for private sale: 10%

## Community Sale Contract

- Accepts $aUSD in exchange for $CTND, with a pre-determined exchange rate
- Funds can later be redeemed through the vesting contract
- People can invest more than once, as long as they do it through the same address (unique fractal ID)
- A start and end timestamps must be set. Sales are only allowed during this period
- Keeps a counter of how many unique users (fractal IDs) have invested so far
- Privileged account(s) can withdraw $aUSD after the sale is over (except money meant for refunds)
- Requires accounts to have gone through a Fractal KYC (still pending some details from Fractal side, such as list IDs)
- Once sale period is over, a Rising Tide calculation needs to be computed off-chain, and submitted to the contract for validation

## Public Sale Contract

- A copy of the Community Sale one, with different parameters (start, end, total amount to be sold

Questions:

- Same price as community sale?

## Vesting Contract

- Allows registering private sale records (subject to vesting with a custom
- Will hold 100% of the CTND funds
- Any tokens that end up not being sold can be claimed by adding a private vesting back into the treasury
- Vesting calculations are done by asking each sale contract for the amounts of each user (only possible after cap calculation)
- To simplify calculations, it’s not possible for the same address to have both a public & private vested amount (see resolved discussions), or multiple private vestings with different periods
- At the beginning of each month (after cliff period) users can claim a % of their funds, linearly
- Public funds have 0 months of cliff, meaning the first slice can be claimed on the month immediately after the public sale
- Private funds have a configurable cliff period (within a small range, e.g.: 6-months maximum)
- Private vestings will be input manually by a privileged account (e.g.: by importing from a CSV)
- Should only allow private vestings to be added up until a max supply cap (most likely 85% of the supply. full supply minus public sale amounts. treasury amounts will be vested as a private vesting)

# Deploy process

Will be deployed to Karura (Acala’s chain on Kusama)
Upon deploy, 100% of the $CTND supply should be moved to the vesting contract (public + private sale)

My understanding is that ERC20 bridging within Kusama/Polkadot is something we don’t need to worry about? (from the first call with Acala)
