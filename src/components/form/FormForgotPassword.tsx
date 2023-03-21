import styled from '@emotion/styled';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../button/Button';

const schema = yup
  .object({
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .email('Informe um e-mail válido'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const FormForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (userData: FormData) => {
    console.log(userData);

    navigate('/');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Label>
            Digite seu e-mail de cadastro
            <InconEmail />
            <Input
              type='text'
              {...register('email')}
              placeholder='Informe seu E-mail'
            />
          </Label>
          <ErrorPassword>{errors.email?.message}</ErrorPassword>
          <CardAction>
            <Button type='submit' value='Recuperar Senha' />
          </CardAction>
        </Section>
      </Form>
    </>
  );
};

const Form = styled.form`
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
  caret-color: #c00d0d;
`;

const ErrorPassword = styled.p`
  position: absolute;
  color: #c00d0d;
  font-size: 10px;
  font-weight: 600;
  margin-top: 2px;
`;

const InconEmail = styled(MdEmail)`
  position: relative;
  top: 42px;
  left: -165px;
  font-size: 19px;
  color: #959090;
`;

const CardAction = styled.div`
  text-align: center;
  padding: 35px 0px 0px 0px;
`;

export default FormForgotPassword;
