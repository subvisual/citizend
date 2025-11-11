# Sale Contract Fixes and Test Suite

## Summary of Changes

### 1. Fixed Critical Refund Calculation Bug

**Location**: `/packages/contracts/contracts/token/Sale.sol:294-317`

**Problem**: The original refund calculation used the initial `rate` instead of the final `currentTokenPrice()`, resulting in incorrect refunds.

**Original Code**:
```solidity
return tokenToPaymentToken(uncapped - capped);
// Used rate: (uncapped - capped) * rate / MUL
```

**Issues**:
- Gave incorrect (too large) refunds when price increased
- Would underflow/revert when price decreased below rate
- Didn't account for dynamic pricing mechanism

**Fixed Code**:
```solidity
// What the user paid (at rate during sale)
uint256 paidAmount = tokenToPaymentToken(uncapped);

// What they should pay at final price
uint256 shouldPay = (capped * currentTokenPrice()) / MUL;

// Refund difference (handle case where price decreased)
return paidAmount > shouldPay ? paidAmount - shouldPay : 0;
```

**Benefits**:
- ✅ Correctly calculates refund based on final price
- ✅ Handles all price scenarios (increase, decrease, equal)
- ✅ Never underflows or reverts
- ✅ Ensures: `refund + (allocation * finalPrice) = amountPaid`

### 2. Fixed Hardcoded Price Values

**Location**: `/packages/contracts/contracts/token/Sale.sol:168-169`

**Problem**: `minPrice` and `maxPrice` were hardcoded to incorrect values (0.02 and 0.08 USDC) instead of being based on `rate`.

**Original Code**:
```solidity
minPrice = 0.02 * 1e6;  // Wrong!
maxPrice = 0.08 * 1e6;  // Wrong!
```

**Fixed Code**:
```solidity
minPrice = _rate;       // Equals rate
maxPrice = _rate * 2;   // 2x rate
```

**Why This Matters**:
- `rate` must equal `minPrice` for the mechanism to work correctly
- Price increases from `minPrice` to `maxPrice` as demand increases
- Hardcoded values broke the entire dynamic pricing mechanism

---

## Test Suite Overview

### Fuzz Test Suite
**File**: `/packages/contracts/test/contracts/token/SaleFuzz.d.sol`

Comprehensive fuzz tests covering:

#### 1. Below minTarget Scenarios
- `testFuzz_BelowMinTarget_AllocationIsZero`: Verifies allocation is 0 when sale fails
- `testFuzz_BelowMinTarget_FullRefund`: Confirms full refunds when below minimum

#### 2. Between minTarget and maxTarget Scenarios
- `testFuzz_BetweenTargets_DynamicPricing`: Validates price calculation formula
- `testFuzz_BetweenTargets_CorrectAllocation`: Checks allocation at various price points
- `testFuzz_BetweenTargets_CorrectRefund`: Verifies refund = paid - (allocation * finalPrice)

#### 3. Above maxTarget Scenarios (Rising Tide)
- `testFuzz_AboveMaxTarget_PriceIsMaxPrice`: Confirms price caps at maxPrice
- `testFuzz_AboveMaxTarget_RisingTideCap`: Tests individual allocation caps
- `testFuzz_AboveMaxTarget_RefundWithCap`: Verifies refunds when capped

#### 4. Multiple Investors
- `testFuzz_MultipleInvestors_VariousAmounts`: Tests complex scenarios with 3+ investors
- Tests various investment amounts and their interactions

#### 5. Refund Correctness
- `testFuzz_RefundNeverNegative`: Ensures refunds never underflow
- `testFuzz_RefundPlusAllocationValueEqualsPaid`: Validates conservation of value

#### 6. Price Range Validation
- `testFuzz_PriceAlwaysInRange`: Confirms price stays between minPrice and maxPrice
- `testFuzz_ExactlyAtMinTarget`: Tests boundary at minTarget
- `testFuzz_ExactlyAtMaxTarget`: Tests boundary at maxTarget

#### 7. Comprehensive Integration
- `testFuzz_ComprehensiveScenario`: Full end-to-end test with multiple investors, caps, and refunds

### Edge Case Test Suite
**File**: `/packages/contracts/test/contracts/token/SaleEdgeCases.d.sol`

