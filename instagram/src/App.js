import React, { Component } from 'react';
import PostPage from './components/Post/PostPage';
import Authenticate from './components/Authenticate/Authenticate';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  text-align: center;
  content-align: center;
  margin: auto;`

const App = Authenticate (
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <AppWrapper>
          <PostPage />
        </AppWrapper>
      );
    }
  }
)

export default Authenticate(App);
