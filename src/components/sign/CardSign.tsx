import React from 'react';
import { Button, CardActions, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import FormSign from '../form/FormSign';

const CardSign = () => {
  return (
    <CardSign.Card>
      <CardSign.Title>
        <p>
          Bem-vindo a <strong>Castro Naves</strong>
        </p>
        <p>Conecte-se</p>
      </CardSign.Title>
      <FormSign />
      <CardActions>
        <Button>Entrar</Button>
      </CardActions>
    </CardSign.Card>
  );
};

CardSign.Card = styled.div`
  position: absolute;
  width: 539px;
  height: 701px;
  left: 60%;
  top: 15%;
  background: #ffffff;
  box-shadow: -20px -20px 60px rgba(0, 0, 0, 0.25),
    20px 20px 60px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  padding: 30px;
`;

CardSign.Title = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

export default CardSign;
