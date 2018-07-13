import React from 'react';

export default class ServerListItem extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.server_name}</span>
        <span>{this.props.server_image_url}</span>
      </li>
    )
  }
}
