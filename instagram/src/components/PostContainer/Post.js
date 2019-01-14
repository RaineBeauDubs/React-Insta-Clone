import React from 'react';

function Post(props) {
  return (
    <div className="insta-post">
      <div className="insta-header">
        <img src={props.insta.thumbnailUrl} alt="thumbnail" />
        <p className="username">{props.insta.username}</p>
      </div>
      <img src={props.insta.imageUrl} alt="image" />
      <div className="insta-bottom">
        <p>(insert icons here)</p>
        <p>{props.insta.likes} likes</p>
        <p>Posted {props.insta.timestamp}</p>
      </div>
    </div>
  );
}

export default Post;