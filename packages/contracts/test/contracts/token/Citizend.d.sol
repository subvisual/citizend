pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Citizend} from "../../../contracts/token/Citizend.sol";

contract CitizendConstructorTest is Test {
    address constant alice = address(0x1);

    function testSetsCorrectParameters() public {
        Citizend ctnd = new Citizend(alice, 0);

        require(_stringEq(ctnd.name(), "Citizend"));
        require(_stringEq(ctnd.symbol(), "CTND"));
    }

    function testInitialMint() public {
        Citizend ctnd = new Citizend(alice, 0);

        uint256 expectedSupply = 1e8 ether;
        require(ctnd.totalSupply() == expectedSupply, "wrong supply");
        require(
            ctnd.balanceOf(address(this)) == expectedSupply,
            "wrong balance"
        );
    }

    function _stringEq(
        string memory s1,
        string memory s2
    ) internal returns (bool) {
        return
            keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }
}
