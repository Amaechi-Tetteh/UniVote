const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const SocialGroupFactoryJSON = require("./build/contracts/SocialGroupFactory.json");

// Read vars from envVariables object
const fs = require("fs")
const SEED_PHRASE = fs.readFileSync(".secret").toString()

const provider = new HDWalletProvider(
    SEED_PHRASE,
    'https://rinkeby.infura.io/v3/89c198a73ec44d698104e67c25a212d4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(SocialGroupFactoryJSON.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();

}

deploy();
