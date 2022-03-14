// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {Math} from "./Math.sol";

/**
 * Abstract implementation of a Rising Tide Calculator
 *
 * @dev In addition to implementing this interface, the contract must also
 * ensure no investments are possible once the Rising Tide calculation kicks in
 */
abstract contract RisingTideCalculator is IRisingTideInvestable {
  //
  // Libraries
  //
  using Math for uint256;

  //
  // Structs
  //
  enum RisingTideState {
    NotSet,     // cap not yet given, or invalid
    Validating, // cap has been given, but still being validated
    Finished    // cap is set. claims and refunds are open
  }

  struct RisingTideCache {
    uint256 index;         // what index are we at
    uint256 sumForCap;     // cumulative investments with given cap
    uint256 sumForNextCap; // cumulative investments with next cap
    uint256 largest;       // largest investment so far
  }

  //
  // Constants
  //
  uint256 constant public CAP_VALIDATION_GAS_LIMIT = 100000;

  //
  // State
  //

  /// Current state of the calculation
  RisingTideState public risingTideState;

  /// Calculation cache
  RisingTideCache public risingTideCache;

  /// The currently set cap
  uint256 public cap;

  //
  // Virtual Interface
  //

  /// @return How many individual investors exist
  function investorCount() public view virtual returns (uint256);

  /// @param n Index to look for
  /// @return Amount of the nth investor
  function investorAmountAt(uint256 n) public view virtual returns (uint256);

  /// @return Total amount invested
  function totalInvested() public view virtual returns (uint256);

  /// @return amount corresponding to the largest individual investor
  function maxInvestment() public view virtual returns (uint256);

  function _risingTide_setCap(uint256 _cap) internal returns (bool) {
    require(risingTideState==RisingTideState.NotSet, "already set or in progress");

    cap = _cap;
    risingTideState=RisingTideState.Validating;
    risingTideCache = RisingTideCache(0, 0, 0, 0);

    return risingTide_continueRisingTideValidation();
  }

 function risingTide_continueRisingTideValidation() public returns (bool) {
    require(risingTideState== RisingTideState.Validating);

    // copy the whole struct to memory
    RisingTideCache memory validation = risingTideCache;
    uint256 count = investorCount();

    for (; validation.index < investorCount() && gasleft() > CAP_VALIDATION_GAS_LIMIT; ++validation.index) {
      uint256 amount = investorAmountAt(validation.index);

      validation.sumForCap += amount.min(cap);
      validation.sumForNextCap += amount.min(cap + 1);
      validation.largest = Math.max(validation.largest, amount);
    }

risingTideCache=validation;

    if (validation.index == investorCount()) {
      if (_risingTide_validCap(cap, validation)) {
        risingTideState= RisingTideState.Finished;
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   * @dev Determine if the given rising tide cap is valid.
   *
   * If the maximum investment is not reached, the rising tide cap does not
   * have an upper bound. In this scenario, the cap is conventioned to be the
   * largest individual investment.
   *
   * If the maximum investment is reached, the rising tide cap is defined as
   * the highest possible cap such that the sum of all contributions with the
   * cap applied does not exceed the maximum investment. This means that the
   * sum of all contirbutions with any cap above the rising tide cap applied
   * would exceed the maximum investment limit.
   *
   * @param _cap Rising tide cap to be validated, in wei.
   * @param _validation The calculated CapValidation struct
   *
   * @return true if `cap` is a valid rising tide cap for the given parameters.
   */
  function _risingTide_validCap(
    uint256 _cap,
    RisingTideCache memory _validation
  ) internal view returns (bool) {
    uint256 total = totalInvested();
    uint256 max = maxInvestment();

    require(_validation.largest <= total);
    require(_validation.sumForCap<= total);
    require(_validation.sumForNextCap <= total);

    if (total <= max) {
      return _cap == _validation.largest;
    } else {
      return (
        _validation.sumForNextCap > max &&
        _validation.sumForCap <= max
      );
    }
  }


}
