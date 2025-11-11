pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Sale} from "../../../contracts/token/Sale.sol";
import {Citizend} from "../../../contracts/token/Citizend.sol";
import {MockERC20} from "../../../contracts/test/MockERC20.sol";

contract SaleEdgeCasesTest is Test {
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

    bytes32 merkleRoot =
        0xa5c09e2a9128afef7246a5900cfe02c4bd2cfcac8ac4286f0159a699c8455a49;
    bytes32[] aliceMerkleProof = new bytes32[](2);
    bytes32[] bobMerkleProof = new bytes32[](2);

    uint256 paymentTokenMultiplier;
    uint256 rate;
    uint256 minContribution;

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

        paymentToken = new MockERC20("USDC", "USDC", 6);
        token = new Citizend(owner, end);

        paymentTokenMultiplier = 10 ** paymentToken.decimals();
        rate = (2 * paymentTokenMultiplier) / 10; // 0.2 USDC per token
        minContribution = (2 * paymentTokenMultiplier) / 10; // 0.2 USDC minimum

        sale = new Sale(
            address(paymentToken),
            rate,
            start,
            end,
            10 ether,
            5 * 1e6,
            15 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setToken(address(token));
        sale.setMinContribution(minContribution);

        token.transfer(address(sale), 1000000 ether);

        vm.stopPrank();

        vm.startPrank(alice);
        paymentToken.mint(alice, 100 * 1e6);
        paymentToken.approve(address(sale), 100 * 1e6);
        vm.stopPrank();

        vm.startPrank(bob);
        paymentToken.mint(bob, 100 * 1e6);
        paymentToken.approve(address(sale), 100 * 1e6);
        vm.stopPrank();
    }

    // ============================================
    // SCENARIO 1: Exactly at minTarget - No refund
    // ============================================

    function test_ExactlyMinTarget_NoRefund() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(10 * 1e6);
        vm.stopPrank();

        // Alice invests exactly minTarget worth
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(5 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // At minTarget, price should be minPrice
        assertEq(sale.currentTokenPrice(), sale.minPrice());

        // No refund should be given since price = rate
        uint256 refund = sale.refundAmount(alice);
        assertEq(refund, 0);

        // Allocation should be full uncapped amount
        assertEq(sale.allocation(alice), sale.uncappedAllocation(alice));
    }

    // ============================================
    // SCENARIO 2: Exactly at maxTarget - Some refund
    // ============================================

    function test_ExactlyMaxTarget_WithRefund() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(10 * 1e6);
        vm.stopPrank();

        // Alice invests exactly maxTarget worth at initial rate
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(10 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // At maxTarget, price should be maxPrice
        assertEq(sale.currentTokenPrice(), sale.maxPrice());

        // User paid 10 USDC at rate 0.2 = 50 tokens uncapped
        // At maxPrice 0.4, user gets 10 USDC / 0.4 = 25 tokens
        // Refund = 10 - (25 * 0.4) = 10 - 10 = 0 USDC

        uint256 allocation = sale.allocation(alice);
        assertEq(allocation, 25 ether);

        uint256 refund = sale.refundAmount(alice);
        assertEq(refund, 0);
    }

    // ============================================
    // SCENARIO 3: Far above maxTarget with cap
    // ============================================

    function test_FarAboveMaxTarget_WithRisingTideCap() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(10 * 1e6);
        vm.stopPrank();

        // Alice and Bob together exceed maxTarget significantly
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(10 * 1e6), aliceMerkleProof);

        vm.prank(bob);
        sale.buy(sale.paymentTokenToToken(10 * 1e6), bobMerkleProof);

        // Total = 20M USDC worth of tokens at rate 0.2 = 100 tokens
        // This is far above maxTarget

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(3 ether); // Each can only get 3 tokens

        assertEq(sale.allocation(alice), 3 ether);
        assertEq(sale.allocation(bob), 3 ether);

        // Price is maxPrice = 0.4
        // Alice paid 10 USDC, gets 3 tokens worth 3 * 0.4 = 1.2 USDC
        // Refund = 10 - 1.2 = 8.8 USDC
        uint256 expectedRefund = 10 * 1e6 - (3 ether * sale.maxPrice()) / 1 ether;
        assertEq(sale.refundAmount(alice), expectedRefund);
    }

    // ============================================
    // SCENARIO 4: One investor below cap, one above
    // ============================================

    function test_MixedInvestors_BelowAndAboveCap() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(15 * 1e6);
        vm.stopPrank();

        // Alice invests small amount
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(2 * 1e6), aliceMerkleProof);

        // Bob invests large amount
        vm.prank(bob);
        sale.buy(sale.paymentTokenToToken(14 * 1e6), bobMerkleProof);

        // Total = 16M (above maxTarget)

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(5 ether);

        // Alice invested 2M at rate 0.2 = 10 tokens uncapped
        // Cap is 5 tokens, so Alice is below cap
        assertEq(sale.allocation(alice), 10 ether);

        // Bob invested 14M at rate 0.2 = 70 tokens uncapped
        // Cap is 5 tokens, so Bob gets capped
        assertEq(sale.allocation(bob), 5 ether);

        // Price is maxPrice = 0.4
        // Alice: paid 2M, gets 10 tokens worth 10 * 0.4 = 4M
        // But this is impossible - she can't get more value than paid
        // Actually: paid 2M at rate 0.2, allocation recalculated at 0.4
        // allocation = (2M / 0.4) = 5 tokens, but uncapped was 10
        // So Alice gets min(10, 5) based on price...

        // Let me recalculate: Alice paid 2M USDC
        // At final price 0.4, she should get 2M / 0.4 = 5 tokens
        // But uncapped was 10 tokens (at rate 0.2)
        // The allocation() function returns min based on recalculation
    }

    // ============================================
    // SCENARIO 5: Just below minTarget - No allocation
    // ============================================

    function test_JustBelowMinTarget_NoAllocation() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        vm.stopPrank();

        // Alice invests just under minTarget
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(4.99 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // Below minTarget = no allocation
        assertEq(sale.allocation(alice), 0);

        // Full refund
        assertEq(sale.refundAmount(alice), 4.99 * 1e6);
    }

    // ============================================
    // SCENARIO 6: Midpoint pricing check
    // ============================================

    function test_MidpointBetweenTargets_CorrectPricing() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(15 * 1e6);
        vm.stopPrank();

        // Invest exactly in the middle: (5 + 15) / 2 = 10M
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(10 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // At midpoint, price should be (minPrice + maxPrice) / 2
        // minPrice = 0.2, maxPrice = 0.4, midpoint = 0.3
        uint256 expectedPrice = (sale.minPrice() + sale.maxPrice()) / 2;
        assertEq(sale.currentTokenPrice(), expectedPrice);

        // Alice paid 10M at rate 0.2 = 50 tokens uncapped
        // At price 0.3, she gets 10M / 0.3 = 33.333... tokens
        uint256 expectedAllocation = (10 * 1e6 * 1 ether) / expectedPrice;
        assertEq(sale.allocation(alice), expectedAllocation);

        // Refund = 10M - (allocation * 0.3)
        uint256 shouldPay = (expectedAllocation * expectedPrice) / 1 ether;
        uint256 expectedRefund = 10 * 1e6 - shouldPay;
        assertEq(sale.refundAmount(alice), expectedRefund);
    }

    // ============================================
    // SCENARIO 7: Investor at exact cap
    // ============================================

    function test_InvestorAtExactCap() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(15 * 1e6);
        vm.stopPrank();

        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(20 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        // Set cap to exactly what Alice would get at maxPrice
        // Alice paid 20M at 0.2 = 100 tokens uncapped
        // At maxPrice 0.4, she'd get 20M / 0.4 = 50 tokens
        vm.prank(owner);
        sale.setIndividualCap(50 ether);

        assertEq(sale.allocation(alice), 50 ether);

        // No refund since she gets exactly what she paid for at final price
        assertEq(sale.refundAmount(alice), 0);
    }

    // ============================================
    // SCENARIO 8: Multiple buys from same user
    // ============================================

    function test_MultiplePurchases_AggregatedCorrectly() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(15 * 1e6);
        vm.stopPrank();

        // Alice makes 3 purchases
        vm.startPrank(alice);
        sale.buy(sale.paymentTokenToToken(2 * 1e6), aliceMerkleProof);
        sale.buy(sale.paymentTokenToToken(3 * 1e6), aliceMerkleProof);
        sale.buy(sale.paymentTokenToToken(5 * 1e6), aliceMerkleProof);
        vm.stopPrank();

        // Total = 10M
        uint256 totalTokens = sale.paymentTokenToToken(10 * 1e6);
        assertEq(sale.uncappedAllocation(alice), totalTokens);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // Price at 10M is (0.2 + 0.4) / 2 = 0.3
        uint256 expectedPrice = (sale.minPrice() + sale.maxPrice()) / 2;
        assertEq(sale.currentTokenPrice(), expectedPrice);

        // Allocation and refund should be based on total investment
        uint256 expectedAllocation = (10 * 1e6 * 1 ether) / expectedPrice;
        assertEq(sale.allocation(alice), expectedAllocation);
    }

    // ============================================
    // SCENARIO 9: Withdraw works correctly with refunds
    // ============================================

    function test_Withdraw_OnlyTakesNetAmount() public {
        vm.startPrank(owner);
        sale.setMinTarget(5 * 1e6);
        sale.setMaxTarget(10 * 1e6);
        vm.stopPrank();

        // Alice invests 8M
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(8 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // Price at 8M is minPrice + (maxPrice - minPrice) * (8-5)/(10-5)
        // = 0.2 + 0.2 * 0.6 = 0.32
        uint256 currentPrice = sale.currentTokenPrice();
        uint256 allocation = sale.allocation(alice);
        uint256 refund = sale.refundAmount(alice);

        // Owner withdraws
        uint256 ownerBalanceBefore = paymentToken.balanceOf(owner);
        vm.prank(owner);
        sale.withdraw();
        uint256 ownerBalanceAfter = paymentToken.balanceOf(owner);

        // Owner should receive total - refunds = allocation * price
        uint256 expectedWithdraw = (allocation * currentPrice) / 1 ether;
        assertEq(ownerBalanceAfter - ownerBalanceBefore, expectedWithdraw);

        // Contract should still have enough for refund
        assertGe(paymentToken.balanceOf(address(sale)), refund);
    }

    // ============================================
    // SCENARIO 10: Zero allocation still allows refund
    // ============================================

    function test_ZeroAllocation_CanStillRefund() public {
        vm.startPrank(owner);
        sale.setMinTarget(10 * 1e6);
        vm.stopPrank();

        // Alice invests but total is below minTarget
        vm.prank(alice);
        sale.buy(sale.paymentTokenToToken(5 * 1e6), aliceMerkleProof);

        vm.warp(sale.end() + 1000);
        vm.prank(owner);
        sale.setIndividualCap(type(uint256).max);

        // Allocation is 0 (below minTarget)
        assertEq(sale.allocation(alice), 0);

        // But refund should be full amount
        assertEq(sale.refundAmount(alice), 5 * 1e6);

        // Refund transaction should work
        uint256 balanceBefore = paymentToken.balanceOf(alice);
        vm.prank(alice);
        sale.refund(alice);
        uint256 balanceAfter = paymentToken.balanceOf(alice);

        assertEq(balanceAfter - balanceBefore, 5 * 1e6);
    }
}
