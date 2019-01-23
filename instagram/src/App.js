import React, { Component } from 'react';
import PostPage from './components/Post/PostPage';
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
      dummyPosts: [],
      dataSearchResults: [],
      searchString: ''
    }
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem('posts')) || dummyData
    this.setState({ 
      dummyPosts: [...posts], 
      dataSearchResults: [...posts],
      searchString: '' 
    }, () => localStorage.setItem('posts', JSON.stringify(this.state.dummyPosts)
  ))}

  searchPosts(searchString) {
    const dataSearchResults = searchString ? this.state.dummyPosts.filter(post =>
      post.username.startsWith(searchString)) : [...this.state.dummyPosts]
        this.setState({dataSearchResults, searchString})
  }

  handleSearchInput = event => {
    switch(event.currentTarget.name) {
      case "input-search":
        this.searchPosts(event.currentTarget.value)
        break
    }
  }


  render() {
    return (
      <AppWrapper>
        <PostPage 
          dummyPosts={this.state.dummyPosts} 
          searchString={this.state.searchString}
          handleSearchInput={this.handleSearchInput}
          dataSearchResults={this.state.dataSearchResults}
        />
      </AppWrapper>
    );
  }
}

export default App;
