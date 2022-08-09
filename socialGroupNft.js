import web3 from './web3'
import SocialGroupNFT from './build/contracts/SocialGroupNFT.json'

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(JSON.stringify(SocialGroupNFT.abi)),
        address
    )
}