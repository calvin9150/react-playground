import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = (props) => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
      console.log("zz", paging?.next);
    }
  }, []);

  return (
    <>
      <InfinityScroll
        callNext={() => {
          console.log("next!");
          dispatch(postActions.getPostFB(paging?.next));
        }}
        is_next={paging?.next ? true : false}
        loading={is_loading}
      >
        {post_list.map((p, idx) => {
          if (user_info && p.user_info.user_id === user_info.uid) {
            return <Post key={p.id} {...p} is_me />;
          }
          return <Post key={p.id} {...p} />;
        })}
      </InfinityScroll>
    </>
  );
};

export default PostList;
