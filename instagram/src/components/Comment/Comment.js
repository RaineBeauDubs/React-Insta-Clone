import React from 'react';
import styled from 'styled-components';

const CommentEntirety = styled.div `
  display: flex;
  margin: 0 15px 10px 15px;`

const CommentUsername = styled.span `
  font-weight: bold;
  margin-right: 3px;`

function Comment(props) {
  return (
    <CommentEntirety>
      <CommentUsername>{props.comment.username}</CommentUsername>
      <span>{props.comment.text}</span>
    </CommentEntirety>
  );
}

export default Comment;