import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData : dummyData
    };
  }

  // componentDidMount() {
  //   const id = this.props.postId;
  //   if (localStorage.getItem(id)) {
  //     this.setState({
  //       comments: JSON.parse(localStorage.getItem(this.props.postId))
  //     });
  //   }
  //   else {
  //     this.addComments();
  //   }
  // }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="start-posts">
          <PostContainer instas={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;


