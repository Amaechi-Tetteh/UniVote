import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import SocialGroupFactory from '../../socialGroupFactory';
import 'semantic-ui-css/semantic.min.css'
import {Router} from '../../routes';
import Layout from '../../components/Layout';

class TicketNew extends Component {
  state = {
    account:'',
    name:'',
    studentID: '',
    errorMessage:'',
    loading:false,
    socialGroupFactory:{},
  };

  async componentDidMount(){
    this.loadBlockChain()
    this.setState({socialGroupFactory: SocialGroupFactory})
  }

  async loadBlockChain() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    this.setState({account: accounts[0]})
    console.log(this.state.account)
  }

  onSubmit = async event =>{
    event.preventDefault();

    this.setState({loading:true, errorMessage:''});
    try{
      await this.state.socialGroupFactory.methods
      .createSocialGroup(this.state.name, this.state.studentID)
      .send({
        from: this.state.account 
      });

      Router.pushRoute('/');
    }catch (err){
      if(this.state.account == null){
        this.setState({errorMessage: 'Please Login to Metamask and Refresh The Page!'})
      }else{
        this.setState({errorMessage:err.message});
      }
      
    }
    this.setState({loading:false});
  }

  render() {
    return (
      <Layout>
        <h3>Create a Social Group</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Social Group Name</label>
            <Input
              value={this.state.name}
              onChange={event =>
               this.setState({name: event.target.value})}
             />
          </Form.Field>
          <Form.Field>
            <label>Student ID</label>
            <Input
                value={this.state.studentID}
                onChange={event =>
                this.setState({studentID: event.target.value})}
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