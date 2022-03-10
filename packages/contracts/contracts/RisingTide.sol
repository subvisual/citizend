// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;
library Math {
  /**
   * @dev Return the smallest of the two arguments.
   */
  function min(uint256 a, uint256 b) internal pure returns (uint256) {
    return a < b ? a : b;
  }

  /**
   * @dev Return the largest of the two arguments.
   */
  function max(uint256 a, uint256 b) internal pure returns (uint256) {
    return b < a ? a : b;
  }
}

contract RisingTide {
  using Math for uint256;

  enum States {
    Receiving,   // contract is currently accepting deposits
    SettingCap,  // deposits are closed. contract is computing the final cap
    Distributing // cap is set. claims and refunds are open
  }

  struct CapValidation {
    uint256 index;
    uint256 sumForCap;
    uint256 sumForNextCap;
    uint256 largest;
  }

  uint256 constant public CAP_VALIDATION_GAS_LIMIT = 100000;
  // investor_id => amount
  mapping(uint256 => uint256) public amounts;
  uint256 public investorCount;
  uint256 public totalInvested;
  uint256 public maxInvestment;

  States public state;
  uint256 public cap;
  CapValidation cachedValidation;


  function invest(uint256 _id, uint256 _amount) external {
    if (amounts[_id] == 0) {
      ++investorCount;
    }

    amounts[_id] += _amount;
    totalInvested += _amount;

    if (amounts[_id] > maxInvestment) {
      maxInvestment = amounts[_id];
    }
  }

  function setCap(uint256 _cap) external returns (bool) {
    require(state == States.SettingCap);

    cap = _cap;
    cachedValidation = CapValidation(0, 0, 0, 0);

    return continueCapValidation();
  }

 function continueCapValidation() public returns (bool) {
    require(state == States.SettingCap);

    // copy the whole struct to memory
    CapValidation memory validation = cachedValidation;

    for (; validation.index < investorCount && gasleft() > CAP_VALIDATION_GAS_LIMIT; ++validation.index) {
      uint256 amount = amounts[validation.index];

      validation.sumForCap += amount.min(cap);
      validation.sumForNextCap += amount.min(cap + 1);
      validation.largest = Math.max(validation.largest, amount);
    }

    cachedValidation = validation;

    if (validation.index == investorCount) {
      bool valid = validCap( cap, validation);

      if (valid) {
        state = States.Distributing;
      }
      return valid;
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
  function validCap(
    uint256 _cap,
    CapValidation memory _validation
  ) internal view returns (bool) {
    require(_validation.largest <= totalInvested);
    require(_validation.sumForCap<= totalInvested);
    require(_validation.sumForNextCap <= totalInvested);

    if (totalInvested <= maxInvestment) {
      return _cap == _validation.largest;
    } else {
      return (
        _validation.sumForNextCap > maxInvestment&&
        _validation.sumForCap <=maxInvestment
      );
    }
  }


}
