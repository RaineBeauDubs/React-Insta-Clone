import React from 'react';
import Post from './Post';

function PostContainer(props) {
  return (
    <ul>
      {props.instas.map(insta => {
        return <Post insta={insta} key={insta.timestamp} />;
      })}
    </ul>
  );
}

export default PostContainer;