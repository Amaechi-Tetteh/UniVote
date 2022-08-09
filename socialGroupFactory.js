import web3 from './web3';
import SocialGroupFactory from './build/contracts/SocialGroupFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialGroupFactory.abi)),
    '0xB8677C3816eeB3d3a3f460dcF9D7fEC34aC0D26C'
);

export default instance;