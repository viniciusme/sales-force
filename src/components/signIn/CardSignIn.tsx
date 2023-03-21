import styled from 'styled-components';
import FormSign from '../form/FormSign';

import { Link } from 'react-router-dom';

const CardSignIn = () => {
  return (
    <Section>
      <CardSignIn.Card>
        <CardSignIn.Title>
          <p>
            Bem-vindo a <Strong>Castro Naves</Strong>
          </p>
        </CardSignIn.Title>
        <CardSignIn.SubTitle>
          <p>Conecte-se</p>
        </CardSignIn.SubTitle>
        <FormSign />
        <CardSignIn.Footer>
          <p>Ainda não tem conta?</p>
          <Link to='/cadastrar'>
            <Span>Cadastre-se</Span>
          </Link>
        </CardSignIn.Footer>
      </CardSignIn.Card>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

CardSignIn.Card = styled.div`
  position: absolute;
  width: 450px;
  height: 444px;
  left: end;
  top: calc(100vh - 85%);
  background: #ffffff;
  box-shadow: -1.666rem -1.666rem 5rem rgba(0, 0, 0, 0.25),
    1.666rem 1.666rem 5rem rgba(0, 0, 0, 0.2);
  border-radius: 3.333rem;
  padding: 2.5rem;
`;

CardSignIn.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 5px;
`;

const Strong = styled.strong`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #c00d0d;
`;

CardSignIn.SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #333333;
`;

CardSignIn.Footer = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #8d8d8d;
  margin-top: 15px;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  color: #c00d0d;
`;

export default CardSignIn;
