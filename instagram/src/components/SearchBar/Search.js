import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js';
import SearchBar from './SearchBar.js'

function Search(props) {

  return (
    <div>
      <SearchBar
        searchString={props.searchString}
        handleChange={props.handleChange}
      />
      <PostContainer
        searchString={props.searchString}
        insta={props.dataSearchResults}
      />

    </div>
  )
}

export default Search;






{/* <div>
        <input type='text' id='filter'
          value={this.state.search}
          onChange={this.searchInput} />
      </div> */}