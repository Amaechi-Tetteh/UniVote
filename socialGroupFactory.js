import web3 from './web3';
import SocialGroupFactory from './build/contracts/SocialGroupFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialGroupFactory.abi)),
    '0x9879764E45611a0F8aBe03f54d3E5daa2f3cE0bc'
);

export default instance;