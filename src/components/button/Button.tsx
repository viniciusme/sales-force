import styled from '@emotion/styled';

export interface ButtonProps {
  name: string;
}

const Buttons = ({ name }: ButtonProps) => {
  return (
    <>
      <Button>{name}</Button>
    </>
  );
};

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 400px;
  height: 60px;
  background: #c00d0d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  cursor: pointer;
  &:hover {
    background: #ff0000;
    box-shadow: -10px -10px 20px #9f9f9f, 10px 10px 20px #ffffff;
    border-radius: 5px;
  }
`;

export default Buttons;
