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

        paymentToken = new MockERC20("USDC", "USDC", 18);
        token = new Citizend(owner);
        sale = new Sale(
            address(paymentToken),
            1 ** 18,
            start,
            end,
            1000000000000000000000000,
            1000000,
            2000000,
            startRegistration,
            endRegistration
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

    function testConstructor() public {
        require(sale.paymentToken() == address(paymentToken));
        require(sale.rate() == 1);
        require(sale.start() == start);
        require(sale.end() == end);
        require(sale.hasRole(sale.DEFAULT_ADMIN_ROLE(), owner));
        require(sale.hasRole(sale.CAP_VALIDATOR_ROLE(), owner));
    }

    function testBuy() public {
        vm.startPrank(alice);
        vm.expectEmit();

        emit Purchase(address(alice), 1, 1 ether);

        sale.buy(1 ether);

        require(sale.risingTide_totalAllocatedUncapped() == 1 ether);

        vm.stopPrank();
    }

    function testBuyBelowMinimum() public {
        vm.prank(owner);
        sale.setMinContribution(2 ether);

        vm.startPrank(alice);

        vm.expectRevert(bytes("can't be below minimum"));
        sale.buy(1 ether);

        sale.buy(2 ether);

        require(sale.risingTide_totalAllocatedUncapped() == 2 ether);

        vm.stopPrank();
    }

    function testBuyAboveMaximum() public {
        vm.prank(owner);

        sale.setMaxContribution(2 ether);

        vm.startPrank(alice);

        vm.expectRevert(bytes("can't be above maximum"));
        sale.buy(3 ether);

        sale.buy(2 ether);

        require(sale.risingTide_totalAllocatedUncapped() == 2 ether);

        vm.stopPrank();
    }

    function testBuyAndClaim() public {
        require(token.balanceOf(alice) == 0 ether);

        vm.prank(alice);
        sale.buy(2 ether);

        vm.warp(end + 1000);

        require(sale.uncappedAllocation(address(alice)) == 2 ether);

        vm.prank(owner);
        sale.setIndividualCap(2 ether);

        require(sale.risingTide_isValidCap(), "not valid cap");
        require(sale.allocation(address(alice)) == 2 ether);

        vm.expectEmit();
        emit Claim(address(alice), 2 ether);

        vm.prank(alice);
        sale.claim();

        require(token.balanceOf(alice) == 2 ether);
    }
}
