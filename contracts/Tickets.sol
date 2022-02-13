// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Tickets is ERC20 {
  
  constructor(address creator) ERC20("Tickets", "TCS"){
    manager = creator;
  }
  
  //Structure for each ticket
  struct Ticket {
    string title;
    string description;
    bool complete;
    uint minVotes;
    mapping(address => bool) votes;
  }

  address public manager;
  uint public voterCount;

  mapping(address => bool) public voters;
  
  //Track created Tickets
  uint numTickets;
  mapping(uint => Ticket) tickets;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  //Vote on the Ticket
  function vote() public payable {
    require(voters[msg.sender] == false);
    voters[msg.sender] = true;
    voterCount++;
  }

  //Create Ticket
  function createTicket(string memory title, string memory description, uint minVotes) public restricted {
    Ticket storage newTicket = tickets[numTickets++];
    newTicket.title = title;
    newTicket.description = description;
    newTicket.complete= false;
    newTicket.minVotes = minVotes;
  }

  function finaliseTicket(uint index) public restricted {
    Ticket storage ticket = tickets[index];

    require(ticket.minVotes < (voterCount));
    require(!ticket.complete);

    ticket.complete = true;
  }

  function getSummary() public view returns (uint,uint,address){
    return (
      numTickets,
      voterCount,
      manager
    );
  }

  function getTickets() public view returns (uint){
    return numTickets;
  }

}
