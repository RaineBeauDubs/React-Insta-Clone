import React from 'react';
import './SearchBar.css'


function SearchBar() {
  return (
    <div className="search-bar">
      <div className="left-sb">
        <div>
          <i className="camera fas fa-camera-retro"></i>
        </div>
        <img className="ig-logo" src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png?w=600" alt="instagram" />
      </div>
      <div className="center-sb">
        <form className="search">
          <input type="text" name="search" placeholder="Search">
          </input>
        </form>
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