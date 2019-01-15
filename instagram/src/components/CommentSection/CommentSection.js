import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
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

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    }
    else {
      this.addComments();
    }
  }

  componentWillUnmount() {
    this.addComments();
  }

  render() {

    return (
      <div>
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

// import React, { Component } from 'react';
// import Comment from './Comment';
// import PropTypes from 'prop-types';
// import CommentInput from './CommentInput';








// function CommentSection(props) {
//   return (
//     <div>
//       {props.comments.map(comment => {
//         return <Comment comment={comment} />;
//       })}
//     </div>
//   );
// }