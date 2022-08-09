import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import SocialGroupNft from '../socialGroupNft';
import {Router} from '../routes';

class RequestRow extends Component {
  
  onYesVote = async() =>{
    const socialGroupNft = SocialGroupNft(this.props.address);
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    
    await socialGroupNft.methods.voteOnReferendum(this.props.id, true).send({
      from: accounts[0]
    });
    Router.pushRoute(`/tickets/${this.props.address}`)
  };

  onNoVote = async() =>{
    const socialGroupNft = SocialGroupNft(this.props.address);
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    
    await socialGroupNft.methods.voteOnReferendum(this.props.id, false).send({
      from: accounts[0]
    });
    Router.pushRoute(`/tickets/${this.props.address}`)
  };

  closeReferendum = async() =>{
    const socialGroupNft = SocialGroupNft(this.props.address);
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    await socialGroupNft.methods.endReferendum(this.props.id).send({
      from: accounts[0]
    });
    Router.pushRoute(`/tickets/${this.props.address}`)
  };

  render() {
    const{Row,Cell}=Table;
    const {id,referendum}=this.props;

    return (
      <Row disabled={referendum.complete}>
        <Cell>{id}</Cell>
        <Cell>{referendum.title}</Cell>
        <Cell>{referendum.description}</Cell>
        <Cell>{referendum.yesVotes}</Cell>
        <Cell>{referendum.noVotes}</Cell>
        <Cell>
          {referendum.complete ? null:(
            <Button color="green" basic onClick={this.onYesVote}>
              Yes
            </Button>
          )}
        </Cell>
        <Cell>
        {referendum.complete ? null:(
          <Button color="red" basic onClick={this.onNoVote}>
            No
          </Button>
        )}
        </Cell>
        <Cell>
        {referendum.complete ? null:(
          <Button color="black" basic onClick={this.closeReferendum}>
            End
          </Button>
        )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;