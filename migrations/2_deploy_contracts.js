const Factory = artifacts.require('Factory')
const Tickets = artifacts.require('Tickets')

module.exports = async function(deployer, network, accounts) {
	//Deploy Factory
	await deployer.deploy(Factory)
	const factory = await Factory.deployed()

    //Deploy Tickets
    await deployer.deploy(Tickets, accounts[0])
	const tickets = await Tickets.deployed()

};
