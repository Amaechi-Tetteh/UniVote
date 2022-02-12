// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Tickets is ERC20 {
  
  constructor(uint minimum, address creator) ERC20("Tickets", "TCS"){
    manager = creator;
    minimumContribution = minimum;
  }
  struct Ticket {
    string title;
    string description;
    uint value;
    address recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) votes;
  }

  Ticket[] public TicketList; 
  address public manager;
  uint public minimumContribution;
  uint public voterCount;
  mapping(address => bool) public voters;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }


}
