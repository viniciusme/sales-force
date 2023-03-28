import { FaUserAlt, FaLock, FaEyeSlash, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../button/Button';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Nome é obrigatório')
      .min(2, 'Nome deve ter pelo menos 2 dígitos'),
    phone: yup
      .string()
      .required('Telefone é obrigatório')
      .matches(/^[0-9]{10,11}$/, 'Telefone inválido'),
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .email('Informe um e-mail válido'),
    password: yup
      .string()
      .required('Password é obrigatório')
      .min(8, 'Password deve ter pelo menos 8 dígitos'),
    confirmPassword: yup
      .string()
      .required('Confirmar password é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const FormSignUp = () => {
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

  console.log(errors);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Label>
            Digite seu nome completo
            <IconUser />
            <Input
              type='text'
              {...register('name')}
              placeholder='Nome Completo'
            />
          </Label>
          <Error>{errors.name?.message}</Error>
        </Section>

        <SectionFlex>
          <Section>
            <Label>
              Telefone
              <IconPhone />
              <InputPhone
                type='text'
                {...register('phone')}
                placeholder='xx xxxxx-xxxx'
              />
            </Label>
            <Error>{errors.phone?.message}</Error>
          </Section>
          <Section>
            <Label>
              E-mail
              <InconEmail />
              <InputEmail
                type='text'
                {...register('email')}
                placeholder='Informe seu email'
              />
            </Label>
            <Error>{errors.email?.message}</Error>
          </Section>
        </SectionFlex>

        <Section>
          <Label>
            Digite sua senha
            <IconPadlock />
            <Input
              type='password'
              {...register('password')}
              placeholder='********'
            />
          </Label>
          <Error>{errors.password?.message}</Error>
        </Section>

        <Section>
          <Label>
            Confirme sua senha
            <IconPadlockConfirm />
            <Input
              type='password'
              {...register('confirmPassword')}
              placeholder='********'
            />
          </Label>
          <Error>{errors.confirmPassword?.message}</Error>
          <IconEye />
        </Section>

        <CardAction>
          <Button type='submit' value='Cadastrar' />
        </CardAction>
      </Form>
    </>
  );
};

const Form = styled.form`
  padding: 8px 0px 0px 0px;
`;

const Section = styled.div`
  padding: 5px 0px 8px 0px;
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

const Error = styled.p`
  position: absolute;
  color: #c00d0d;
  font-size: 10px;
  font-weight: 600;
  margin-top: 0px;
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

const CardAction = styled.div`
  text-align: center;
  padding: 0;
`;

export default FormSignUp;
