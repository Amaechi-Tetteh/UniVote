import React, {Component} from 'react'
import Factory from '../build/contracts/Factory.json'
//import tickets from '../build/contracts/Tickets.json';
import {Card,Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import {Link} from '../routes'
import Web3 from 'web3'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: '',
      factory: {},
      tickets:[],
      loading:false,
    }
  }

  //initialise web3 and smart contracts
  async componentDidMount() {
    await this.loadWeb3()
    await this.loadBlockChainData()
    await this.getTickets()
  }

  //obtain address and tickets
  static async getInitialProps(props){
    const {address} = props.query;
    return {address};
  }

  //load smart contracts
  async loadBlockChainData() {
    const web3 = window.web3
  
    const networkId = await web3.eth.net.getId()
    console.log(networkId)

    //Load factory Contract
    const factoryData = Factory.networks[networkId]
    if(factoryData) {
      const factory = new web3.eth.Contract(Factory.abi, factoryData.address)
      this.setState({factory})
    }else {
      window.alert('factory contract not deployed to network. ')
    }

    this.setState({loading:false})
  }

  //conenct app to wallet
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts)
      await window.ethereum.enable()
      this.setState({account:accounts[0]})
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  static async getTickets(){
    this.state.tickets = await this.state.factory.methods.viewTickets().call();
  }

  renderTickets()  {
    
    const items = this.state.tickets.map(address =>{
      return {
        header: address,
        description:(
          <Link route ={`/tickets/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return(
      <Layout>
        <div>
        <h3>Open Tickets</h3>
        <Link route ="/tickets/new">
          <a>
            <Button
              floated ="right"
              content="Create Ticket"
              icon="add circle"
              primary
            />
          </a>
        </Link>
        {this.renderTickets()}
        </div>
      </Layout>
    );
  }
}
 //@refresh reset
export default Index;