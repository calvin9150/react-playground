import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label, placeholder, _onChange } = props;

  return (
    <>
      <p>{label}</p>
      <InputLayout placeholder={placeholder} onChange={_onChange} />
    </>
  );
};

const InputLayout = styled.input`
  width: 100%;
  height: 2.5em;
`;

export default Input;
