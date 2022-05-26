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

    SocialToken socialToken;

    //Whitelist - address and max minting amount
    mapping (address => uint256) private _whitelist;

    //Votes Per User
    mapping (address => uint256) public voteCount;

    //Track Created Referendums In This Group
    Referendum[] public referendums;

    //Track Voters
    address[] public voters;
    
    bool isPublic;

    struct Referendum {
        bytes32 title;
        string description;
        bool complete;
        uint16 yesVotes;
        uint16 noVotes;
        bool isAnonymous;
        uint256 startTime;
        uint256 endTime;
        bool isPrivate;
    }

    modifier isActive(uint id) {
        require(
            referendums[id].complete = false, 
            "SocialGroup: Referendum is expired!"
        );
        require(
            referendums[id].endTime > referendums[id].startTime,
            "SocialGroup: Referendum is expired!"
        );
        referendums[id].complete = true;
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        address _socialToken
    ) ERC721(_name, _symbol) {
        socialToken = SocialToken(_socialToken);
    }

    function getVoters() external view returns (address[] memory){
        return voters;
    }

    function getVoteCount(address user) external view returns(uint256) {
        return voteCount[user];
    }

    function resetVoteCount(address user) external returns(bool){
        voteCount[user] = 0;
        return true;
    }

    //Create Referendum
    function createReferendum(
        bytes32 title,
        string memory description,
        bool isAnonymous,
        uint256 endTime,
        bool isPrivate
    ) public onlyOwner {
        Referendum memory newReferendum = Referendum({
           title: title,
           description: description,
           complete: false,
           yesVotes: 0,
           noVotes: 0,
           isAnonymous: isAnonymous,
           startTime: block.timestamp,
           endTime: endTime, //seconds
           isPrivate: isPrivate
        });

        referendums.push(newReferendum);
    }

    function voteOnReferendum(
        uint id,
        bool voteStatus
    ) public isActive(id) whenNotPaused {
        Referendum storage referendum = referendums[id];
        
        if (referendum.isPrivate == true){
            require(isHolder()); 
        }
        
        if (voteStatus == true) {
            referendum.yesVotes+=1;
        }else {
            referendum.noVotes+=1;
        }

        voters.push(_msgSender());
        socialToken.burn(_msgSender(), 1);
    }

    function endReferendum(uint id) external onlyOwner isActive(id) returns (bool){
        return true;
    }

    function isHolder() internal view returns (bool) {
        require(_msgSender().balance > 0, "SocialGroupNFT: caller is not authorised");
        return true;
    }

    //Air Drop NFT to recipient address
    function air_drop(address[] calldata _recipient) external onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        for (uint256 i = 0; i < _recipient.length; i++){
            _tokenIdCounter.increment();
            _safeMint(_recipient[i], tokenId);
            _whitelist[_recipient[i]];
            socialToken.batchMint(_recipient, 1);
        } 
    }

    //Single Address Whitelist 
    function whitelist(address addresses, uint8 maxMint) external onlyOwner {
        _whitelist[addresses] = maxMint;
    }
  
    //Batch Address Whitelist
    function whitelistBatch(address[] calldata addresses, uint8 maxMint) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++){
            _whitelist[addresses[i]] = maxMint;
        }
    }

    function viewVotes(uint id) external view returns (uint16[2] memory) {
        uint16[2] memory votes = [referendums[id].yesVotes, referendums[id].noVotes];  
        return votes;
    } 

    //Anonymity Preservation

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

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