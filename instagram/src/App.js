import React, { Component } from 'react';
import SearchBar from './components/Search/SearchBar';
import PostContainer from './components/Post/PostContainer';
import dummyData from './dummy-data';
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
    this.state = {
      dummyData: dummyData,
    }
  }


  render() {
    return (
      <AppWrapper>
        <SearchBar />
        <PostContainer 
          instas={this.state.dummyData} />
      </AppWrapper>
    );
  }
}

export default App;
