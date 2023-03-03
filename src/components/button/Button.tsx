import React from 'react';
import styled from '@emotion/styled';

const Buttons = () => {
  return (
    <>
      <Button>Acessar</Button>
    </>
  );
};

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 451px;
  height: 60px;
  background: #c00d0d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  &:hover {
    width: 451px;
    height: 60px;
    background: #ff0000;
    box-shadow: -18px -18px 50px #9f9f9f, 18px 18px 36px #ffffff;
    border-radius: 5px;
  }
`;

export default Buttons;
