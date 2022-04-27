// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Tickets is ERC20 {
  
  constructor(address creator, uint studentId, string memory desc, uint goal) ERC20("Tickets", "TCS"){
    manager = creator;
    studentID = studentId;
    description = desc;
    voteGoal = goal;
  }
  
  //Structure for each ticket
  //add name / student number
  struct Ticket {
    string title;
    string name;
    string studentId;
    string description;
    bool complete;
    uint minVotes;
    mapping(address => bool) votes;
  }

  //Summary Values
  address public manager;
  uint public studentID;
  string public description;
  uint public voteGoal;
  uint public voterCount;

  mapping(address => bool) public voters;
  
  //Track created Tickets
  // uint numTickets;
  // mapping(uint => Ticket) tickets;

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
  // function createTicket(string memory title, string memory name, string memory description, uint minVotes) public restricted {
  //   Ticket storage newTicket = tickets[numTickets++];
  //   newTicket.title = title;
  //   newTicket.name = name;
  //   newTicket.description = description;
  //   newTicket.complete = false;
  //   newTicket.minVotes = minVotes;
  // }

  //trending feature track which ticket has most votes
  //add function for users to add comments

  // function finaliseTicket(uint index) public restricted {
  //   Ticket storage ticket = tickets[index];

  //   require(ticket.minVotes < (voterCount));
  //   require(!ticket.complete);

  //   ticket.complete = true;
  // }

  //View Ticket Stats
  function getSummary() public view returns (uint,uint,address,string memory,uint){
    return (
      studentID,
      voterCount,
      manager,
      description,
      voteGoal
    );
  }

  //View Voters
  function viewVoters() public view returns ()

  // function getTickets() public view returns (uint){
  //   return numTickets;
  // }

  // function getId() public view returns (uint){
  //   return studentID;
  // }

}