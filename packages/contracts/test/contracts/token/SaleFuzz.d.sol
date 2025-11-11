pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Sale} from "../../../contracts/token/Sale.sol";
import {Citizend} from "../../../contracts/token/Citizend.sol";
import {MockERC20} from "../../../contracts/test/MockERC20.sol";

contract SaleFuzzTest is Test {
    Sale sale;
    Citizend token;
    MockERC20 paymentToken;
    uint256 start;
    uint256 end;
    uint256 startRegistration;
    uint256 endRegistration;

    address owner = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    address alice = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address bob = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    address charlie = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;

    bytes32 merkleRoot =
        0xa5c09e2a9128afef7246a5900cfe02c4bd2cfcac8ac4286f0159a699c8455a49;
    bytes32[] aliceMerkleProof = new bytes32[](2);
    bytes32[] bobMerkleProof = new bytes32[](2);
    bytes32[] charlieMerkleProof = new bytes32[](2);

    uint256 paymentTokenMultiplier;
    uint256 rate;
    uint256 minContribution;

    // Sale parameters
    uint256 constant MIN_TARGET = 1000 * 1e6; // 1000 USDC
    uint256 constant MAX_TARGET = 10000 * 1e6; // 10,000 USDC
    uint256 constant TOTAL_TOKENS = 50000 ether; // 50,000 tokens

    function setUp() public {
        vm.startPrank(owner);

        startRegistration = 1714089600;
        endRegistration = 1714694400;

        start = vm.getBlockTimestamp();
        end = start + 60 * 60 * 24;

        aliceMerkleProof[0] = bytes32(
            0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9
        );
        aliceMerkleProof[1] = bytes32(
            0x347dce04eb339ca70588960730ef0cada966bb1d5e10a9b9489a3e0ba47dc1b6
        );

        bobMerkleProof[0] = bytes32(
            0x8a3552d60a98e0ade765adddad0a2e420ca9b1eef5f326ba7ab860bb4ea72c94
        );
        bobMerkleProof[1] = bytes32(
            0x070e8db97b197cc0e4a1790c5e6c3667bab32d733db7f815fbe84f5824c7168d
        );

        charlieMerkleProof[0] = bytes32(
            0x8a3552d60a98e0ade765adddad0a2e420ca9b1eef5f326ba7ab860bb4ea72c94
        );
        charlieMerkleProof[1] = bytes32(
            0x347dce04eb339ca70588960730ef0cada966bb1d5e10a9b9489a3e0ba47dc1b6
        );

        paymentToken = new MockERC20("USDC", "USDC", 6);
        token = new Citizend(owner, end);

        paymentTokenMultiplier = 10 ** paymentToken.decimals();
        rate = (2 * paymentTokenMultiplier) / 10; // 0.2 USDC per token
        minContribution = (1 * paymentTokenMultiplier) / 10; // 0.1 USDC minimum

        sale = new Sale(
            address(paymentToken),
            rate,
            start,
            end,
            TOTAL_TOKENS,
            MIN_TARGET,
            MAX_TARGET,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setToken(address(token));
        sale.setMinContribution(minContribution);

        token.transfer(address(sale), 1000000 ether);

        vm.stopPrank();

        // Setup alice
        vm.startPrank(alice);
        paymentToken.mint(alice, 100000 * 1e6);
        paymentToken.approve(address(sale), 100000 * 1e6);
        vm.stopPrank();

        // Setup bob
        vm.startPrank(bob);
        paymentToken.mint(bob, 100000 * 1e6);
        paymentToken.approve(address(sale), 100000 * 1e6);
        vm.stopPrank();

        // Setup charlie
        vm.startPrank(charlie);
        paymentToken.mint(charlie, 100000 * 1e6);
        paymentToken.approve(address(sale), 100000 * 1e6);
        vm.stopPrank();
    }

    // ============================================
    // FUZZ TEST: Below minTarget
    // ============================================

    function testFuzz_BelowMinTarget_AllocationIsZero(
        uint256 aliceAmount
    ) public {
        // Bound amount to be positive but total below minTarget
        aliceAmount = bound(
            aliceAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MIN_TARGET - 1)
        );

        vm.prank(alice);
        sale.buy(aliceAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // When below minTarget, allocation should be 0
        assertEq(sale.allocation(alice), 0);
        assertEq(sale.currentTokenPrice(), sale.minPrice());
    }

    function testFuzz_BelowMinTarget_FullRefund(uint256 aliceAmount) public {
        // Bound amount to be positive but total below minTarget
        aliceAmount = bound(
            aliceAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MIN_TARGET - 1)
        );

        uint256 paymentAmount = sale.tokenToPaymentToken(aliceAmount);

        vm.prank(alice);
        sale.buy(aliceAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // User should get full refund when below minTarget
        uint256 refundAmt = sale.refundAmount(alice);
        assertEq(refundAmt, paymentAmount);

        uint256 balanceBefore = paymentToken.balanceOf(alice);
        vm.prank(alice);
        sale.refund(alice);

        assertEq(
            paymentToken.balanceOf(alice),
            balanceBefore + paymentAmount
        );
    }

    // ============================================
    // FUZZ TEST: Between minTarget and maxTarget
    // ============================================

    function testFuzz_BetweenTargets_DynamicPricing(
        uint256 totalRaised
    ) public {
        // Bound to be between minTarget and maxTarget
        totalRaised = bound(totalRaised, MIN_TARGET, MAX_TARGET);

        uint256 tokenAmount = sale.paymentTokenToToken(totalRaised);

        vm.prank(alice);
        sale.buy(tokenAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // Price should be between minPrice and maxPrice
        uint256 currentPrice = sale.currentTokenPrice();
        assertGe(currentPrice, sale.minPrice());
        assertLe(currentPrice, sale.maxPrice());

        // Calculate expected price
        uint256 expectedPrice = sale.minPrice() +
            ((sale.maxPrice() - sale.minPrice()) *
                (totalRaised - MIN_TARGET)) /
            (MAX_TARGET - MIN_TARGET);

        assertEq(currentPrice, expectedPrice);
    }

    function testFuzz_BetweenTargets_CorrectAllocation(
        uint256 totalRaised
    ) public {
        totalRaised = bound(totalRaised, MIN_TARGET, MAX_TARGET);

        uint256 tokenAmount = sale.paymentTokenToToken(totalRaised);

        vm.prank(alice);
        sale.buy(tokenAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        uint256 currentPrice = sale.currentTokenPrice();
        uint256 expectedAllocation = (totalRaised * 1 ether) / currentPrice;

        assertEq(sale.allocation(alice), expectedAllocation);
    }

    function testFuzz_BetweenTargets_CorrectRefund(uint256 totalRaised) public {
        totalRaised = bound(totalRaised, MIN_TARGET, MAX_TARGET);

        uint256 tokenAmount = sale.paymentTokenToToken(totalRaised);

        vm.prank(alice);
        sale.buy(tokenAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        uint256 allocation = sale.allocation(alice);
        uint256 currentPrice = sale.currentTokenPrice();

        // What user should pay at final price
        uint256 shouldPay = (allocation * currentPrice) / 1 ether;

        // Refund should be difference
        uint256 expectedRefund = totalRaised > shouldPay
            ? totalRaised - shouldPay
            : 0;

        assertEq(sale.refundAmount(alice), expectedRefund);
    }

    // ============================================
    // FUZZ TEST: Above maxTarget (Rising Tide)
    // ============================================

    function testFuzz_AboveMaxTarget_PriceIsMaxPrice(
        uint256 totalRaised
    ) public {
        // Bound to be above maxTarget
        totalRaised = bound(
            totalRaised,
            MAX_TARGET + 1,
            MAX_TARGET * 2
        );

        uint256 tokenAmount = sale.paymentTokenToToken(totalRaised);

        vm.prank(alice);
        sale.buy(tokenAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        // Price should be maxPrice when above maxTarget
        assertEq(sale.currentTokenPrice(), sale.maxPrice());
    }

    function testFuzz_AboveMaxTarget_RisingTideCap(
        uint256 aliceAmount,
        uint256 bobAmount,
        uint256 cap
    ) public {
        // Ensure total is above maxTarget
        aliceAmount = bound(
            aliceAmount,
            sale.paymentTokenToToken(MIN_TARGET),
            sale.paymentTokenToToken(MAX_TARGET)
        );
        bobAmount = bound(
            bobAmount,
            sale.paymentTokenToToken(MIN_TARGET),
            sale.paymentTokenToToken(MAX_TARGET)
        );

        // Cap should be reasonable
        cap = bound(cap, 1 ether, aliceAmount);

        vm.prank(alice);
        sale.buy(aliceAmount, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(bobAmount, bobMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(cap);

        // Allocations should not exceed cap
        assertLe(sale.allocation(alice), cap);
        assertLe(sale.allocation(bob), cap);
    }

    function testFuzz_AboveMaxTarget_RefundWithCap(
        uint256 aliceAmount,
        uint256 cap
    ) public {
        // Alice invests more than cap
        aliceAmount = bound(
            aliceAmount,
            sale.paymentTokenToToken(MAX_TARGET),
            sale.paymentTokenToToken(MAX_TARGET * 2)
        );

        cap = bound(cap, 1 ether, aliceAmount / 2);

        uint256 alicePayment = sale.tokenToPaymentToken(aliceAmount);

        vm.prank(alice);
        sale.buy(aliceAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(cap);

        uint256 allocation = sale.allocation(alice);
        assertLe(allocation, cap);

        uint256 currentPrice = sale.currentTokenPrice();
        uint256 shouldPay = (allocation * currentPrice) / 1 ether;
        uint256 expectedRefund = alicePayment > shouldPay
            ? alicePayment - shouldPay
            : 0;

        assertEq(sale.refundAmount(alice), expectedRefund);
    }

    // ============================================
    // FUZZ TEST: Multiple Investors with Caps
    // ============================================

    function testFuzz_MultipleInvestors_VariousAmounts(
        uint256 aliceAmount,
        uint256 bobAmount,
        uint256 charlieAmount
    ) public {
        // Bound amounts to reasonable values
        aliceAmount = bound(
            aliceAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET / 3)
        );
        bobAmount = bound(
            bobAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET / 3)
        );
        charlieAmount = bound(
            charlieAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET / 3)
        );

        vm.prank(alice);
        sale.buy(aliceAmount, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(bobAmount, bobMerkleProof);

        vm.prank(charlie);
        sale.buy(charlieAmount, charlieMerkleProof);

        uint256 totalUncapped = aliceAmount + bobAmount + charlieAmount;
        assertEq(sale.totalUncappedAllocations(), totalUncapped);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // Verify total allocations match expected based on price
        uint256 aliceAlloc = sale.allocation(alice);
        uint256 bobAlloc = sale.allocation(bob);
        uint256 charlieAlloc = sale.allocation(charlie);

        uint256 totalAlloc = aliceAlloc + bobAlloc + charlieAlloc;

        // Total should not exceed total tokens for sale
        assertLe(totalAlloc, TOTAL_TOKENS);
    }

    // ============================================
    // FUZZ TEST: Refund Correctness
    // ============================================

    function testFuzz_RefundNeverNegative(
        uint256 amount,
        uint256 cap
    ) public {
        amount = bound(
            amount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET * 2)
        );
        cap = bound(cap, 0, amount);

        vm.prank(alice);
        sale.buy(amount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(cap == 0 ? type(uint256).max : cap);

        // Refund should never be negative (this would revert in old implementation)
        uint256 refund = sale.refundAmount(alice);
        assertGe(refund, 0);
    }

    function testFuzz_RefundPlusAllocationValueEqualsPaid(
        uint256 amount
    ) public {
        amount = bound(
            amount,
            sale.paymentTokenToToken(MIN_TARGET),
            sale.paymentTokenToToken(MAX_TARGET)
        );

        uint256 paid = sale.tokenToPaymentToken(amount);

        vm.prank(alice);
        sale.buy(amount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        uint256 allocation = sale.allocation(alice);
        uint256 refund = sale.refundAmount(alice);
        uint256 currentPrice = sale.currentTokenPrice();

        // refund + (allocation * currentPrice) should equal what was paid
        uint256 allocationValue = (allocation * currentPrice) / 1 ether;

        // Allow for small rounding errors (< 1 wei per calculation)
        assertApproxEqAbs(refund + allocationValue, paid, 2);
    }

    // ============================================
    // FUZZ TEST: Price Range Validation
    // ============================================

    function testFuzz_PriceAlwaysInRange(uint256 totalRaised) public {
        totalRaised = bound(
            totalRaised,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET * 3)
        );

        vm.prank(alice);
        sale.buy(totalRaised, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        uint256 currentPrice = sale.currentTokenPrice();

        // Price should always be between minPrice and maxPrice
        assertGe(currentPrice, sale.minPrice());
        assertLe(currentPrice, sale.maxPrice());
    }

    // ============================================
    // FUZZ TEST: Edge Cases
    // ============================================

    function testFuzz_ExactlyAtMinTarget(uint256 tolerance) public {
        // Test prices around minTarget
        tolerance = bound(tolerance, 0, MIN_TARGET / 100); // Within 1% of minTarget

        uint256 targetAmount = MIN_TARGET + tolerance;
        uint256 tokenAmount = sale.paymentTokenToToken(targetAmount);

        vm.prank(alice);
        sale.buy(tokenAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        uint256 currentPrice = sale.currentTokenPrice();

        // Price should be close to minPrice
        assertApproxEqAbs(currentPrice, sale.minPrice(), sale.minPrice() / 10);
    }

    function testFuzz_ExactlyAtMaxTarget(uint256 tolerance) public {
        // Test prices around maxTarget
        tolerance = bound(tolerance, 0, MAX_TARGET / 100); // Within 1% of maxTarget

        uint256 targetAmount = MAX_TARGET - tolerance;
        uint256 tokenAmount = sale.paymentTokenToToken(targetAmount);

        vm.prank(alice);
        sale.buy(tokenAmount, aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        uint256 currentPrice = sale.currentTokenPrice();

        // Price should be close to maxPrice
        assertApproxEqAbs(currentPrice, sale.maxPrice(), sale.maxPrice() / 10);
    }

    // ============================================
    // INTEGRATION TEST: Comprehensive Scenario
    // ============================================

    function testFuzz_ComprehensiveScenario(
        uint256 aliceAmount,
        uint256 bobAmount,
        uint256 charlieAmount,
        uint256 cap
    ) public {
        // Setup diverse investment amounts
        aliceAmount = bound(
            aliceAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET)
        );
        bobAmount = bound(
            bobAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET / 2)
        );
        charlieAmount = bound(
            charlieAmount,
            sale.paymentTokenToToken(minContribution),
            sale.paymentTokenToToken(MAX_TARGET / 4)
        );

        uint256 totalUncapped = aliceAmount + bobAmount + charlieAmount;
        uint256 totalPayment = sale.tokenToPaymentToken(totalUncapped);

        // Ensure cap is reasonable if above maxTarget
        if (totalPayment > MAX_TARGET) {
            cap = bound(cap, 1 ether, totalUncapped / 3);
        } else {
            cap = type(uint256).max;
        }

        // Track initial balances
        uint256 aliceInitialBalance = paymentToken.balanceOf(alice);
        uint256 bobInitialBalance = paymentToken.balanceOf(bob);
        uint256 charlieInitialBalance = paymentToken.balanceOf(charlie);

        // Purchases
        vm.prank(alice);
        sale.buy(aliceAmount, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(bobAmount, bobMerkleProof);

        vm.prank(charlie);
        sale.buy(charlieAmount, charlieMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(cap);

        // Get allocations and refunds
        uint256 aliceAlloc = sale.allocation(alice);
        uint256 bobAlloc = sale.allocation(bob);
        uint256 charlieAlloc = sale.allocation(charlie);

        uint256 aliceRefund = sale.refundAmount(alice);
        uint256 bobRefund = sale.refundAmount(bob);
        uint256 charlieRefund = sale.refundAmount(charlie);

        // Process refunds
        if (aliceRefund > 0) {
            vm.prank(alice);
            sale.refund(alice);
        }
        if (bobRefund > 0) {
            vm.prank(bob);
            sale.refund(bob);
        }
        if (charlieRefund > 0) {
            vm.prank(charlie);
            sale.refund(charlie);
        }

        // Verify balances
        uint256 aliceSpent = aliceInitialBalance - paymentToken.balanceOf(alice);
        uint256 bobSpent = bobInitialBalance - paymentToken.balanceOf(bob);
        uint256 charlieSpent = charlieInitialBalance -
            paymentToken.balanceOf(charlie);

        uint256 currentPrice = sale.currentTokenPrice();

        // Each user spent should equal their allocation value at current price
        assertApproxEqAbs(
            aliceSpent,
            (aliceAlloc * currentPrice) / 1 ether,
            2
        );
        assertApproxEqAbs(bobSpent, (bobAlloc * currentPrice) / 1 ether, 2);
        assertApproxEqAbs(
            charlieSpent,
            (charlieAlloc * currentPrice) / 1 ether,
            2
        );

        // Total allocation should not exceed totalTokensForSale
        assertLe(aliceAlloc + bobAlloc + charlieAlloc, TOTAL_TOKENS);
    }
}
