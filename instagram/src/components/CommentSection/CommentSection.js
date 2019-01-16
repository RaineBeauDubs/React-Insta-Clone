import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      comment: ''
    };
  }



  commentInput = event => {
    this.setState({ comment: event.target.value })
  }

  addComments = () => {
    localStorage.setItem(this.props.postId)
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
    }))
  }

  componentWillUnmount() {
    this.addComments();
  }

  render() {

    return (
      <div>
      <div className="insta-bottom">
        <div className="icons">
          <i className="icon far fa-heart" onClick={this.incrementLikes}></i>
          <i className="icon far fa-comment"></i>
        </div>
        <p>{this.state.likes} likes</p>
      </div>
        {this.state.comments.map((comment, i) => <Comment key={i}
          comment={comment} />)}
        <CommentInput comment={this.state.comments}
          addNewComment={this.addNewComment}
          commentInput={this.commentInput} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, username: PropTypes.string }))
};

export default CommentSection;

