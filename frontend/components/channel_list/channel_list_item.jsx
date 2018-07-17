import React from 'react';
import { NavLink } from 'react-router-dom';


export default class ChannelListItem extends React.Component {
  render () {
    return (
      <NavLink to={`/channels/${this.props.channel.id}`} className="channel-list-item">
        <span className="channel-name">{this.props.channel.channel_name}</span>
      </NavLink>
    );
  };
};