Specific scenario tests:

1. **Exact Boundaries**
   - Exactly at minTarget (no refund expected)
   - Exactly at maxTarget (with refund calculation)
   - Just below minTarget (full refund)

2. **Rising Tide Caps**
   - Far above maxTarget with restrictive caps
   - Mixed investors (some below cap, some above)
   - Investor at exact cap amount

3. **Pricing Validation**
   - Midpoint pricing check (halfway between targets)
   - Price calculation at various levels

4. **User Behavior**
   - Multiple purchases from same user
   - Aggregated allocation and refund calculation

5. **System Integration**
   - Withdraw function with correct net amounts
   - Refunds work even with zero allocation

---

## How the Sale Mechanism Works

### Dynamic Pricing Formula

```solidity
if (totalRaised < minTarget) {
    price = minPrice
    allocation = 0  // Sale failed
}
else if (totalRaised > maxTarget) {
    price = maxPrice
}
else {
    // Linear interpolation
    price = minPrice + ((maxPrice - minPrice) * (totalRaised - minTarget)) / (maxTarget - minTarget)
}
```

### Example Walkthrough

**Setup**:
- rate = 0.2 USDC (initial purchase price)
- minPrice = 0.2 USDC (= rate)
- maxPrice = 0.4 USDC (= 2 * rate)
- minTarget = 5M USDC
- maxTarget = 10M USDC

**Scenario**: Alice invests 6 USDC

1. **During Sale**:
   - Alice pays 6 USDC at rate 0.2
   - `uncappedAllocation = 30 tokens`

2. **After Sale** (total raised = 7.5M):
   - `currentTokenPrice = 0.2 + (0.2 * (7.5M - 5M) / (10M - 5M)) = 0.3 USDC`
   - `allocation = 6 USDC / 0.3 = 20 tokens`
   - `refund = 6 - (20 * 0.3) = 0 USDC`

3. **Result**:
   - Alice gets 20 tokens (worth 6 USDC at final price)
   - No refund needed

---

## Running the Tests

```bash
# Run all sale tests
cd packages/contracts
forge test --match-path "test/contracts/token/Sale*.sol"

# Run only fuzz tests
forge test --match-path "test/contracts/token/SaleFuzz.d.sol"

# Run only edge case tests
forge test --match-path "test/contracts/token/SaleEdgeCases.d.sol"

# Run with verbosity for details
forge test --match-path "test/contracts/token/SaleFuzz.d.sol" -vv
```

---

## Test Coverage

The test suite covers:

✅ All three funding scenarios (below/between/above targets)
✅ Dynamic pricing at all levels
✅ Refund calculations in all scenarios
✅ Rising Tide individual caps
✅ Multiple investors with various amounts
✅ Edge cases at exact boundaries
✅ Multiple purchases from same user
✅ Withdrawal mechanics
✅ Zero allocation scenarios
✅ Price range validation
✅ Conservation of value (paid = kept + refunded)

---

## Key Insights

1. **`rate` MUST equal `minPrice`**: This is required for the refund mechanism to work correctly without underflows.

2. **Price is demand-based, not time-based**: Price increases as total funds raised increases, not over time.

3. **Refunds compensate for price increases**: Users lock in at `rate` but pay the final `currentTokenPrice()`.

4. **Rising Tide provides fairness**: When oversubscribed, individual caps ensure fair distribution.

5. **Conservation of value**: For any user: `amountPaid = (finalAllocation * finalPrice) + refund`

---

## Security Considerations

### Fixed Vulnerabilities

1. **Arithmetic Underflow**: Original code would revert if `uncapped < capped`
2. **Incorrect Refunds**: Users could drain more funds than entitled
3. **Price Miscalculation**: Hardcoded values broke the entire mechanism

### Remaining Considerations

1. **Rounding Errors**: Tests allow ±2 wei tolerance for division rounding
2. **Gas Costs**: Refund processing requires gas; users must claim
3. **Cap Validation**: Rising Tide cap must be validated off-chain before setting

---

## Next Steps

1. ✅ Apply fixes to Sale.sol
2. ✅ Run comprehensive test suite
3. ⏳ Audit the changes
4. ⏳ Deploy to testnet
5. ⏳ Run integration tests with frontend
