import React, {Component} from 'react';
import {Form, Button, Input, Message, Checkbox} from 'semantic-ui-react';
import SocialGroupNft from '../../socialGroupNft';
import 'semantic-ui-css/semantic.min.css'
import {Router} from '../../routes';
import Layout from '../../components/Layout';
import {Link} from '../../routes'

class TicketNew extends Component {
  state = {
    account:'',
    name:'',
    description: '',
    anonymous:true,
    duration:'',
    private:'',
    errorMessage:'',
    loading:false,
    socialGroupFactory:{},
  };

  static async getInitialProps(props){
    const address = props.query.address
    return {address};
  }

  async componentDidMount(){
    this.loadBlockChain()
  }

  setAnonymous = async event => {
    this.setState({anonymous: !this.state.anonymous});
    // console.log(this.state.anonymous)
  };

  setPrivate = async event => {
    this.setState({private: !this.state.private});
    // console.log(this.state.anonymous)
  };

  async loadBlockChain() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    this.setState({account: accounts[0]})
    console.log(this.state.account)
  }

  onSubmit = async event =>{
    event.preventDefault();

    const socialGroupNft = SocialGroupNft(this.props.address);
    this.setState({loading:true, errorMessage:''});
    try{
      await socialGroupNft.methods
      .createReferendum(
        this.state.name, 
        this.state.description,
        this.state.anonymous,
        this.state.duration,
        this.state.private    
    )
      .send({
        from: this.state.account 
      });
      Router.pushRoute(`/tickets/${this.props.address}`);
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
        <h3>
            Create a Referendum
            <Link  route ={`/tickets/${this.props.address}`}>
                <a>
                    <Button secondary floated='right'>
                        Back
                    </Button>
                </a>
            </Link>
        </h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name</label>
            <Input
              value={this.state.name}
              onChange={event =>
               this.setState({name: event.target.value})}
             />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Input
                value={this.state.studentID}
                onChange={event =>
                this.setState({description: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Anonymous</label>
            <Checkbox
                value={this.state.anonymous}
                onChange={event =>
                    this.setAnonymous(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Duration (Days)</label>
            <Input
                value={this.state.duration}
                onChange={event =>
                this.setState({duration: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Private</label>
            <Checkbox
                value={this.state.private}
                onChange={event =>
                    this.setPrivate(event.target.value)}
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