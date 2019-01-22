import React, {Component} from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import CommentInput from './CommentInput';

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
      likes: props.likes,
      comment: ''
    };
  }

  handleCommentInput = event => {
    this.setState({ comment: event.target.value })
  }

  addComments = () => {
    localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments))
  }

  addNewComment = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'rainebeaudubs' };
    const comments = [...this.state.comments];
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  }

  incrementLikes = () => {
    this.setState(prevState => ({
      likes: ++prevState.likes
    }));
  }

  componentDidMount() {
    const id = this.props.postId;
    if(localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      })
    } else {
      this.addComments();
    }
  }

  componentWillUnmount() {
    this.addComments();
  }

  render() {
    return (
      <CommentSectionDiv>
        <CommentIcons>
          <CommentIcon className="far fa-heart" onClick={this.incrementLikes}></CommentIcon>
          <CommentIcon className="far fa-comment"></CommentIcon>
        </CommentIcons>
        <p>{this.state.likes} likes</p>
        {this.state.comments.map((comment, i) => 
          <Comment 
            key={i} 
            comment={comment} 
        /> )}
        <CommentInput 
          comment={this.state.comment}
          addNewComment={this.addNewComment}
          handleCommentInput={this.handleCommentInput} 
        />
      </CommentSectionDiv>
    );
  }
}

export default CommentSection;