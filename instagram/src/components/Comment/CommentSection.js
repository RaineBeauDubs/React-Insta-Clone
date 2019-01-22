import React, {Component} from 'react';
import Comment from './Comment';
import styled from 'styled-components';

const CommentSectionDiv = styled.div `
  font-size: 20px;`

const CommentIcons = styled.div `
  display: flex;`

const CommentIcon = styled.i `
  font-size: 20px;`


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    }
  }

  render() {
    return (
      <CommentSectionDiv>
        <CommentIcons>
          <CommentIcon className="far fa-heart"></CommentIcon>
          <CommentIcon className="far fa-comment"></CommentIcon>
        </CommentIcons>
        {this.state.comments.map((comment, i) => 
          <Comment 
            key={i} 
            comment={comment} 
          /> )}
      </CommentSectionDiv>
    );
  }
}

export default CommentSection;