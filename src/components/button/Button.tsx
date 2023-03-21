import styled from '@emotion/styled';

const Button = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 390px;
  height: 60px;
  background: #c00d0d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #ff0000;
    box-shadow: -10px -10px 20px #9f9f9f, 10px 10px 20px #ffffff;
    border-radius: 5px;
  }
`;

export default Button;
