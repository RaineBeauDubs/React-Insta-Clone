import React from 'react';
import styled from 'styled-components';

const CommentInputForm = styled.form `
  text-align: center;`

const CommentInputInput = styled.input `
  font-size: 20px;`

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