// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./SocialToken.sol";

contract SocialGroupNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Pausable, Ownable, ERC721Burnable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    //Create Interface
    SocialToken socialToken;

    //Whitelist - address and max minting amount
    mapping (address => bool) private _members;

    //Votes Per User
    mapping (address => uint256) public voteCount;

    //Track Created Referendums In This Group
    Referendum[] public referendums;

    //Track Voters
    address[] public voters;

    struct Referendum {
        string title;
        string description;
        bool complete;
        uint16 yesVotes;
        uint16 noVotes;
        bool isAnonymous;
        uint256 startTime;
        uint256 endTime;
        bool isPrivate;
        address[] refVoters;
    }

    modifier isActive(uint id) {
        require(
            referendums[id].complete == false, 
            "SocialGroup: Referendum is complete!"
        );
        require(
            referendums[id].endTime + referendums[id].startTime > block.timestamp,
            "SocialGroup: Referendum is expired!"
        );
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        address _socialToken,
        address newOwner
    ) ERC721(_name, _symbol) {
        socialToken = SocialToken(_socialToken);
        _transferOwnership(newOwner);
    }

    /* Voting Functions */

    //Create Referendum
    function createReferendum(
        string memory title,
        string memory description,
        bool isAnonymous,
        uint256 endTime, //days
        bool isPrivate
    ) public onlyOwner {
        uint256 lastVote = (block.timestamp + endTime) * 86400;
        Referendum memory newReferendum = Referendum({
            title: title,
            description: description,
            complete: false,
            yesVotes: 0,
            noVotes: 0,
            isAnonymous: isAnonymous,
            startTime: block.timestamp,
            endTime: lastVote,
            isPrivate: isPrivate,
            refVoters: new address[](0)
        });
        
        referendums.push(newReferendum);

        for(uint256 i = 0; i < voters.length; i++){
            address current = voters[i];
            socialToken.mint(current, 1);
        }
    }

    function voteOnReferendum(
        uint id,
        bool voteStatus
    ) public isActive(id) whenNotPaused {
        require(_members[msg.sender], "User is not part of this Social Group");

        Referendum storage referendum = referendums[id];
        
        if (referendum.isPrivate == true){
            require(isHolder(), "You Must Mint Before You Can Vote On This Referendum"); 
        }
        
        if (voteStatus == true) {
            referendum.yesVotes+=1;
        }else {
            referendum.noVotes+=1;
        }

        voters.push(_msgSender());
        referendum.refVoters.push(msg.sender);
        socialToken.burn(_msgSender(), 1);
    }

    function endReferendum(uint id) external onlyOwner isActive(id) {
        referendums[id].complete = true;
    }

    /*
    * Mint NFT for Access to Private Proposals
    */

    function mint() external {
        require(balanceOf(msg.sender) < 1);

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(_msgSender(), tokenId);
        _members[_msgSender()] = true;
        socialToken.mint(_msgSender(), 1);
    }
    
    /*
    * Whitelist Gives Access To Public Proposals Created
    */

    function whitelist(address addresses) external onlyOwner {
        _members[addresses] = true;
    }
  
    //Batch Address Whitelist
    function whitelistBatch(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++){
            _members[addresses[i]] = true;
        }
    }

    function resetVoteCount() external onlyOwner {
        address[] memory votersList = getVoters();
        for (uint256 i = 0; i < votersList.length; i++){
            voteCount[votersList[i]] = 0;
        }

    }

    /* View / Pure Functions */

    function getVoters() public view returns (address[] memory){
        return voters;
    }

    function getRefVoters(uint256 refId) external view returns (address[] memory){
        require(referendums[refId].isAnonymous == false, "This Referendum Is Anonymous");
        return referendums[refId].refVoters;
    }

    function getVoteCount(address user) external view returns(uint256) {
        return voteCount[user];
    }

    function isHolder() internal view returns (bool) {
        require(balanceOf(msg.sender) > 0, "SocialGroupNFT: caller is not authorised");
        return true;
    }

    function viewVotes(uint id) external view returns (uint16[2] memory) {
        uint16[2] memory votes = [referendums[id].yesVotes, referendums[id].noVotes];  
        return votes;
    } 

    /* State Functions */
    
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    /* Inherited Functions */

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}