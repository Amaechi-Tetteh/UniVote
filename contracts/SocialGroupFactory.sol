// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./SocialGroupNFT.sol";
import "./SocialToken.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SocialGroupFactory {
    using Counters for Counters.Counter;

    Counters.Counter private _SocialGroupCounter;
    SocialToken socialToken;
    SocialGroupNFT[] public socialGroupNfts;

    event SocialGroupCreated(address indexed owner, string indexed _name, uint256 indexed id);

    constructor(address _socialToken) {
        socialToken = SocialToken(_socialToken);
    }

    function createSocialGroup(
        string memory _name,
        string memory _symbol
    ) external {
        uint256 current = _SocialGroupCounter.current();
        _SocialGroupCounter.increment();

        SocialGroupNFT newSocialGroup = new SocialGroupNFT(
            _name,
            _symbol,
            address(socialToken),
            msg.sender
        );
        socialGroupNfts.push(newSocialGroup);
        socialToken.setContract(address(newSocialGroup));
        
        emit SocialGroupCreated(msg.sender, _name, current);
    }

    function viewSocialGroups() external view returns (SocialGroupNFT[] memory ){
        return socialGroupNfts;
    }
}
