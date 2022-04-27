// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import './Tickets.sol';

contract Factory {

  Tickets[] public deployedTickets;
  uint public titleId;

  function createProposal(uint studentID, string memory description, uint goal) public {
    titleId = studentID;
    Tickets newTicket = new Tickets(msg.sender, studentID, description, goal);
    deployedTickets.push(newTicket);
  }

  function viewTickets() public view returns (Tickets[] memory ){
    return deployedTickets;
  }

  function viewId() public view returns (uint){
    return titleId;
  }

}
