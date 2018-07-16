import React from 'react';

export default class ServerListItem extends React.Component {
  render() {
    return (
      <div className="server-list-item">
        <span className="server-name">{this.props.server.server_name}</span>
      </div>

    );
  }
}
