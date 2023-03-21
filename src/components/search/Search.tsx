import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

const Search = () => {
  return (
    <>
      <IconSearch />
      <Input placeholder='Pesquisar...' />
    </>
  );
};

const Input = styled.input`
  width: 300px;
  padding: 8px 10px 8px 50px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 0;
  border-radius: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  &:hover {
    background: rgba(225, 225, 225, 0.5);
  }
  &::placeholder {
    color: #fff;
  }
`;

const IconSearch = styled(FaSistrix)`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  top: 2px;
  left: 40px;
`;

export default Search;
