import web3 from './web3';
import SocialGroupFactory from './build/contracts/SocialGroupFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialGroupFactory.abi)),
    '0x35c53FA96b47498b73EA1caE7470e85b61766697'
);

export default instance;