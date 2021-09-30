import React from "react";

import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px"></Grid>
        <Grid>
          <Image shape="rectangle" src={props.src}></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
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
    "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.astronomer.rocks%2Fnews%2FarticleView.html%3Fidxno%3D86320&psig=AOvVaw1f2jkQvWRPsw6kQrqpl63z&ust=1633064691857000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDGvZf2pfMCFQAAAAAdAAAAABAD",
  contents: "북극이다.",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;
