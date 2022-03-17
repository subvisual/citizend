// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract FractalRegistry {
    address root;
    mapping(address => bool) delegates;

    mapping(address => bytes32) fractalIdForAddress;
    mapping(string => mapping(bytes32 => bool)) userLists;

    constructor(address _root) {
        root = _root;
    }

    function getFractalId(address addr) public view returns (bytes32) {
        return fractalIdForAddress[addr];
    }
    function addUserAddress(address addr, bytes32 fractalId) public {
        requireMutatePermission();
        fractalIdForAddress[addr] = fractalId;
    }

    function isUserInList(bytes32 userId, string memory listId) public view returns (bool) {
        return userLists[listId][userId];
    }
    function addUserToList(bytes32 userId, string memory listId) public {
        requireMutatePermission();
        userLists[listId][userId] = true;
    }
    function removeUserFromList(bytes32 userId, string memory listId) public {
        requireMutatePermission();
        delete userLists[listId][userId];
    }

    function addDelegate(address addr) public {
        require(msg.sender == root, "Must be root");
        delegates[addr] = true;
    }
    function removeDelegate(address addr) public {
        require(msg.sender == root || msg.sender == addr, "Not allowed to remove address");
        delete delegates[addr];
    }
    function requireMutatePermission() private view {
        require(msg.sender == root || delegates[msg.sender], "Not allowed to mutate");
    }
}
