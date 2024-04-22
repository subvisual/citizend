// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Pausable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

/**
 * {ERC20} token, including:
 *
 *  - preminted initial supply (100 million)
 *  - ability for holders to burn (destroy) their tokens
 *  - a pauser role that allows to stop all token transfers
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles - head to its documentation for details.
 *
 * The account that deploys the contract will be granted the pauser role, as
 * well as the default admin role, which will let it grant the pauser role to
 * other accounts.
 */
contract Citizend is ERC20, ERC20Burnable, ERC20Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    uint public lockEnd;

    error TooEarly(uint time);

    modifier onlyAfter(uint time) {
        if (block.timestamp <= time) revert TooEarly(time);
        _;
    }

    /**
     * Grants `DEFAULT_ADMIN_ROLE` and `PAUSER_ROLE` to the target owner
     * that is passed in as an argument.
     *
     * See {ERC20-constructor}.
     */
    constructor(address _targetOwner, uint _lockEnd) ERC20("Citizend", "CTND") {
        _grantRole(DEFAULT_ADMIN_ROLE, _targetOwner);
        _grantRole(PAUSER_ROLE, _targetOwner);
        _mint(msg.sender, 1e8 ether);
        lockEnd = _lockEnd;
    }

    function _update(
        address from,
        address to,
        uint256 value
    ) internal virtual override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }

    /**
     * Pauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_pause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function pause() external virtual onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * Unpauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_unpause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function unpause()
        external
        virtual
        onlyRole(PAUSER_ROLE)
        onlyAfter(lockEnd)
    {
        _unpause();
    }

    /**
     * Unpauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_unpause}.
     *
     * Requirements:
     *
     * - the time must be after the lockEnd
     */
    function unpausePublic() external virtual onlyAfter(lockEnd) {
        _unpause();
    }
}
