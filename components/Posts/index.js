import React from 'react'
import ContentPost from '../ContentPost'
import PostContainer from '../PostContainer'

const Post = () => {
  return (
    <div className="flex-[3]">
      <ContentPost />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default Post