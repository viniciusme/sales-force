import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FormForgotPassword from '../form/FormForgotPassword';
import Button from '../button/Button';

const ForgotPassword = () => {
  return (
    <>
      <Section>
        <ForgotPassword.Card>
          <ForgotPassword.Title>
            <p>
              Informe o e-mail para o qual deseja redefinir sua{' '}
              <Strong>senha</Strong>
            </p>
          </ForgotPassword.Title>
          <FormForgotPassword />
          <CardActions>
            <Button name='Recuperar Senha' />
          </CardActions>
          <Footer>
            <p>Ja tem uma conta?</p>
            <Link to='/'>
              <Span>Entrar</Span>
            </Link>
          </Footer>
        </ForgotPassword.Card>
      </Section>
    </>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

ForgotPassword.Card = styled.div`
  position: absolute;
  width: 450px;
  height: 350px;
  top: calc(100vh - 75%);
  background: #ffffff;
  box-shadow: -1.666rem -1.666rem 5rem rgba(0, 0, 0, 0.25),
    1.666rem 1.666rem 5rem rgba(0, 0, 0, 0.2);
  border-radius: 3.333rem;
  padding: 2.5rem;
`;

ForgotPassword.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #333333;
  margin-bottom: 15px;
`;

const Strong = styled.strong`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #c00d0d;
`;

const CardActions = styled.div`
  text-align: center;
  padding: 0px;
`;

const Footer = styled.div`
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  color: #8d8d8d;
  margin-top: 10px;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  color: #c00d0d;
`;

export default ForgotPassword;
