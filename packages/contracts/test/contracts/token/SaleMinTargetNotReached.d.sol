pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Sale} from "../../../contracts/token/Sale.sol";
import {MockERC20} from "../../../contracts/test/MockERC20.sol";

import "forge-std/console.sol";

contract SaleMinTargetNotReachedTest is Test {
    Sale sale;
    MockERC20 paymentToken;
    uint256 start;
    uint256 end;
    uint256 startRegistration;
    uint256 endRegistration;

    address owner = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;

    address alice = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address bob = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;

    address[] testAccounts;

    mapping(address => bytes32[]) merkleProofs;
    bytes32 merkleRoot =
        0xa5c09e2a9128afef7246a5900cfe02c4bd2cfcac8ac4286f0159a699c8455a49;

    bytes32[] aliceMerkleProof = new bytes32[](2);

    uint256 DAY = 60 * 60 * 24;

    function setUp() public {
        testAccounts = new address[](9);
        testAccounts[0] = alice;
        testAccounts[1] = bob;

        merkleProofs[alice] = new bytes32[](2);
        merkleProofs[alice][0] = bytes32(
            0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9
        );
        merkleProofs[alice][1] = bytes32(
            0x347dce04eb339ca70588960730ef0cada966bb1d5e10a9b9489a3e0ba47dc1b6
        );

        merkleProofs[bob] = new bytes32[](2);
        merkleProofs[bob][0] = bytes32(
            0x8a3552d60a98e0ade765adddad0a2e420ca9b1eef5f326ba7ab860bb4ea72c94
        );
        merkleProofs[bob][1] = bytes32(
            0x070e8db97b197cc0e4a1790c5e6c3667bab32d733db7f815fbe84f5824c7168d
        );

        vm.startPrank(owner);

        startRegistration = vm.getBlockTimestamp();
        endRegistration = startRegistration + 1 * DAY;

        start = endRegistration + 1 * DAY + 1000;
        end = start + 1 * DAY;

        paymentToken = new MockERC20("USDC", "USDC", 6);
        sale = new Sale(
            address(paymentToken),
            0.2 * 1e6,
            start,
            end,
            250000 ether,
            1250000 ether,
            500000 * 1e6,
            1000000 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setMinContribution(100 * 1e6);

        paymentToken.mint(alice, 300000 * 1e6);
        paymentToken.mint(bob, 300000 * 1e6);

        vm.stopPrank();
    }

    function test_AllocationWhenMinTargetReached() public {
        vm.warp(sale.start());

        vm.startPrank(alice);
        paymentToken.approve(address(sale), 300000 * 1e6);
        sale.buy(sale.paymentTokenToToken(300000 * 1e6), merkleProofs[alice]);
        vm.stopPrank();

        vm.startPrank(bob);
        paymentToken.approve(address(sale), 200000 * 1e6);
        sale.buy(sale.paymentTokenToToken(200000 * 1e6), merkleProofs[bob]);
        vm.stopPrank();

        require(paymentToken.balanceOf(address(sale)) == 500000 * 1e6);

        vm.startPrank(bob);
        paymentToken.approve(address(sale), 100000 * 1e6);
        sale.buy(sale.paymentTokenToToken(100000 * 1e6), merkleProofs[bob]);
        vm.stopPrank();

        vm.warp(sale.end() + 1000);

        require(
            sale.totalUncappedAllocations() ==
                sale.paymentTokenToToken(600000 * 1e6)
        );
        require(
            sale.allocation(address(alice)) ==
                (((300000 * 1e6) / sale.rate()) * 1 ether)
        );
        require(
            sale.allocation(address(bob)) ==
                (((300000 * 1e6) / sale.rate()) * 1 ether)
        );
    }

    function test_RefundsWhenMinTargetNotReached() public {
        vm.warp(sale.start());

        require(bytes32(sale.merkleRoot()) == bytes32(merkleRoot));

        vm.startPrank(alice);
        paymentToken.approve(address(sale), 200 * 1e6);
        sale.buy(sale.paymentTokenToToken(200 * 1e6), merkleProofs[alice]);
        vm.stopPrank();

        require(paymentToken.balanceOf(address(sale)) == 200 * 1e6);

        vm.startPrank(bob);
        paymentToken.approve(address(sale), 100 * 1e6);
        sale.buy(sale.paymentTokenToToken(100 * 1e6), merkleProofs[bob]);
        vm.stopPrank();

        require(
            sale.totalUncappedAllocations() ==
                sale.paymentTokenToToken(300 * 1e6)
        );
        require(
            sale.totalUncappedAllocations() <
                sale.paymentTokenToToken(sale.minTarget())
        );

        vm.warp(sale.end() + 1000);

        require(paymentToken.balanceOf(address(sale)) == 300 * 1e6);

        vm.prank(owner);
        sale.setIndividualCap(1000 ether);

        require(sale.allocation(alice) == 0);
        require(sale.refundAmount(alice) == 200 * 1e6);

        vm.prank(alice);
        sale.refund(alice);

        require(paymentToken.balanceOf(address(sale)) == 100 * 1e6);

        require(sale.allocation(bob) == 0);
        require(sale.refundAmount(bob) == 100 * 1e6);

        vm.prank(bob);
        sale.refund(bob);

        require(paymentToken.balanceOf(address(sale)) == 0 * 1e6);
    }
}
