// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * For now, just a basic token with 100 million supply
 */
contract Citizend is ERC20 {
    constructor() ERC20("Citizend", "CTND") {
        _mint(msg.sender, 1e9 ether);
    }
}
