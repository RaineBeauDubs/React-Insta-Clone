import React from 'react';
import './SearchBar.css';


function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="left-sb">
        <div>
          <i className="camera fas fa-camera-retro"></i>
        </div>
        <img className="ig-logo" src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png?w=600" alt="instagram" />
      </div>
      <div className="center-sb">
        <input 
          name="input-search"
          value={props.searchString} 
          onChange={props.handleChange} 
          type="text"
          placeholder="Search">
        </input>
      </div>
      <div className="right-sb">
        <i className="search-bar-icons far fa-compass"></i>
        <i className="search-bar-icons far fa-heart"></i>
        <i className="search-bar-icons far fa-user"></i>
      </div>
      
      
    </div>
  );
}

export default SearchBar;