import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../Search/SearchBar";
import dummyData from "../../dummy-data.js";

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyPosts: [],
      dataSearchResults: []
    };
  }
  componentDidMount() {
    this.setState({ dummyPosts: dummyData });
  }

  searchPosts = e => {
    const dummyPosts = this.state.dummyPosts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ dataSearchResults: dummyPosts });
  };

  render() {
    return (
      <div>
        <SearchBar search={this.searchPosts} />
        <PostContainer
          posts={
            this.state.dataSearchResults.length > 0
              ? this.state.dataSearchResults
              : this.state.dummyPosts
          }
        />
      </div>
    );
  }
}

export default PostPage;
