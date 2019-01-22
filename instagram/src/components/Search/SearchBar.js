import React from 'react';
import './SearchBar.css'


function SearchBar() {
  return (
    <div className='SearchBarDiv'>
      <div className='LeftSearchBar'>
        <div>
          <i className="camera fas fa-camera-retro"></i>
        </div>
        <img src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png?w=600" alt="instagram" />
      </div>
      <div className='CenterSearchBar'>
        <input 
          name="search-input" 
          type="text" 
          placeholder="Search">
        </input>
      </div>
      <div className='RightSearchBar'>
        <i className="search-bar-icons far fa-compass"></i>
        <i className="search-bar-icons far fa-heart"></i>
        <i className="search-bar-icons far fa-user"></i>
      </div>
    </div>
  );
}

export default SearchBar;