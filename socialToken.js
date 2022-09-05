import web3 from './web3';
import SocialToken from './build/contracts/SocialToken.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialToken.abi)),
    '0xC22e196c1cbFA8c2826658245c3b5b3326Af520d'
);

export default instance;