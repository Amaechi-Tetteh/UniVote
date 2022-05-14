const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const FactoryJSON = require("./build/contracts/Factory.json");

const mnemonicPhrase = "uncle whale note deputy number atom utility ready daring skill voice final estate claw slam crumble dry fox problem liberty sniff layer cook case";

const provider = new HDWalletProvider(
    mnemonicPhrase,
    'https://rinkeby.infura.io/v3/89c198a73ec44d698104e67c25a212d4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();

}

deploy();
