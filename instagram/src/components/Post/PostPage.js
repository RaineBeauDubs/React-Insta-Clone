import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../Search/SearchBar';

function PostPage(props) {
  return (
    <div>
      <SearchBar
        searchString={props.searchString}
        handleSearchInput={props.handleSearchInput}
      />
      <PostContainer
        searchString={props.searchString}
        insta={props.dataSearchResults}
        instas={props.dummyPosts}
      />
    </div>
  );
}

export default PostPage;