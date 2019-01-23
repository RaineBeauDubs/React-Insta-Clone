import React, { Component } from 'react';

class Logout extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleLogout = () => {
    localStorage.clear('user');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <i onClick={this.handleLogout} className="far fa-user"></i>
      </div>
    )
  }

}

export default Logout;