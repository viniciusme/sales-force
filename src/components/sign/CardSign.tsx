import { CardActions } from '@mui/material';
import styled from '@emotion/styled';
import FormSign from '../form/FormSign';
import Button from '../button/Button';

const CardSign = () => {
  return (
    <Section>
      <CardSign.Card>
        <CardSign.Title>
          <p>
            Bem-vindo a <Strong>Castro Naves</Strong>
          </p>
        </CardSign.Title>
        <CardSign.SubTitle>
          <p>Conecte-se</p>
        </CardSign.SubTitle>
        <FormSign />
        <CardActions>
          <Button />
        </CardActions>
        <CardSign.Footer>
          <p>Ainda não tem conta?</p>
          <Span>Cadastre-se</Span>
        </CardSign.Footer>
      </CardSign.Card>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

CardSign.Card = styled.div`
  position: absolute;
  width: 41.25rem;
  height: 52.333rem;
  left: end;
  top: calc(100vh - 85%);
  background: #ffffff;
  box-shadow: -1.666rem -1.666rem 5rem rgba(0, 0, 0, 0.25),
    1.666rem 1.666rem 5rem rgba(0, 0, 0, 0.2);
  border-radius: 3.333rem;
  padding: 2.5rem;
`;

CardSign.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #333333;
  margin-bottom: 5px;
`;

const Strong = styled.strong`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 21px;
  color: #c00d0d;
`;

CardSign.SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #333333;
  margin-bottom: 60px;
`;

CardSign.Footer = styled.div`
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

export default CardSign;
