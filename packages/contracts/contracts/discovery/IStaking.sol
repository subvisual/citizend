// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface IStaking {
    /**
     * Stakes the given amount of tokens, using the `msg.sender` as the
     * staker.
     *
     * @dev Emits a `StakeFunds` event.
     *
     * @param amount The amount of tokens to stake.
     */
    function stake(uint256 amount) external;

    /**
     * Unbonds the given amount of tokens, using the `msg.sender` as the
     * staker. The staker must have already staked the given amount of
     * tokens.
     *
     * @dev Emits a `Unbond` event.
     * @dev Uses a mapping to handle the different unbondings, but from the
     * caller's side it's treated as a single pool.
     *
     * @param amount The amount of tokens to unbond.
     */
    function unbond(uint256 amount) external;

    /**
     * Rebonds the given amount of tokens for `msg.sender`. It requires that
     * there are enough funds that are still unbonding or that have been
     * unbonded but not yet withdrawn.
     *
     * @dev Emits a `Rebond` event.
     *
     * @param amount The amount of tokens to rebond.
     */
    function rebond(uint256 amount) external;

    /**
     * Withdraws the given amount of tokens. Requires that the staker has the
     * amount unbonded.
     *
     * @dev Emits a `Withdraw` event.
     *
     * @param amount The amount of tokens to withdraw.
     */
    function withdraw(uint256 amount) external;
}
