import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick } = props;

  return (
    <>
      <Btn onClick={_onClick}>{text}</Btn>
    </>
  );
};

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  height: 2.5em;
`;

export default Button;
