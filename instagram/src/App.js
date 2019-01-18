import React, { Component } from 'react';
import dummyData from './dummy-data';
import Search from './components/SearchBar/Search.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyPosts: [],
      dataSearchResults: [],
      searchString: ''
    };
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem('posts')) || dummyData
    this.setState({ dummyPosts: [...posts], dataSearchResults: [...posts], searchString: '' }, () => localStorage.setItem('posts', JSON.stringify(this.state.dummyPosts)))
  }

  // componentDidMount() {
  //   const posts = JSON.parse(localStorage.getItem('posts')) || dummyData
  //   this.setState({ dummyPosts: [...posts], dataSearchResults: [...posts], searchString: '' }, () => localStorage.setItem('posts', this.state.dummyPosts))
  // }



  searchPosts(searchString) {
    const dataSearchResults = searchString ? this.state.dummyPosts.filter(post => post.username.startsWith(searchString)) : [...this.state.dummyPosts]
    this.setState({dataSearchResults, searchString})
  }

  handleChange = e => {
    switch(e.currentTarget.name) {
      case "input-search":
        // this.setState({searchString: e.currentTarget.value})
        this.searchPosts(e.currentTarget.value)
        break
    }
  }


  render() {
    return (
      <div className="App">
        <div className="start-posts">
          <Search 
            dummyPosts={this.state.dummyPosts} 
            searchString={this.state.searchString}
            handleChange={this.handleChange}
            dataSearchResults={this.state.dataSearchResults}
          />
        
        {/* <SearchBar 
          value={this.state.searchString}
          onChange={this.searchInput}
        />
          <PostContainer instas={this.state.dummyData}
          searchString={this.state.searchString} /> */}
        </div> 
      </div>
    );
  }
}

export default App;


