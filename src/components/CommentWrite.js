import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Input, Button } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const [comment_text, setCommentText] = useState();

  const dispatch = useDispatch();
  const { post_id } = props;

  const onChange = (e) => {
    setCommentText(e.target.value);
  };
  const write = () => {
    if (comment_text === "") {
      window.alert("댓글을 입력해주세요!");
      return;
    }
    // 파이어스토어에 추가합니다.
    dispatch(commentActions.addCommentFB(post_id, comment_text));
    // 입력된 텍스트는 지우기!
    setCommentText("");
  };
  return (
    <>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChang={onChange}
          value={comment_text}
        />
        <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </>
  );
};

export default CommentWrite;
