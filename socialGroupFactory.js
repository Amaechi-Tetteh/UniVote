import web3 from './web3';
import SocialGroupFactory from './build/contracts/SocialGroupFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialGroupFactory.abi)),
    '0xcC1f834567144A1C88C4124dC68ecFF4Ee3f5237'
);

export default instance;