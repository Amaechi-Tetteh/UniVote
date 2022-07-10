const socialGroupNftAbi = require("../artifacts/contracts/SocialGroupNFT.sol/SocialGroupNFT.json")
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Social Group Referendums", function () {
  let owner, addr1, addr2, addr3
  let socialToken, socialGroupFactory, socialGroupNFT

  beforeEach(async function () {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
    //deploy socialToken
    const SocialToken = await ethers.getContractFactory("SocialToken");
    socialToken = await SocialToken.connect(owner).deploy();
    await socialToken.deployed();

    //deploy socialGroupFactoy
    const SocialGroupFactory = await ethers.getContractFactory("SocialGroupFactory")
    socialGroupFactory = await SocialGroupFactory.connect(owner).deploy(socialToken.address)
    await socialGroupFactory.deployed()

    //set socialGroupFactory as socialToken owner
    await socialToken.connect(owner).setOwner(socialGroupFactory.address)

  })

  it("Should Create Referendum and Allow Users To Mint NFT", async function () {
    await socialGroupFactory.connect(owner).createSocialGroup("TEST", "TEST")
    SocialGroupNFT = await socialGroupFactory.socialGroupNfts(0)
    
    expect(SocialGroupNFT).to.exist;
    console.log("SocialGroupNFT deployed to: ", SocialGroupNFT)

    //Get Deployed SocialGroupNFT
    socialGroupNFT = await ethers.getContractAt(socialGroupNftAbi.abi, SocialGroupNFT)
    
    //Create Referendum 
    await socialGroupNFT.connect(owner).createReferendum(
      "TEST",
      "DESCRIPTION",
      false,
      5, 
      true
    )

    const testReferendum = await socialGroupNFT.connect(owner).referendums(0)
    expect(testReferendum).to.exist
    console.log("Referendum Details: ", testReferendum)
    
    //Addr1 SocialToken Balance Before
    const tokenBalanceBefore = await socialToken.balanceOf(addr1.address)
    console.log("Token Balance Before: ", tokenBalanceBefore)

    //Mint SocialGroupNFT
    await socialGroupNFT.connect(addr1).mint()
    console.log("-------------NFT MINTED---------------")

    //Addr1 SocialToken Balance After
    const tokenBalanceAfter = await socialToken.balanceOf(addr1.address)
    console.log("Token Balance After: ", tokenBalanceAfter)

    expect(+tokenBalanceBefore).lessThan(+tokenBalanceAfter)
    
    //Vote on Referendum
    await socialGroupNFT.connect(addr1).voteOnReferendum(0, true);
    
    const tokenBalanceFinal = await socialToken.balanceOf(addr1.address)
    console.log("Token Balance After Voting: ", tokenBalanceFinal)

    expect(+tokenBalanceFinal).lessThan(+tokenBalanceAfter)

    //View Vote Count
    const votes = await socialGroupNFT.viewVotes(0) 
    console.log("Yes Votes: ", votes[0], " No Votes: ", votes[1])
    expect

    /* Fail Tests */
    await socialGroupNFT.connect(owner).whitelist(addr2.address)
    await expect(socialGroupNFT.connect(addr2).voteOnReferendum(0,true)).to.reverted
    await expect(socialGroupNFT.connect(addr3).voteOnReferendum(0,true)).to.reverted

  });
});
