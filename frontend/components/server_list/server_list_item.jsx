import React from 'react';

export default class ServerListItem extends React.Component {
  render() {
    return (
      <li>
        <span>Server Info</span>
        <span>{this.props.server.server_name}</span>
        <span>{this.props.server.server_image_url}</span>
      </li>
    );
  }
}
