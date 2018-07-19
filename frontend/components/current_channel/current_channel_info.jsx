import React from 'react';

export default class CurrentChannelInfo extends React.Component{

  componentDidMount(){
    if (this.props.match.params.id) {
      this.props.fetchChannel(Number(this.props.match.params.server_id), Number(this.props.match.params.id))
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.server_id && this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchChannel(Number(newProps.match.params.server_id), Number(newProps.match.params.id));
      this.props.receiveCurrentChannel(Number(newProps.match.params.server_id), Number(newProps.match.params.id));
    }
  }

  render(){
    if (!this.props.channels[this.props.currentChannelId]) {
      return (
        <div className="current-channel-info">
        </div>
      );
    } else {
      const currentChannel = this.props.channels[this.props.currentChannelId]
      return (
        <div className="current-channel-info">
          <span className="curren-channel-name">{currentChannel.channel_name}</span>
        </div>
      );
    };
  };
};
