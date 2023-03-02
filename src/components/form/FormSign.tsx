import React from 'react';
import styled from '@emotion/styled';

const FormSign = () => {
  return (
    <>
      <Form>
        <label htmlFor=''>Digite seu nome de usuário</label>
        <input type='email' placeholder='Informe o Usuário' />

        <label htmlFor=''>Digite sua senha de acesso</label>
        <input type='password' placeholder='Informe sua Senha' />
        <p>Esqueceu sua senha?</p>
      </Form>
    </>
  );
};

const Form = styled.div`
  display: grid;
`;

export default FormSign;
