import React from 'react';
import styled from 'styled-components';

const CommentInputForm = styled.form `
  content-align: left;
  margin: 15px;`

const CommentInputInput = styled.input `
  font-size: 20px;
  `

const CommentInput = props => {
  return(
    <CommentInputForm onSubmit={props.addNewComment}>
      <CommentInputInput 
        type="text"
        placeholder="Add comment..."
        value={props.comment} 
        onChange={props.handleCommentInput}
      />
    </CommentInputForm>
  )
}

export default CommentInput;