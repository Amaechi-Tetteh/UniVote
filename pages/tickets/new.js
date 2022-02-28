import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Factory from '../../build/contracts/Factory.json';
import 'semantic-ui-css/semantic.min.css'
import {Router} from '../../routes';
import Layout from '../../components/Layout';
import Web3 from 'web3'

class TicketNew extends Component {
  state = {
    studentID: '',
    description:'',
    goal:'',
    errorMessage:'',
    loading:false,
    factory:{}
  };

  async componentDidMount() {
    await this.loadWeb3()
    await this.loadBlockChainData()
  }

  onSubmit = async event =>{
    event.preventDefault();

    this.setState({loading:true, errorMessage:''});
    try{
      const accounts = await web3.eth.getAccounts();
      await this.state.factory.methods
      .createProposal(this.state.studentID, this.state.description, this.state.goal)
      .send({
        from: accounts[0] 
      });

      Router.pushRoute('/');
    }catch (err){
      this.setState({errorMessage:err.message});
    }
    this.setState({loading:false});
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

  render() {
    return (
      <Layout>
        <h3>Create a Proposal</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Student ID</label>
            <Input
              value={this.state.studentID}
              onChange={event =>
               this.setState({studentID: event.target.value})}
             />
          </Form.Field>
          <Form.Field>
            <label>Proposal Description</label>
            <Input
                value={this.state.description}
                onChange={event =>
                this.setState({description: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Votes Goal</label>
            <Input
              value={this.state.goal}
              onChange={event =>
              this.setState({goal: event.target.value})}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage}/>
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}
// @refresh reset
export default TicketNew;