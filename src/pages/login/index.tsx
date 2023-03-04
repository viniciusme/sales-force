import CardSign from '../../components/sign/CardSign';
import styled from '@emotion/styled';

import logoWhite from '../../assets/images/logo/logo-white.svg';

const Login = () => {
  return (
    <>
      <Section>
        <Container>
          <Logo>
            <Img src={logoWhite} alt='Logo Castro Naves' />
          </Logo>
          <Title>Força de Vendas</Title>
          <SubTitle>Vendas organizadas, ágeis e sem retrabalho</SubTitle>
          <Summary>
            Uma gestão eficiente é o que permite que nosso negócio cresça cada
            vez mais. Com o sistema de força de vendas integramos todas as
            etapas do negócio e proporcionamos mais tempo para criar
            estratégias, fazer novas parcerias e crescer.
          </Summary>
          <CardSign />
        </Container>
      </Section>
    </>
  );
};

const Section = styled.div`
  background-color: #c00d0d;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 270px;
  height: 73.2px;
  margin-bottom: 80px;
`;

const Img = styled.img`
  max-width: 270px;
  max-height: 73.2px;
  margin-top: 2.666rem;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Summary = styled.p`
  font-size: 12px;
  line-height: 24px;
  color: #ffffff;
  max-width: 500px;
  text-align: justify;
`;

export default Login;
