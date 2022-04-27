import web3 from './web3'
import Tickets from './build/contracts/Tickets.json'

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(JSON.stringify(Tickets.abi)),
        address
    )
}