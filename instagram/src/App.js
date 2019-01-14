import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData : dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <p>Hello, there.</p>
        <PostContainer instas={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
