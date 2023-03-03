import React from 'react';
import { CardActions } from '@mui/material';
import styled from '@emotion/styled';
import FormSign from '../form/FormSign';
import Button from '../button/Button';

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
        <Button />
      </CardActions>
    </CardSign.Card>
  );
};

CardSign.Card = styled.div`
  position: absolute;
  width: 44.916rem;
  height: 58.416rem;
  left: 60%;
  top: 15%;
  background: #ffffff;
  box-shadow: -1.666rem -1.666rem 5rem rgba(0, 0, 0, 0.25),
    1.666rem 1.666rem 5rem rgba(0, 0, 0, 0.2);
  border-radius: 3.333rem;
  padding: 2.5rem;
`;

CardSign.Title = styled.div`
  font-size: 1.333rem;
  margin-bottom: 1.666rem;
`;

export default CardSign;
