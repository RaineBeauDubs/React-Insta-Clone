import React, { Component } from 'react';
import styled from 'styled-components';

const LogoutButtonDiv = styled.div `
  display: inline-flex;
  margin-right: 10px;`


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
      <LogoutButtonDiv>
        <i onClick={this.handleLogout} className="far fa-user"></i>
      </LogoutButtonDiv>
    )
  }

}

export default Logout;