// PostList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";

const PostList = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  return (
    <>
      {/* <Post /> */}
      {post_list.map((v, i) => {
        return <Post key={v.id} {...v} />;
      })}
    </>
  );
};

export default PostList;
