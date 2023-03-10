import styled from '@emotion/styled';
import FormSignUp from '../form/FormSignUp';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const CardSignUp = () => {
  return (
    <Section>
      <CardSignUp.Card>
        <CardSignUp.Title>
          <p>
            Bem-vindo a <Strong>Castro Naves</Strong>
          </p>
        </CardSignUp.Title>
        <CardSignUp.SubTitle>
          <p>Inscreva-se</p>
        </CardSignUp.SubTitle>
        <FormSignUp />
        <CardSignUp.CardActions>
          <Button name='Cadastrar' />
        </CardSignUp.CardActions>
        <CardSignUp.Footer>
          <p>Ja tem uma conta?</p>
          <Link to='/'>
            <Span>Entrar</Span>
          </Link>
        </CardSignUp.Footer>
      </CardSignUp.Card>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

CardSignUp.Card = styled.div`
  position: absolute;
  width: 450px;
  height: 555px;
  left: end;
  top: calc(100vh - 93%);
  background: #ffffff;
  box-shadow: -1.666rem -1.666rem 5rem rgba(0, 0, 0, 0.25),
    1.666rem 1.666rem 5rem rgba(0, 0, 0, 0.2);
  border-radius: 3.333rem;
  padding: 2rem 2.5rem 0px 2.5rem;
`;

CardSignUp.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
`;

const Strong = styled.strong`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #c00d0d;
`;

CardSignUp.SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #333333;
`;

CardSignUp.Footer = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #8d8d8d;
  margin-top: 10px;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  color: #c00d0d;
`;

CardSignUp.CardActions = styled.div`
  padding: 0px;
`;

export default CardSignUp;
