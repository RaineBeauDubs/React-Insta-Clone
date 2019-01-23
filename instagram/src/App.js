import React, { Component } from 'react';
import PostPage from './components/Post/PostPage';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div `
  width: 100%;
  text-align: center;
  content-align: center;
  margin: auto;`

class App extends Component {
  constructor() {
    super(); 
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

export default App;
