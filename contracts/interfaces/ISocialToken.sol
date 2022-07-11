// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ISocialToken {
    function setOwner(address _socialGroupFactory) external;
    function setContract(address newContract) external;
    function burn(address account, uint256 amount) external;
    function batchBurn(address[] calldata account, uint256 amount) external;
    function mint(address to, uint256 amount) external;
    function batchMint(address[] calldata to, uint256 amount) external;
}