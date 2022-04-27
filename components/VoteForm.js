import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Tickets from '../tickets.js';
import web3 from '../web3';
import {Router} from '../routes';

class voteForm extends Component {
  state = {
    value:'',
    errorMessage: '',
    loading: false
  };

  onSubmit=async event =>{
    event.preventDefault();

    const tickets = Tickets(this.props.address);

    this.setState({loading:true, errorMessage:''});

    try {
      const accounts = await web3.eth.getAccounts();
      await tickets.methods.vote().send({
        from: accounts[0],
      });
      Router.replaceRoute(`/tickets/${this.props.address}`)
    }catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loading:false, value:''});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Message error header="Oops!" content={this.state.errorMessage}/>
        <Button primary loading={this.state.loading}>
          VOTE
        </Button>
        <Form.Field>
          <label>You can only vote for a proposal once! Trying to vote again will result in a failed transaction.</label>
        </Form.Field>
      </Form>
    );
  };
}

export default voteForm;