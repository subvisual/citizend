pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {SaleTestCase2} from "../../../contracts/token/SaleTestCase2.sol";
import {Citizend} from "../../../contracts/token/Citizend.sol";
import {MockERC20} from "../../../contracts/test/MockERC20.sol";

contract SaleTest_Case2 is Test {
    SaleTestCase2 sale;
    Citizend token;
    MockERC20 paymentToken;
    uint256 start;
    uint256 end;
    uint256 startRegistration;
    uint256 endRegistration;

    address owner = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    address alice = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address bob = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    address carol = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;
    address dave = 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65;
    address foo = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;

    bytes32 merkleRoot = 0xca793131b5e8e14eaaa750e96f6e157bdc07e5ec5fbcd6d42ffe79fbc05065ef;
    bytes32[] aliceMerkleProof = new bytes32[](3);
    bytes32[] bobMerkleProof = new bytes32[](3);
    bytes32[] carolMerkleProof = new bytes32[](3);
    bytes32[] daveMerkleProof = new bytes32[](2);
    bytes32[] fooMerkleProof = new bytes32[](2);

    uint256 paymentTokenMultiplier;
    uint256 rate;
    uint256 minContribution;
    uint256 minPrice;

    event Purchase(address indexed from, uint256 paymentTokenAmount, uint256 tokenAmount);

    event Claim(address indexed to, uint256 tokenAmount);
    event Refund(address indexed to, uint256 paymentTokenAmount);

    function setUp() public {
        vm.startPrank(owner);

        startRegistration = 1714089600;
        endRegistration = 1714694400;

        start = vm.getBlockTimestamp();
        end = start + 60 * 60 * 24;

        aliceMerkleProof[0] = bytes32(0x1ebaa930b8e9130423c183bf38b0564b0103180b7dad301013b18e59880541ae);
        aliceMerkleProof[1] = bytes32(0x4ed9d015110a35000ce5c94f94ccdc63653ddd26af11314d386ae5e65ef28c79);
        aliceMerkleProof[2] = bytes32(0xa22d2d4af6076ff70babd4ffc5035bdce39be98f440f86a0ddc202e3cd935a59);

        bobMerkleProof[0] = bytes32(0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9);
        bobMerkleProof[1] = bytes32(0xb1a5bda84b83f7f014abcf0cf69cab5a4de1c3ececa8123a5e4aaacb01f63f83);
        bobMerkleProof[2] = bytes32(0xa22d2d4af6076ff70babd4ffc5035bdce39be98f440f86a0ddc202e3cd935a59);

        carolMerkleProof[0] = bytes32(0x00314e565e0574cb412563df634608d76f5c59d9f817e85966100ec1d48005c0);
        carolMerkleProof[1] = bytes32(0x4ed9d015110a35000ce5c94f94ccdc63653ddd26af11314d386ae5e65ef28c79);
        carolMerkleProof[2] = bytes32(0xa22d2d4af6076ff70babd4ffc5035bdce39be98f440f86a0ddc202e3cd935a59);

        daveMerkleProof[0] = bytes32(0xe5c951f74bc89efa166514ac99d872f6b7a3c11aff63f51246c3742dfa925c9b);
        daveMerkleProof[1] = bytes32(0xb4316902345b116c2107a907acd1ddb3b8bdb6ac431c386e16ffc220ab1943b0);

        fooMerkleProof[0] = bytes32(0xf4ca8532861558e29f9858a3804245bb30f0303cc71e4192e41546237b6ce58b);
        fooMerkleProof[1] = bytes32(0xb4316902345b116c2107a907acd1ddb3b8bdb6ac431c386e16ffc220ab1943b0);

        paymentToken = new MockERC20("USDC", "USDC", 6);
        token = new Citizend(owner, end);

        paymentTokenMultiplier = 10 ** paymentToken.decimals();
        rate = (5 * paymentTokenMultiplier) / 10;
        minContribution = (2 * paymentTokenMultiplier) / 10;

        sale = new SaleTestCase2(
            address(paymentToken),
            rate,
            start,
            end,
            2000 ether, // tokens for sale
            1000 * 1e6,
            2000 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setToken(address(token));
        sale.setMinContribution(minContribution);

        token.transfer(address(sale), 1000000 ether);

        vm.stopPrank();

        vm.startPrank(alice);

        paymentToken.mint(alice, 100_000_000 * 1e6);
        paymentToken.approve(address(sale), 100_000_000 * 1e6);

        vm.stopPrank();

        vm.startPrank(bob);

        paymentToken.mint(bob, 100_000_000 * 1e6);
        paymentToken.approve(address(sale), 100_000_000 * 1e6);

        vm.stopPrank();

        vm.startPrank(carol);

        paymentToken.mint(carol, 100_000_000 * 1e6);
        paymentToken.approve(address(sale), 100_000_000 * 1e6);

        vm.stopPrank();

        vm.startPrank(dave);

        paymentToken.mint(dave, 100_000_000 * 1e6);
        paymentToken.approve(address(sale), 100_000_000 * 1e6);

        vm.stopPrank();

        vm.startPrank(foo);

        paymentToken.mint(foo, 100_000_000 * 1e6);
        paymentToken.approve(address(sale), 100_000_000 * 1e6);

        vm.stopPrank();
    }

    function test_case2() public {
        vm.startPrank(alice);

        sale.buy(401 ether, aliceMerkleProof);
        vm.stopPrank();

        vm.startPrank(bob);
        sale.buy(400 ether, bobMerkleProof);
        vm.stopPrank();

        vm.startPrank(carol);
        sale.buy(1200 ether, carolMerkleProof);
        vm.stopPrank();

        vm.startPrank(dave);
        sale.buy(1200 ether, daveMerkleProof);
        vm.stopPrank();

        vm.startPrank(foo);
        sale.buy(1200 ether, fooMerkleProof);
        vm.stopPrank();

        vm.warp(sale.end() + 1000);
        vm.startPrank(owner);
        sale.setIndividualCap(400 ether);
        vm.stopPrank();

        require(sale.currentTokenPrice() == 2 * 1e6);
        require(sale.allocation(alice) == 400 ether);

        console2.log("uncappedAllocation", sale.uncappedAllocation(alice));
        console2.log("allocation", sale.allocation(alice));

        require(sale.refundAmount(alice) == 0 * 1e6);
    }
}
