import web3 from './web3';
import SocialToken from './build/contracts/SocialToken.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialToken.abi)),
    '0xBBad7b5Eea9442b5FcA21E07B5fBE4899C9DD355'
);

export default instance;