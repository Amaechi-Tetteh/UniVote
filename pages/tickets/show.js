import React, {Component} from 'react';
import {Card, Grid, Button, Table} from 'semantic-ui-react';
import SocialGroupNft from '../../socialGroupNft';
import VoteForm from '../../components/voteForm';
import Layout from '../../components/layout';
import RequestRow from '../../components/requestRow';
import {Link} from '../../routes'
import 'semantic-ui-css/semantic.min.css'
import {Router} from '../../routes';

class TicketShow extends Component {
  state ={
    account:'',
    socialGroupNft:''
  }

  static async getInitialProps(props) {
    const socialGroupNft = SocialGroupNft(props.query.address);
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0])
    
    const name = await socialGroupNft.methods.name().call();
    const owner = await socialGroupNft.methods.symbol().call()
    const members = (await socialGroupNft.methods.getVoters().call()).length  
    // const referendums = await socialGroupNft.methods.referendums().call()
    const activeReferendums = await socialGroupNft.methods.activeReferendums().call()
    // console.log(referendums[0].toString());
    // console.log("Referendum Count: ",activeReferendums)
    const referendums = await Promise.all(
      Array(parseInt(activeReferendums)).fill().map((element, index)=> {
        return socialGroupNft.methods.referendums(index).call()
      })
    );

    return {
      address: props.query.address.toString(),
      name: name,
      owner: owner,
      memberCount: members,
      referendumCount: activeReferendums,
      referendums: referendums
    };
  }

  renderCards(){
    const {
      address,
      name,
      owner,
      memberCount,
      referendumCount,
      // tokens
    } = this.props;

    const items = [
      {
        header: `Welcome To ${name} Official Social Group`,
        description: `Mint a ${name} NFT To Start Voting on Referendums`
      },
      {
        header: address,
        meta: 'Social Group Address',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: owner,
        meta: 'The Owner Of This Social Group',
        description: `Contact ${owner} for Support Regarding This Social Group`
      },
      {
        header: memberCount,
        meta: 'Active Member Count',
        description: 'Become a Member By Voting on a Referendum'
      },
      {
        header: referendumCount,
        meta: 'Active Referendums',
        description: 'Total Number Of Active Referendums'
      },
    ];

    return <Card.Group items = {items}/>;
  }

  createPage() {
    const address = this.props.address;
    return (
            <Link route ={`/tickets/create/${address}`}>
              <a>
                <Button
                  floated ="right"
                  content="Register New Social Group"
                  icon="add circle"
                  primary
                />
              </a>
            </Link>   
    ) 
  }

  renderReferendums() {
    return this.props.referendums.map((referendum, index) =>{
      return ( 
        <RequestRow 
          key={index}
          id={index}
          referendum={referendum}
          address={this.props.address}
        />
      );
    });
  }

  onSubmit=async event =>{
    event.preventDefault();
    this.setState({loading:true, errorMessage:''});
    const address = this.props.address;
    const socialGroupNft = SocialGroupNft(address)
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    try {
      await socialGroupNft.methods.mint().send({
        from: accounts[0]
      })
      Router.pushRoute(`/tickets/${this.props.address}`)
    }catch (err) {
      if(accounts[0] == null){
        this.setState({errorMessage: 'Please Login to Metamask and Refresh The Page!'})
      }else{
        this.setState({errorMessage:err.message});
      }
    }

    this.setState({loading:false, value:''});
  };

  // create=async event =>{
  //   event.preventDefault();
  //   this.setState({loading:true, errorMessage:''});
  //   const address = this.props.address;
  //   const socialGroupNft = SocialGroupNft(address)
  //   const accounts = await ethereum.request({ method: 'eth_accounts' });
  //   try {
  //     await socialGroupNft.methods.createReferendum().send({
  //       from: accounts[0]
  //     })
  //   }catch (err) {
  //     if(accounts[0] == null){
  //       this.setState({errorMessage: 'Please Login to Metamask and Refresh The Page!'})
  //     }else{
  //       this.setState({errorMessage:err.message});
  //     }
  //   }

  //   this.setState({loading:false, value:''});
  // };

  render() {
    const {Header,Row,HeaderCell,Body} = Table
    return (
      <Layout>
        <h3>Tickets Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <VoteForm address={this.props.address}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={2}>
              <Button secondary loading={this.state.loading} onClick={this.onSubmit}>
                MINT
              </Button>
          </Grid.Column>
          <Grid.Column width={6}>
            {this.createPage(this.props.address)}
          </Grid.Column>
        </Grid>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Title</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Yes Votes</HeaderCell>
              <HeaderCell>No Votes</HeaderCell>
              <HeaderCell>VOTE</HeaderCell>
              <HeaderCell></HeaderCell>
              <HeaderCell>END</HeaderCell>
            </Row>
          </Header>
          <Body>
          {this.renderReferendums()}
          </Body>
        </Table>
      </Layout>
    );
  }
}
// @refresh reset
export default TicketShow;