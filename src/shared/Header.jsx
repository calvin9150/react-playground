import React from "react";
import { useHistory } from "react-router";

import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  const history = useHistory();

  const onClickLogin = () => {
    history.push("/login");
  };

  const onClickSignup = () => {
    history.push("/signup");
  };

  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid is_flex>
          <Button text="로그인" _onClick={onClickLogin}></Button>
          <Button text="회원가입" _onClick={onClickSignup}></Button>
        </Grid>
      </Grid>
    </>
  );
};

Header.defaultProps = {};

export default Header;
