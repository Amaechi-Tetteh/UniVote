// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./SocialGroupNFT.sol";
import "./SocialToken.sol";

contract SocialGroupFactory {

    SocialToken socialToken;
    SocialGroupNFT[] public socialGroupNfts;

    constructor(address _socialToken) {
        socialToken = SocialToken(_socialToken);
    }

    function createSocialGroup(
        string memory _name,
        string memory _symbol
    ) public {
        SocialGroupNFT newSocialGroup = new SocialGroupNFT(
            _name,
            _symbol,
            address(socialToken)
        );
        socialGroupNfts.push(newSocialGroup);
        socialToken.setContract(address(newSocialGroup));
    }

    function viewSocialGroups() public view returns (SocialGroupNFT[] memory ){
        return socialGroupNfts;
    }
}
