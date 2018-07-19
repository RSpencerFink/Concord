import React from 'react';
import { NavLink } from 'react-router-dom';


export default class ChannelListItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      className: "remove-cross"
    }
    this.hover = this.hover.bind(this)
    this.unHover = this.unHover.bind(this)
  }

  hover(){
    this.setState({className: "remove-cross show"})
  }

  unHover(){
    this.setState({className: "remove-cross"})
  }

  render () {
    return (
      <NavLink to={`/servers/${this.props.channel.server_id}/channels/${this.props.channel.id}`} onMouseOver={this.hover} onMouseLeave={this.unHover} className="channel-list-item">
        <span className="channel-name">{this.props.channel.channel_name}</span>
        <img className={this.state.className} src={deleteCross} onClick={() => this.props.deleteChannel(this.props.serverId, this.props.channel.id)}></img>
      </NavLink>
    );
  };
};
