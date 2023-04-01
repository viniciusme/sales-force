import { Form } from 'react-router-dom';
import styled from 'styled-components';

const DataPerfil = () => {
  return (
    <>
      <Section>
        <PerfilTitle>Dados do Usuário</PerfilTitle>
        <Form></Form>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100%;
`;

const PerfilTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #6b7a99;
`;

export default DataPerfil;
