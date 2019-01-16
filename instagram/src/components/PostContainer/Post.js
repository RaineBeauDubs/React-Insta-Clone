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
      <div className="insta-bottom">
        <div className="icons">
          <button className="icon"><i className="far fa-heart"></i></button>
          <button className="icon"><i className="far fa-comment"></i></button>
        </div>
        <p>{props.insta.likes} likes</p>
        <p>Posted {props.insta.timestamp}</p>
      </div>
      <CommentSection
        postId={props.insta.imageUrl}
        comments={props.insta.comments}
         />
    </div>
  );
}

export default Post;