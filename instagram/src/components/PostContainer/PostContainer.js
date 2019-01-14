import React from 'react';
import Post from './Post';

function PostContainer(props) {
  return (
    <ul>
      {props.instas.map(insta => {
        return <Post insta={insta} />;
      })}
    </ul>
  );
}

export default PostContainer;