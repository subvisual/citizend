// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * An ERC20 token meant for testing purposes (free minting & burning)
 */
contract MockERC20 is ERC20 {
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        _mint(msg.sender, 1e9 ether);
    }

    function mint(address _to, uint256 _amount) external {
        _mint(_to, _amount);
    }

    function burn(address _from, uint256 _amount) external {
        _burn(_from, _amount);
    }
}
