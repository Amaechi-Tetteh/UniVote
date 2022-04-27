import web3 from './web3';
import Factory from './build/contracts/Factory.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(Factory.abi)),
    '0xCfe9e808c8f1019dB0e2021DAd2D28542462Ca54'
);

export default instance;