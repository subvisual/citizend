// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IVesting} from "./Vesting.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

interface ISale {
    /// The $CTND token
    function token() external view returns (address);

    /// The $aUSD token
    function paymentToken() external view returns (address);

    /// How many $CTND will be received for the given payment amount
    function calculateAmount(uint256 _paymentAmount)
        external
        view
        returns (uint256);

    /**
     * Buy some $CTND, in exchange for a fixed amount of $aUSD
     *
     * @dev aUSD allowance must be previously set by spender
     *
     * @dev Should fail if not enough $CTND tokens are left in the contract
     *
     * TODO probably should allow a partial purchase?
     */
    function buy(uint256 _paymentAmount) external;
}

/**
 * Citizend token sale contract
 *
 * Users interact with this contract to deposit $aUSD in exchange for $CTND.
 * The contract should hold all $CTND tokens meant to be distributed in the public sale
 *
 * The $CTND are vested on this same contract, according to the logic inherited from {Vesting}
 *
 * @dev Remove `abstract` when fully implemented
 */
contract Sale is ISale {
    address public token;
    address public paymentToken;

    uint256 public tokenPrice;

    event Purchase(address from, uint256 amount);

    constructor(
        uint256 _tokenPrice,
        address _token,
        address _paymentToken
    ) {
        require(_tokenPrice > 0, "can't be zero");
        require(_token != address(0), "can't be zero");
        require(_paymentToken != address(0), "can't be zero");

        tokenPrice = _tokenPrice;
        token = _token;
        paymentToken = _paymentToken;
    }

    function calculateAmount(uint256 _paymentAmount)
        external
        view
        returns (uint256)
    {
        require(_paymentAmount > 0, "can't be zero");

        return _paymentAmount / tokenPrice;
    }

    function buy(uint256 _paymentAmount) external {
        require(_paymentAmount > 0, "can't be zero");

        IERC20(paymentToken).transferFrom(
            msg.sender,
            address(this),
            _paymentAmount
        );

        // vesting.registerNewPublicVesting(msg.sender, 1);

        emit Purchase(msg.sender, _paymentAmount);
    }
}
