import React from 'react';
import ChannelListItem from './channel_list_item';

export default class ChannelList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.server_id)
  }

  componentWillReceiveProps(){
  }

  render(){
    if (!this.props.channels) {return null}

    const allChannels = this.props.channels.map((channel) => {
      return (<ChannelListItem key={ channel.id } channel={ channel } serverId={this.props.match.params.server_id} deleteChannel={ this.props.deleteChannel }/>)
    })
    return (
      <div className="channel-list-container">
        <ul className="channel-list">
          { allChannels }
        </ul>
        <button className="new-channel-button" onClick={() => this.props.openModal('CreateChannel')} >Create New Channel</button>
      </div>
    );
  };
};
