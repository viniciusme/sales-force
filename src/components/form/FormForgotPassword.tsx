import styled from '@emotion/styled';
import { MdEmail } from 'react-icons/md';

const FormForgotPassword = () => {
  return (
    <>
      <Form>
        <Section>
          <Label>Digite seu e-mail de cadastro</Label>
          <InconEmail />
          <Input type='email' placeholder='Informe seu E-mail' />
        </Section>
      </Form>
    </>
  );
};

const Form = styled.div`
  display: grid;
  flex-direction: column;
`;

const Section = styled.div`
  padding: 20px 0px 40px 0px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 2rem;
  color: #000000;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 433px;
  height: 57px;
  background: #f3f3f3;
  border: 0.083rem solid #c4cfde;
  border-radius: 0.833rem;
  font-weight: 500;
  font-size: 14px;
  color: #959090;
  padding: 0px 0px 0px 45px;
  margin-top: 10px;
`;

const InconEmail = styled(MdEmail)`
  position: relative;
  top: 59px;
  left: -190px;
  font-size: 19px;
  color: #959090;
`;

export default FormForgotPassword;
