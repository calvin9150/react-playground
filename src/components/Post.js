import React from "react";

import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "gom",
    user_profile:
      "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
  },
  image_url:
    "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
  contents: "곰탱이",
  comment_cnt: 0,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;
