import web3 from './web3';
import SocialGroupFactory from './build/contracts/SocialGroupFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialGroupFactory.abi)),
    '0x419AFFA7aD5A4CFa77f90c895837a5f50C4B3b9e'
);

export default instance;