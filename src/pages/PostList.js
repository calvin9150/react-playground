import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  console.log(post_list);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <>
      {post_list.map((v) => {
        if (user_info && v.user_info.user_id === user_info.uid) {
          return <Post key={v.id} {...v} is_me />;
        }
        return <Post key={v.id} {...v} />;
      })}
    </>
  );
};

export default PostList;
