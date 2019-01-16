import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'
import './PostContainer.css';

function Post(props) {
  return (
    <div className="insta-post">
      <div className="insta-header">
        <img className="thumbnail" src={props.insta.thumbnailUrl} alt="thumbnail" />
        <h5 className="username">{props.insta.username}</h5>
      </div>
      <img className="main-pic" src={props.insta.imageUrl} alt="image" />
      <CommentSection
        postId={props.insta.imageUrl}
        comments={props.insta.comments}
        likes={props.insta.likes}
         />
      <p>Posted {props.insta.timestamp}</p>
    </div>
  );
}

export default Post;