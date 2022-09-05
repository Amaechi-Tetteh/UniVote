import React, {Component} from 'react'
import SocialGroupFactory from '../socialGroupFactory'
import {Card,Button,Input,Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import {Link} from '../routes'
import SocialGroupNft from '../socialGroupNft';

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

    const publicReferendums = await Promise.all(tickets.map(async address => {
      const socialGroupNft = SocialGroupNft(address);
      const activeReferendums = await socialGroupNft.methods.activeReferendums().call()
      const referendums = await Promise.all(await Array(parseInt(activeReferendums)).fill().map( (element, index)=>  {
        return socialGroupNft.methods.referendums(index).call()
      }))
      
      // console.log("Public Referendums: ",referendums)
      return referendums
      })
    )
    let refList = []
    if (publicReferendums[0].length > 0){
      for(let i = 0; i < publicReferendums.length; i++){
        for(let j =0; j < publicReferendums[i].length; j++){
          if(publicReferendums[i][j].isPrivate == false){
            refList.push(publicReferendums[i][j])
          }
        }
      }
    }
    console.log(publicReferendums[0])
    // console.log(publicReferendums)
    return {tickets, refList};
  }


  renderTickets()  {
    const items = this.props.tickets.map(address =>  {

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

  renderPublicRefs() {
    const items = this.props.refList.map(result =>{
        return {
          header:'Referendum Name: ' + result.title,
          description:(
          <Link route={`/tickets/${result.origin}`}>
            <a>View Social Group</a>
          </Link>
          ),
          meta: "Social Group ID: "+result.origin,
          fluid: true
        };
      })
    
    return <Card.Group items={items} />;
  }

  render() {
    return(
      <Layout>
        <div>
        <h3>Social Groups</h3>
        
        <Input 
          style = {{width:400, paddingBottom:'20px', paddingRight:'10px'}}
          aligned='left'
          placeholder="Search Social Group ID"
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
        <h3>Open Referendums</h3>
        {this.renderPublicRefs()}
        </div>
      </Layout>
    );
  }
}
export default Index;