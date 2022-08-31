import web3 from './web3';
import SocialToken from './build/contracts/SocialToken.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialToken.abi)),
    '0x0DDAe50C3AF822CdFe5eD089891fe556b99CaDf1'
);

export default instance;