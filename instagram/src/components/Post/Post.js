import React from 'react';
import styled from 'styled-components';

const PostContainerDiv = styled.div `
  border: 1px solid lightgrey`

const PostHeader = styled.div `
  display: flex;`

const PostThumbnail = styled.img `
  border-radius: 50%;`

const PostUsername = styled.h5 `
  font-size: 15px;`

const PostPic = styled.img `
  height: auto;`

const PostTimestamp = styled.p `
  font-size:v 10px;`

function Post(props) {
  return (
    <PostContainerDiv>
      <PostHeader>
        <PostThumbnail src={props.insta.thumbnailUrl} alt="thumbnail" />
        <PostUsername>{props.insta.username}</PostUsername>
      </PostHeader>
      <PostPic src={props.insta.imageURL} alt="Post" />
      <PostTimestamp>{props.insta.timestamp}</PostTimestamp>
    </PostContainerDiv>
  )
}

export default Post;