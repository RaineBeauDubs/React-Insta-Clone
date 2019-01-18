import React from 'react';
import Post from './Post';

const PostContainer = props => {
  let insta = props.insta;
  let search = props.searchString;
  
  if (search === '') {
    insta = insta.filter(user => 
      user.username.toLowerCase().match(search));
  }
  
  return (
    <ul>
      {props.insta.map(insta => {
        return <Post insta={insta} key={insta.timestamp} />;
      })}
    </ul>
  );
}

export default PostContainer;