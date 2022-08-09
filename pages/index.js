import React, {Component} from 'react'
import SocialGroupFactory from '../socialGroupFactory'
import {Card,Button,Input,Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import {Link} from '../routes'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: '',
      factory: {},
      tickets:[],
      loading:false,
      studentId: '',
      search:'',
      socialGroupName:''
    }
  }

  //Obtain open tickets from Factory Contract
  static async getInitialProps(){
    const tickets = await SocialGroupFactory.methods.viewSocialGroups().call();
    return {tickets};
  }


  renderTickets()  {
    const items = this.props.tickets.map(address =>  {
      let idName;

      return {
        header:'Social Group ID: ' + address,
        description:(
          <Link route ={`/tickets/${address}`}>
            <a>View Social Group</a>
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
              content="Register New Social Group"
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