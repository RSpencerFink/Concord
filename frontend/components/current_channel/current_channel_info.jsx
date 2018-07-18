import React from 'react';

export default class CurrentChannelInfo extends React.Component{
  render(){
    if (!this.props.channels[this.props.currentChannelId]) {return null}

    const currentChannel = this.props.channels[this.props.currentChannelId]
    return (
      <div className="current-channel-info">
        <span className="curren-channel-name">{currentChannel.channel_name}</span>
      </div>
    );
  };
};
