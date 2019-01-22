import React from 'react';
import styled from 'styled-components';

const PostContainerDiv = styled.div `
  border: 1px solid lightgrey
  width: 500px;
  margin: auto;
  margin-top: 80px;`

const PostHeader = styled.div `
  display: flex;`

const PostThumbnail = styled.img `
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 10px;`

const PostUsername = styled.h5 `
  font-size: 13px;
  margin-top: 15px;`

const PostPic = styled.img `
  width: 490px;
  height: 490px;`

const PostTimestamp = styled.p `
  font-size:v 10px;`

function Post(props) {
  return (
    <PostContainerDiv>
      <PostHeader>
        <PostThumbnail src={props.insta.thumbnailUrl} alt="thumbnail" />
        <PostUsername>{props.insta.username}</PostUsername>
      </PostHeader>
      <PostPic src={props.insta.imageUrl} alt="Post" />
      <PostTimestamp>{props.insta.timestamp}</PostTimestamp>
    </PostContainerDiv>
  )
}

export default Post;