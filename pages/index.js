import React, {Component} from 'react'
import FactoryJSON from '../build/contracts/Factory.json'
import TicketsJSON from '../build/contracts/Tickets.json'
import Factory from '../factory.js'
import Tickets from '../tickets.js'
import {Card,Button,Input,Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import {Link} from '../routes'
import Web3 from 'web3'
import { Router } from 'next/router'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: '',
      factory: {},
      tickets:[],
      loading:false,
      studentId: '',
      search:''
    }
  }

  //initialise web3 and smart contracts
  // async componentDidMount() {
  //   await this.loadWeb3()
  //   await this.loadBlockChainData()
  //   await this.getTickets()
  //   //await this.getId()
  // }

  //Obtain open tickets from Factory Contract
  static async getInitialProps(){
    const tickets = await Factory.methods.viewTickets().call();
    return {tickets};
  }

  //load smart contracts
  // async loadBlockChainData() {
  //   const web3 = window.web3
  
  //   const networkId = await web3.eth.net.getId()
  //   console.log(networkId)

  //   //Load factory Contract
  //   const factoryData = Factory.networks[networkId]
  //   if(factoryData) {
  //     const factory = new web3.eth.Contract(Factory.abi, factoryData.address)
  //     this.setState({factory})
  //   }else {
  //     window.alert('factory contract not deployed to network. ')
  //   }
  //   //Load tickets Contract
  //   const ticketsData = TicketsJSON.networks[networkId]
  //   if(ticketsData) {
  //     const tickets = new web3.eth.Contract(Tickets)
  //     this.setState({tickets})
  //   }else {
  //     window.alert('factory contract not deployed to network. ')
  //   }

  //   this.setState({loading:false})
  // }

  //conenct app to wallet
  // async loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     console.log(accounts)
  //     await window.ethereum.enable()
  //     this.setState({account:accounts[0]})
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }

  async getTickets(){
    this.state.tickets = await this.state.factory.methods.viewTickets().call();
  }

  async getId(){
    this.state.studentId = await Factory.methods.viewId().call();
  }

  renderTickets()  {
    // const ids = await Factory.methods.viewId().call();
    // const ids = this.props.ids
    // console.log('IDS: '+ ids)
    console.log(this.state.studentId)
    const items = this.props.tickets.map(address =>{
      return {
        header:'Proposal ID: ' + address,
        description:(
          <Link route ={`/tickets/${address}`}>
            <a>View Proposal</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  //Person who cretaed
  //minimum and current votes

  render() {
    return(
      <Layout>
        <div>
        <h3>Open Proposals</h3>
        
        <Input 
          style = {{width:400, paddingBottom:'20px', paddingRight:'10px'}}
          aligned='left'
          placeholder="Search Propsal ID"
          value={this.state.search}
          onChange={event =>
            this.setState({search: event.target.value})}
        />
        <Link route={`/tickets/${this.state.search}`}>
          <Button loading={this.state.loading} primary>SEARCH</Button>
        </Link>
         
        
        <Link route ="/tickets/new">
          <a>
            <Button
              floated ="right"
              content="Create Proposal"
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
export default Index;