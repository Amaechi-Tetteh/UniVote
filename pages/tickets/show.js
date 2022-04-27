import React, {Component} from 'react';
import {Card, Grid, Button} from 'semantic-ui-react';
import Tickets from '../../tickets.js';
import web3 from '../../web3.js';
import VoteForm from '../../components/VoteForm';
import {Link } from '../../routes';
import Layout from '../../components/Layout';
import 'semantic-ui-css/semantic.min.css'

class TicketShow extends Component {
  static async getInitialProps(props) {
    const tickets = Tickets(props.query.address);
    
    const summary = await tickets.methods.getSummary().call();

    return {
      address: props.query.address,
      studentID: summary[0],
      voterCount: summary[1],
      manager: summary[2],
      description: summary [3],
      voteGoal: summary [4]
    };
  }

  renderCards(){
    const {
      voteGoal,
      manager,
      studentID,
      description,
      voterCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: studentID,
        meta:'Student ID who created Proposal',
        description: 'You must contribute at least this much wei to contribute'
      },
      {
        header: voteGoal,
        meta: 'Target Number of Votes',
        description: ' A request tries to withdraw money from the contract. Request must be apporved by approvers'
      },
      {
        header: voterCount,
        meta: 'Number of Votes',
        description: 'Number of people who have already donated to this Campaign'
      },
      {
        header: 'Description of Proposal',
        description: description
      }
    ];

    return <Card.Group items = {items}/>;
  }

  render() {
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
        </Grid>
      </Layout>
    );
  }
}
// @refresh reset
export default TicketShow;