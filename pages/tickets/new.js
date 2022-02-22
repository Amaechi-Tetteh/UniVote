import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Factory from '../../build/contracts/Factory.json';
import 'semantic-ui-css/semantic.min.css'
import {Router} from '../../routes';
import Layout from '../../components/Layout';
import Web3 from 'web3'

class TicketNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage:'',
    loading:false
  };

  onSubmit = async event =>{
    event.preventDefault();

    this.setState({loading:true, errorMessage:''});
    
    try{
      const accounts = await Web3.eth.getAccounts();
      await factory.methods
      .createTicket(this.state.minimumContribution)
      .send({
        from: accounts[0] 
      });

      Router.pushRoute('/');
    }catch (err){
      this.setState({errorMessage:err.message});
    }
    this.setState({loading:false});
  }

  render() {
    return (
      <Layout>
        <h3>Create a Ticket</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei" 
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
               this.setState({minimumContribution: event.target.value})}
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