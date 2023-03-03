import React from 'react';
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
  width: 44.916rem;
  height: 58.416rem;
  left: end;
  top: 15%;
  background: #ffffff;
  box-shadow: -1.666rem -1.666rem 5rem rgba(0, 0, 0, 0.25),
    1.666rem 1.666rem 5rem rgba(0, 0, 0, 0.2);
  border-radius: 3.333rem;
  padding: 2.5rem;
`;

CardSign.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  color: #333333;
  margin-bottom: -20px;
`;

const Strong = styled.strong`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 21px;
  color: #c00d0d;
`;

CardSign.SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #333333;
  margin-bottom: 60px;
`;

export default CardSign;
