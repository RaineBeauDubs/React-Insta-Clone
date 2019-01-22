import React, { Component } from 'react';
import SearchBar from './components/Search/SearchBar';
import PostContainer from './components/Post/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      dummyData: dummyData,
    }
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
          instas={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
