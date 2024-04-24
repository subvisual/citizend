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

    bytes32 merkleRoot = 0xa5c09e2a9128afef7246a5900cfe02c4bd2cfcac8ac4286f0159a699c8455a49;
    bytes32[] merkleProof = new bytes32[](2);

    event Purchase(
        address indexed from,
        uint256 paymentTokenAmount,
        uint256 tokenAmount
    );

    event Claim(address indexed to, uint256 tokenAmount);

    function setUp() public {
        vm.startPrank(owner);

        startRegistration = 1714089600;
        endRegistration = 1714694400;

        start = vm.getBlockTimestamp();
        end = start + 60 * 60 * 24;

        merkleProof[0] = bytes32(0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9);
        merkleProof[1] = bytes32(0x347dce04eb339ca70588960730ef0cada966bb1d5e10a9b9489a3e0ba47dc1b6);

        paymentToken = new MockERC20("USDC", "USDC", 18);
        token = new Citizend(owner, end);
        sale = new Sale(
            address(paymentToken),
            5 ether,
            start,
            end,
            1000000000000000000000000,
            1000000,
            2000000,
            startRegistration,
            endRegistration,
            merkleRoot
        );

        sale.setToken(address(token));
        sale.setMaxContribution(4 ether);

        token.transfer(address(sale), 1000000 ether);

        vm.stopPrank();

        vm.startPrank(alice);

        paymentToken.mint(alice, 100 ether);
        paymentToken.approve(address(sale), 100 ether);

        vm.stopPrank();
    }

    function testConstructor() public view {
        require(sale.paymentToken() == address(paymentToken));
        require(sale.rate() == 5 ether);
        require(sale.start() == start);
        require(sale.end() == end);
        require(sale.hasRole(sale.DEFAULT_ADMIN_ROLE(), owner));
        require(sale.hasRole(sale.CAP_VALIDATOR_ROLE(), owner));
        require(bytes32(sale.merkleRoot()) == bytes32(merkleRoot));
    }

    function testBuy() public {
        vm.startPrank(alice);

        uint256 beforeBalance = paymentToken.balanceOf(alice);
        require(beforeBalance == 100 ether);

        vm.expectEmit();

        emit Purchase(address(alice), 5 ether, 1 ether);

        sale.buy(1 ether, merkleProof);

        uint256 afterBalance = paymentToken.balanceOf(alice);
        require(afterBalance == 95 ether);

        require(sale.risingTide_totalAllocatedUncapped() == 1 ether);

        vm.stopPrank();
    }

    function testBuyMinimum() public {
        vm.startPrank(alice);
        vm.expectEmit();

        emit Purchase(address(alice), 1 ether, 0.2 ether);

        sale.buy(0.2 ether, merkleProof);

        require(sale.risingTide_totalAllocatedUncapped() == 0.2 ether);

        vm.stopPrank();
    }

    function testBuyBelowMinimum() public {
        vm.prank(owner);
        sale.setMinContribution(2 ether);

        vm.startPrank(alice);

        vm.expectRevert(bytes("can't be below minimum"));
        sale.buy(1 ether, merkleProof);

        sale.buy(2 ether, merkleProof);

        require(sale.risingTide_totalAllocatedUncapped() == 2 ether);

        vm.stopPrank();
    }

    function testBuyMaximum() public {
        vm.startPrank(alice);
        vm.expectEmit();

        emit Purchase(address(alice), 2 ether, 0.4 ether);

        sale.buy(0.4 ether, merkleProof);

        require(sale.risingTide_totalAllocatedUncapped() == 0.4 ether);

        vm.stopPrank();
    }

    function testBuyAboveMaximum() public {
        vm.prank(owner);

        sale.setMaxContribution(2 ether);

        vm.startPrank(alice);

        vm.expectRevert(bytes("can't be above maximum"));
        sale.buy(3 ether, merkleProof);

        sale.buy(2 ether, merkleProof);

        require(sale.risingTide_totalAllocatedUncapped() == 2 ether);

        vm.stopPrank();
    }
}
