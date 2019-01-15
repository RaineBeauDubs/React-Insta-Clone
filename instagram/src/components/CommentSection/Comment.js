import React from 'react';

function Comment(props) {
  console.log(props);
  return (
    <div className="insta-comment">
      <div>
      <p>{props.comment.username}</p>
      <p>{props.comment.text}</p>
      </div>
    </div>
  );
}

export default Comment;