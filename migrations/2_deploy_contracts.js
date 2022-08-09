const Factory = artifacts.require('Factory')
const SocialToken = artifacts.require('SocialToken')
const SocialGroupFactory = artifacts.require('SocialGroupFactory')

module.exports = async function(deployer, network, accounts) {
	//Deploy Social Token
	await deployer.deploy(SocialToken)
	const socialToken = await SocialToken.deployed()

	//Deploy Social Group Factory
	await deployer.deploy(SocialGroupFactory,socialToken.address)
	const socialGroupFactory = await SocialGroupFactory.deployed()

	//Set Owner Of SocialToken To SocialGroupFactory
	await socialToken.setOwner(socialGroupFactory.address)
};
