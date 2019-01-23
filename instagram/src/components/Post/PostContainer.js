import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostContainerWrapper = styled.ul `
  padding-left: 0;`

const PostContainer = props => {
  let insta = props.insta;
  let search = props.searchString;

  if(search === '') {
    insta = insta.filter(user =>
      user.username.toLowerCase().match(search));
  }

  return (
    <PostContainerWrapper>
      {props.instas.map(insta => {
        return <Post insta={insta} key={insta.timestamp} />
        })}
    </PostContainerWrapper>
  );
}

export default PostContainer;