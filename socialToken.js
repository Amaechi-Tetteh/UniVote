import web3 from './web3';
import SocialToken from './build/contracts/SocialToken.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(SocialToken.abi)),
    '0x1A59B349e06BA9De4c7882896564B3912C267641'
);

export default instance;