// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SocialToken is ERC20, Ownable {
    
    //Track Created Contracts for Social Groups
    mapping(address => bool) private _contracts;

    //Set in factory contract
    modifier onlyContract() {
        require(_contracts[_msgSender()], "Ownable: caller is not the owner");
        _;
    }

    constructor() ERC20("SocialToken", "STK") {
    }

    function setOwner(address _socialGroupFactory) external onlyOwner {
        transferOwnership(_socialGroupFactory);
    }

    function setContract(address newContract) 
        onlyOwner
        external
    {
        _contracts[newContract] = true;
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20)
    {
        super._burn(account, amount);
    }

    function burn(address account, uint256 amount)
        external
        onlyContract
    {
        super._burn(account, amount);
    }

    function batchBurn(address[] calldata account, uint256 amount)
        external
        onlyContract
    {
        for (uint256 i = 0; i < account.length; i++){
          super._burn(account[i], amount);
        }
    } 

    function mint(address to, uint256 amount)
        external
        onlyContract
    {
        super._mint(to, amount);
    }

    function batchMint(address[] calldata to, uint256 amount)
        external
        onlyContract
    {
        for (uint256 i = 0; i < to.length; i++){
          super._mint(to[i], amount);
        } 
    }
}