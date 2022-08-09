import React, {Component} from 'react';
import {Form, Statistic, Message, Button, Card} from 'semantic-ui-react';
import SocialToken from '../socialToken'
import {Router} from '../routes';
import { accounts } from '@cardinal/token-manager/dist/cjs/programs/tokenManager';

class voteForm extends Component {
  state = {
    value:'',
    errorMessage: '',
    loading: false,
    balance: ''
  };

  onSubmit=async event =>{
    event.preventDefault();

    const socialToken = SocialToken

    this.setState({loading:true, errorMessage:''});

    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const balance = await socialToken.methods.balanceOf(accounts[0]).call();
      this.setState({balance})
      Router.replaceRoute(`/tickets/${this.props.address}`)
    }catch (err) {
      if(accounts[0] == null){
        this.setState({errorMessage: 'Please Login to Metamask and Refresh The Page!'})
      }else{
        this.setState({errorMessage:err.message});
      }
    }

    this.setState({loading:false, value:''});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Message error header="Oops!" content={this.state.errorMessage}/>
        <Card>
        <Statistic>
          <Statistic.Value>{this.state.balance}</Statistic.Value>
        </Statistic>
        <Button primary loading={this.state.loading}>
          View Your Governance Tokens
        </Button>
        </Card>
      </Form>
    );
  };
}

export default voteForm;