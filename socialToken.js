import web3 from './web3';
import SocialToken from './build/contracts/SocialToken.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialToken.abi)),
    '0xBFBa5E18ba93174A2387d9A855B61811B37D65AA'
);

export default instance;