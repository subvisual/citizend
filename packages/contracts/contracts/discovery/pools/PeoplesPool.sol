// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {Pool} from "./Pool.sol";
import {IBatch} from "../interfaces/IBatch.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PeoplesPool is Pool {
    constructor(uint256 _saleSupply, address _investmentToken, address _controller)
        Pool(_saleSupply, _investmentToken, _controller)
    {}

    function invest(
        address _user,
        address _project,
        address _batch,
        uint256 _amount
    ) onlyController {
        require(IBatch(_batch).canInvestInPeoplesPool(_user, _project));

        // payment token to be defined
        require(
            IERC20(paymentToken).balanceOf(address(this)) >=
                investedAmount + _amount
        );
    }
}
