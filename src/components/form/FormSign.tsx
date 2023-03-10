import { FaUserAlt, FaLock, FaEyeSlash } from 'react-icons/fa';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FormSign = () => {
  return (
    <>
      <Form>
        <Section>
          <Label>Digite seu nome de usuário</Label>
          <IconUser />
          <Input type='email' placeholder='Informe o Usuário' />
        </Section>

        <Section>
          <Label htmlFor=''>Digite sua senha de acesso</Label>
          <IconPadlock />
          <Input type='password' placeholder='Informe sua Senha' />
          <IconEye />
        </Section>
        <ForgotPassword>
          <Link to='/recuperar-senha'>Esqueceu sua senha?</Link>
        </ForgotPassword>
      </Form>
    </>
  );
};

const Form = styled.div`
  display: grid;
  flex-direction: column;
`;

const Section = styled.div`
  padding: 20px 0px 0px 0px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 2rem;
  color: #000000;
  margin-bottom: 10px;
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
  padding: 0px 0px 0px 35px;
`;

const IconUser = styled(FaUserAlt)`
  position: relative;
  top: 40px;
  left: -150px;
  font-size: 14px;
  color: #959090;
`;

const IconPadlock = styled(FaLock)`
  position: relative;
  top: 40px;
  left: -150px;
  font-size: 14px;
  color: #959090;
`;

const IconEye = styled(FaEyeSlash)`
  position: relative;
  top: -35px;
  left: 365px;
  font-size: 16px;
  color: #959090;
`;

const ForgotPassword = styled.p`
  position: relative;
  left: 255px;
  top: -20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  color: #c00d0d;
`;

export default FormSign;
