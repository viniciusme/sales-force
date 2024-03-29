import { useContext, useState } from 'react';
import { FaUserAlt, FaLock, FaEyeSlash } from 'react-icons/fa';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../button/Button';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const schema = yup
  .object({
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .email('Informe um e-mail válido'),
    password: yup
      .string()
      .required('Senha é obrigatório')
      .min(8, 'A senha deve ter pelo menos 6 dígitos'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const FormSign = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (userData: FormData) => {
    // console.log(userData);
    // console.log(email);
    // console.log(password);

    const isLogged = await auth.signin(email, password);
    console.log(isLogged);

    if (isLogged) {
      navigate('/private');
    } else {
      alert('Algo deu errado!');
    }

    // let content = {
    //   email,
    //   password,
    // };

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // fetch('https://localhost/user/login', {
    //   method: 'POST',
    //   body: JSON.stringify(content),
    //   headers,
    // });

    // navigate('/layout');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Label>
            Digite seu nome de usuário
            <IconUser />
            <Input
              data-testid='email'
              type='text'
              {...register('email')}
              placeholder='Informe o Usuário'
              onChange={(event) => setEmail(event.target.value)}
            />
          </Label>
          <ErrorEmail>{errors.email?.message}</ErrorEmail>
        </Section>

        <Section>
          <Label htmlFor=''>
            Digite sua senha de acesso
            <IconPadlock />
            <Input
              data-testid='password'
              type='password'
              {...register('password')}
              placeholder='Informe sua Senha'
              onChange={(event) => setPassword(event.target.value)}
            />
            <IconEye />
          </Label>
          <ErrorPassword>{errors.password?.message}</ErrorPassword>
          <ForgotPassword>
            <Link to='/recuperar-senha'>Esqueceu sua senha?</Link>
          </ForgotPassword>
        </Section>
        <CardAction>
          <Button data-testid='acessar' type='submit' value='Acessar' />
        </CardAction>
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

const ErrorEmail = styled.p`
  position: absolute;
  color: #c00d0d;
  font-size: 10px;
  font-weight: 600;
  margin-top: 2px;
`;

const ErrorPassword = styled.p`
  position: absolute;
  color: #c00d0d;
  font-size: 10px;
  font-weight: 600;
  margin-top: -20px;
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

const CardAction = styled.div`
  text-align: center;
  padding: 0;
`;

export default FormSign;
