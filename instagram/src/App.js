import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';
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
        <PostContainer instas={this.state.dummyData} />
        {/* <CommentSection comment={this.state.comments} /> */}
      </div>
    );
  }
}

export default App;
