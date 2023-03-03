import React from 'react';
import { FaUserAlt, FaLock, FaEyeSlash } from 'react-icons/fa';
import styled from '@emotion/styled';

const FormSign = () => {
  return (
    <>
      <Form>
        <Label>Digite seu nome de usuário</Label>
        <IconUser />
        <Input type='email' placeholder='Informe o Usuário' />
        <Label htmlFor=''>Digite sua senha de acesso</Label>
        <IconPadlock />
        <Input type='password' placeholder='Informe sua Senha' />
        <IconEye />
        <p>Esqueceu sua senha?</p>
      </Form>
    </>
  );
};

const Form = styled.div`
  display: grid;
  flex-direction: column;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 1.333rem;
  line-height: 2rem;
  color: #000000;
`;

const Input = styled.input`
  width: 37.583rem;
  height: 4.75rem;
  background: #f3f3f3;
  border: 0.083rem solid #c4cfde;
  border-radius: 0.833rem;
  font-weight: 400;
  font-size: 16px;
  color: #959090;
  padding: 0px 0px 0px 45px;
`;

const IconUser = styled(FaUserAlt)`
  position: relative;
  top: 35px;
  left: 20px;
  font-size: 16px;
  color: #959090;
`;

const IconPadlock = styled(FaLock)`
  position: relative;
  top: 35px;
  left: 20px;
  font-size: 16px;
  color: #959090;
`;

const IconEye = styled(FaEyeSlash)`
  position: relative;
  top: -40px;
  left: 412px;
  font-size: 22px;
  color: #959090;
`;

export default FormSign;
