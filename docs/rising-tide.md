# Rising Tide Mechanism

The Rising Tide Mechanism governs the sale of the $CTND token and optimizes for maximum broad participation and is a fixed-price sale.
The Rising Tide Mechanism is a fixed price sale that optimizes for community participation
Every participant that for the sale has a chance to get an equal allocation like everyone else. During the collection phase, all qualifying participants can commit their preferred allocation amount. All allocations will be locked until the sale concludes. The sale can now have two possible outcomes:

- **There is less demand than supply.** This means that fewer people wanted to buy than there are tokens available for purchase. In this case, all allocation requests are granted.
- **There is more demand than supply.** This means that more people wanted to buy than there are tokens available to purchase. In this case, there are allocation requests that won't be met.

The Rising Tide Mechanism will then proceed to determine an individual allocation cap that is the same for every participant. The sum of all contributions up to this cap is going to be exactly the maximum raise amount. Every contribution over the individual cap will be refunded to the participant.

## Example of Applying the Rising Tide Mechanism:

Imagine there are a total of ten allocations requests to an imaginary sale. The goal of the sale is to collect a grant total of 5000 tokens. The lowest allocation request is 200, while the highest request is 1000 tokens. The mechanism will determine that making the lowest request of 200 the individual cap will not be sufficient to raise the total amount of 5000 tokens. As there are 10 participants that all have a higher or equal allocation, only 2000 tokens would be collected. The mechanism is thus increasing the individual cap (thus the name 'rising tide').

![[rising-tide-example][./assets/rising-tide-example.png]

At an individual cap of 500 tokens per participant, the total amount raised would only be 4700 tokens, as nine individuals requested to allocate 500 tokens or more, while one individual only committed 200 tokens. The individual cap is again increased as the target has not been met yet.

At this stage only seven participants remain that wish to allocate even more. Only 300 tokens are left until the total raise amount is met. To collect this sum, the remainder is split among these seven participants which gives another 42.86 tokens for these participants. This puts the maximum individual allocation at 542.86 tokens.

In this example, a total demand of 7500 tokens met a maximum supply of 5000 tokens. Thus only three participants were able to satisfy their allocation requests. The other seven participants were reimbursed for everything committed over the individual threshold of 542.86 tokens.
