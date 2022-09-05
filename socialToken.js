import web3 from './web3';
import SocialToken from './build/contracts/SocialToken.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialToken.abi)),
    '0xbA5ED3CEFeeF18c779A88491b509E18AB18eF79C'
);

export default instance;