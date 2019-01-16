import React from 'react';
import './CommentSection.css';

function Comment(props) {
  console.log(props);
  return (
    <div className="insta-comment">
      <p className="com-un">{props.comment.username}</p>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default Comment;