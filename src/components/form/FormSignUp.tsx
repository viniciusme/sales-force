import React from 'react';
import { FaUserAlt, FaLock, FaEyeSlash, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from '@emotion/styled';

const FormSignUp = () => {
  return (
    <>
      <Form>
        <Section>
          <Label>Digite seu nome completo</Label>
          <IconUser />
          <Input type='name' placeholder='Nome Completo' />
        </Section>

        <SectionFlex>
          <Section>
            <Label>Telefone</Label>
            <IconPhone />
            <InputPhone type='phone' placeholder='xx xxxxx-xxxx' />
          </Section>
          <Section>
            <Label>E-mail</Label>
            <InconEmail />
            <InputEmail type='email' placeholder='Informe seu email' />
          </Section>
        </SectionFlex>

        <Section>
          <Label>Digite sua senha</Label>
          <IconPadlock />
          <Input type='name' placeholder='xxxxxxxx' />
        </Section>

        <Section>
          <Label>Confirme sua senha</Label>
          <IconPadlockConfirm />
          <Input type='name' placeholder='xxxxxxxx' />
          <IconEye />
        </Section>
      </Form>
    </>
  );
};

const Form = styled.div`
  padding: 8px 0px 0px 0px;
`;

const Section = styled.div`
  padding: 5px 0px 5px 0px;
`;

const SectionFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 0px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
`;

const Input = styled.input`
  width: 390px;
  height: 50px;
  background: #f3f3f3;
  border: 0.083rem solid #c4cfde;
  border-radius: 0.833rem;
  font-weight: 500;
  font-size: 12px;
  color: #959090;
  padding: 0px 0px 0px 30px;
  margin-top: 0px;
  margin-bottom: 5px;
`;

const InputPhone = styled.input`
  width: 190px;
  height: 50px;
  background: #f3f3f3;
  border: 0.083rem solid #c4cfde;
  border-radius: 0.833rem;
  font-weight: 500;
  font-size: 12px;
  color: #959090;
  padding: 0px 0px 0px 30px;
  margin-bottom: 5px;
`;

const InputEmail = styled.input`
  width: 190px;
  height: 50px;
  background: #f3f3f3;
  border: 0.083rem solid #c4cfde;
  border-radius: 0.833rem;
  font-weight: 500;
  font-size: 12px;
  color: #959090;
  padding: 0px 0px 0px 30px;
  margin-bottom: 5px;
`;

const IconUser = styled(FaUserAlt)`
  position: relative;
  top: 45px;
  left: -150px;
  font-size: 14px;
  color: #959090;
`;

const IconPhone = styled(FaPhoneAlt)`
  position: relative;
  top: 40px;
  left: -42px;
  font-size: 14px;
  color: #959090;
`;

const InconEmail = styled(MdEmail)`
  position: relative;
  top: 42px;
  left: -30px;
  font-size: 14px;
  color: #959090;
`;

const IconPadlock = styled(FaLock)`
  position: relative;
  top: 45px;
  left: -92px;
  font-size: 14px;
  color: #959090;
`;

const IconPadlockConfirm = styled(FaLock)`
  position: relative;
  top: 45px;
  left: -112px;
  font-size: 14px;
  color: #959090;
`;

const IconEye = styled(FaEyeSlash)`
  position: relative;
  top: -35px;
  left: 360px;
  font-size: 16px;
  color: #959090;
`;

export default FormSignUp;
