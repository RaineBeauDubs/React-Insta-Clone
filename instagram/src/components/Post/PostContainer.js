import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostContainerWrapper = styled.ul `
  padding-left: 0;`

function PostContainer(props) {
  return (
    <PostContainerWrapper>
      {props.instas.map(insta => {
        return <Post insta={insta} key={insta.timestamp} />
        })}
    </PostContainerWrapper>
  );
}

export default PostContainer;