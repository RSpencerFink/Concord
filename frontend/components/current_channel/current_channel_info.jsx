import React from 'react';

export default class CurrentChannelInfo extends React.Component{

  componentDidMount(){
    this.props.fetchChannel(this.props.currentChannelId)
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
