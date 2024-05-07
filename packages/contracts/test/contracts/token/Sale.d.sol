pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Sale} from "../../../contracts/token/Sale.sol";
import {Citizend} from "../../../contracts/token/Citizend.sol";
import {MockERC20} from "../../../contracts/test/MockERC20.sol";

contract SaleTest is Test {
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

    event Purchase(
        address indexed from,
        uint256 paymentTokenAmount,
        uint256 tokenAmount
    );

    event Claim(address indexed to, uint256 tokenAmount);
    event Refund(address indexed to, uint256 paymentTokenAmount);

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

        paymentToken = new MockERC20("USDC", "USDC", 18);
        token = new Citizend(owner, end);
        sale = new Sale(
            address(paymentToken),
            0.2 ether,
            start,
            end,
            10 ether,
            5 ether,
            15 ether,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setToken(address(token));
        sale.setMinContribution(0.2 ether);

        token.transfer(address(sale), 1000000 ether);

        vm.stopPrank();

        vm.startPrank(alice);

        paymentToken.mint(alice, 100 ether);
        paymentToken.approve(address(sale), 100 ether);

        vm.stopPrank();

        vm.startPrank(bob);

        paymentToken.mint(bob, 100 ether);
        paymentToken.approve(address(sale), 100 ether);

        vm.stopPrank();
    }

    function testConstructor() public view {
        require(sale.paymentToken() == address(paymentToken));
        require(sale.rate() == 0.2 ether);
        require(sale.start() == start);
        require(sale.end() == end);
        require(sale.hasRole(sale.DEFAULT_ADMIN_ROLE(), owner));
        require(sale.hasRole(sale.CAP_VALIDATOR_ROLE(), owner));
        require(bytes32(sale.merkleRoot()) == bytes32(merkleRoot));
    }

    function test_PaymentTokenToToken() public view {
        require(sale.paymentTokenToToken(0 ether) == 0);
        require(sale.paymentTokenToToken(0.2 ether) == 1 ether);
        require(sale.paymentTokenToToken(1 ether) == 5 ether);
    }

    function test_TokenToPaymentToken() public view {
        require(sale.tokenToPaymentToken(0 ether) == 0);
        require(sale.tokenToPaymentToken(1 ether) == 0.2 ether);
        require(sale.tokenToPaymentToken(5 ether) == 1 ether);
    }

    function test_Buy() public {
        vm.startPrank(alice);

        uint256 beforeBalance = paymentToken.balanceOf(alice);
        require(beforeBalance == 100 ether);

        vm.expectEmit();

        emit Purchase(address(alice), 1 ether, 5 ether);

        sale.buy(5 ether, aliceMerkleProof);

        uint256 afterBalance = paymentToken.balanceOf(alice);
        require(afterBalance == 99 ether);

        require(sale.risingTide_totalAllocatedUncapped() == 5 ether);

        vm.stopPrank();
    }

    function test_Buy1000() public {
        vm.startPrank(alice);
        paymentToken.mint(alice, 900 ether);
        paymentToken.approve(address(sale), 5000 ether);

        uint256 beforeBalance = paymentToken.balanceOf(alice);
        require(beforeBalance == 1000 ether);

        emit Purchase(address(alice), 1000 ether, 5000 ether);
        sale.buy(5000 ether, aliceMerkleProof);

        vm.stopPrank();
    }

    function test_BuyMultiplePurchasesSameAccount() public {
        vm.startPrank(alice);

        vm.expectEmit();
        emit Purchase(address(alice), 1 ether, 5 ether);

        sale.buy(5 ether, aliceMerkleProof);

        vm.expectEmit();
        emit Purchase(address(alice), 1 ether, 5 ether);

        sale.buy(5 ether, aliceMerkleProof);

        require(sale.uncappedAllocation(alice) == 10 ether);

        vm.stopPrank();
    }

    function test_BuyRevertsWhenBelowMinimum() public {
        vm.prank(owner);
        sale.setMinContribution(2 ether);

        vm.startPrank(alice);

        vm.expectRevert(bytes("can't be below minimum"));
        sale.buy(1 ether, aliceMerkleProof);
    }

    function test_BuyRevertsWhenInvalidMerkleProof() public {
        vm.prank(alice);
        vm.expectRevert(Sale.InvalidLeaf.selector);
        sale.buy(2 ether, bobMerkleProof);
    }

    function test_BuyRevertsAfterReachingMaxTarget() public {
        vm.startPrank(owner);
        sale.setMinContribution(1 ether);
        sale.setMinTarget(1 ether);

        vm.startPrank(alice);
        sale.buy(1 ether, aliceMerkleProof);

        vm.expectRevert(Sale.MaxTargetReached.selector);
        sale.buy(1 ether, aliceMerkleProof);
    }

    function test_WithdrawRevertsIfNotOwner() public {
        vm.expectRevert();
        vm.startPrank(alice);

        sale.withdraw();
    }

    function test_WithdrawRevertsIfNoCapSet() public {
        vm.warp(sale.end() + 1000);

        vm.startPrank(owner);

        vm.expectRevert("cap not yet set");
        sale.withdraw();
    }

    function test_Withdraw() public {
        vm.prank(alice);
        sale.buy(2 ether, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.startPrank(owner);
        sale.setIndividualCap(2 ether);

        sale.withdraw();

        uint256 ownerBalance = paymentToken.balanceOf(owner);
        require(ownerBalance == sale.tokenToPaymentToken(2 ether));
    }

    function test_WithdrawOnlyOnce() public {
        vm.prank(alice);
        sale.buy(2 ether, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.startPrank(owner);
        sale.setIndividualCap(2 ether);

        sale.withdraw();
        uint256 ownerBalance = paymentToken.balanceOf(owner);
        require(ownerBalance == sale.tokenToPaymentToken(2 ether));

        vm.expectRevert("already withdrawn");
        sale.withdraw();
    }

    function test_WithdrawDoesNotWithdrawRefunds() public {
        vm.prank(alice);
        sale.buy(10 ether, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(10 ether, bobMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.startPrank(owner);
        sale.setIndividualCap(5 ether);

        uint256 aliceAllocation = sale.allocation(alice);
        uint256 aliceRefund = sale.refundAmount(alice);
        require(aliceAllocation == 5 ether);
        require(aliceRefund == 1 ether);

        uint256 bobAllocation = sale.allocation(bob);
        uint256 bobRefund = sale.refundAmount(bob);
        require(bobAllocation == 5 ether);
        require(bobRefund == 1 ether);

        sale.withdraw();

        vm.stopPrank();

        uint256 ownerBalance = paymentToken.balanceOf(owner);
        require(ownerBalance == 2 ether);
    }

    function test_SetIndividualCap() public {
        vm.prank(alice);
        sale.buy(2 ether, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(2 ether);
        require(sale.individualCap() == 2 ether);
        require(sale.risingTide_isValidCap() == true);
    }

    function test_SetIndividualCapFailsValidateForWrongValue() public {
        vm.prank(alice);
        sale.buy(2 ether, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(50 ether);
        require(sale.individualCap() == 50 ether);
        require(sale.risingTide_isValidCap() == false);
    }

    function test_RefundAmountIsZeroBeforeSale() public view {
        require(sale.refundAmount(alice) == 0);
    }

    function test_RefundAmountIsZeroIfAlreadyRefunded() public {
        vm.prank(alice);
        sale.buy(10 ether, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(10 ether, bobMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(5 ether);

        require(sale.refundAmount(alice) == 1 ether);

        vm.prank(alice);
        sale.refund(alice);

        require(sale.refundAmount(alice) == 0);
    }

    function test_RefundAmountIsZeroIfIndividualCapIsHigherThanInvestedTotal()
        public
    {
        vm.prank(alice);
        sale.buy(1 ether, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(9 ether, bobMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(9 ether);

        require(sale.refundAmount(alice) == 0);
    }

    function test_RefundReturnsCorrectAmmount() public {
        vm.prank(alice);
        sale.buy(10 ether, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(10 ether, bobMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(5 ether);

        uint256 aliceRefund = sale.refundAmount(alice);
        uint256 bobRefund = sale.refundAmount(bob);

        uint256 aliceBalance = paymentToken.balanceOf(alice);
        uint256 bobBalance = paymentToken.balanceOf(bob);

        require(aliceRefund == sale.tokenToPaymentToken(5 ether));

        vm.expectEmit();
        emit Refund(alice, aliceRefund);

        vm.prank(alice);
        sale.refund(alice);

        require(aliceBalance + aliceRefund == paymentToken.balanceOf(alice));

        vm.prank(bob);
        sale.refund(bob);

        require(bobBalance + bobRefund == paymentToken.balanceOf(bob));
    }

    function test_RefundRevertsWhenCapIsNotSet() public {
        vm.prank(alice);
        sale.buy(10 ether, aliceMerkleProof);

        vm.expectRevert(bytes("cap not yet set"));
        sale.refund(alice);
    }

    function test_RefundRevertsIfDoubleRefund() public {
        vm.prank(alice);
        sale.buy(10 ether, aliceMerkleProof);

        vm.prank(bob);
        sale.buy(10 ether, bobMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(5 ether);

        vm.startPrank(alice);
        sale.refund(alice);

        vm.expectRevert(bytes("already refunded"));
        sale.refund(alice);
    }

    function test_AllocationIsZeroIfNotMinTargetReached() public {
        vm.prank(owner);
        sale.setMinTarget(5 ether);

        vm.prank(alice);
        sale.buy(2 ether, aliceMerkleProof);

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(2 ether);

        require(sale.allocation(alice) == 0);
        require(sale.refundAmount(alice) == sale.tokenToPaymentToken(2 ether));
    }
}
