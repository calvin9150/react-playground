import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Text, Button, Image, Input } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import Upload from "../shared/Upload";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;

  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0" padding="16px" center>
        <Text size="32px bold">로그인 후에만 작성 가능합니다.</Text>
        <Button
          size="16px"
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인하러 가기
        </Button>
      </Grid>
    );
  }

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  return (
    <>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>

        <Image shape="rectangle" />
      </Grid>

      <Grid padding="16px">
        <Input
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
          _onChange={changeContents}
        />
      </Grid>

      <Grid padding="16px">
        <Button text="게시글 작성" _onClick={addPost}></Button>
      </Grid>
    </>
  );
};

export default PostWrite;
