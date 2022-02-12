// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import './Tickets.sol';

contract Factory {

  Tickets[] public deployedTickets;
  
  function createTicket(uint minimum) public {
    Tickets newTicket = new Tickets(minimum, payable(msg.sender));
    deployedTickets.push(newTicket);
  }

  function viewTickets() public view returns (Tickets[] memory ){
    return deployedTickets;
  }

}
