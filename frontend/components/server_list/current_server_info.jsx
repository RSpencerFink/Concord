import React from 'react';

export default class CurrentServerInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="current-server-info">
        <span>Server Info</span>
        <img className="expand-arrow" src={expandArrow}></img>
      </div>
    )
  }
}
