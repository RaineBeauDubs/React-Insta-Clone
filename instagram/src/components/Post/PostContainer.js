import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostContainerWrapper = styled.ul `
  padding-left: 0;`

const PostContainer = props => {

  return (
    <PostContainerWrapper>
      {props.posts.map(insta => {
        return <Post insta={insta} key={insta.timestamp} />
        })}
    </PostContainerWrapper>
  );
}

export default PostContainer;