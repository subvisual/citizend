pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Sale} from "../../../contracts/token/Sale.sol";
import {MockERC20} from "../../../contracts/test/MockERC20.sol";
import "forge-std/console.sol";

contract SaleMaxTargetReachedTest is Test {
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

    bytes32[] alicemerkleproof = new bytes32[](2);

    uint256 day = 60 * 60 * 24;

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
        endRegistration = startRegistration + 1 * day;

        start = endRegistration + 1 * day + 1000;
        end = start + 1 * day;

        paymentToken = new MockERC20("usdc", "usdc", 18);
        sale = new Sale(
            address(paymentToken),
            0.2 ether,
            start,
            end,
            2500000 ether,
            500000 ether,
            1000000 ether,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setMinContribution(sale.paymentTokenToToken(100 ether));

        paymentToken.mint(alice, 2000000 ether);
        paymentToken.mint(bob, 2000000 ether);

        vm.stopPrank();
    }

    function test_BuyRevertsWhenMaxTargetReached() public {
        vm.startPrank(owner);
        sale.setMaxTarget(1 ether);
        sale.setMinContribution(1 ether);
        vm.stopPrank();

        vm.warp(sale.start());

        vm.startPrank(alice);
        paymentToken.approve(address(sale), 2 ether);
        sale.buy(sale.paymentTokenToToken(2 ether), merkleProofs[alice]);
        vm.stopPrank();

        vm.startPrank(bob);
        paymentToken.approve(address(sale), 1 ether);

        uint256 amount = sale.paymentTokenToToken(1 ether);

        vm.expectRevert(Sale.MaxContributorsReached.selector);
        sale.buy(amount, merkleProofs[bob]);

        vm.stopPrank();
    }

    function test_AllocationAfterMaxTargetReached() public {
        vm.warp(sale.start());

        vm.startPrank(alice);
        paymentToken.approve(address(sale), 2000000 ether);
        sale.buy(sale.paymentTokenToToken(2000000 ether), merkleProofs[alice]);
        vm.stopPrank();

        vm.startPrank(bob);
        paymentToken.approve(address(sale), 2000000 ether);
        sale.buy(sale.paymentTokenToToken(2000000 ether), merkleProofs[bob]);
        vm.stopPrank();

        vm.warp(sale.end() + 1000);

        vm.prank(owner);
        sale.setIndividualCap(1250000 ether);

        require(sale.risingTide_isValidCap() == true);
        require(sale.allocation(address(alice)) == 1250000 ether);
        require(sale.allocation(address(bob)) == 1250000 ether);
    }
}
