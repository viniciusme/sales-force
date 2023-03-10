import styled from '@emotion/styled';

import CardSignUp from '../../components/signup/CardSignUp';

import logoWhite from '../../assets/images/logo/logo-white.svg';

const Cadastro = () => {
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
          <CardSignUp />
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
  width: 200px;
  height: 52.1px;
  margin-bottom: 150px;
`;

const Img = styled.img`
  width: 200px;
  height: 52.1px;
  max-width: 200px;
  max-height: 52.1px;
  margin-top: 2.666rem;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 5px;
`;

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 80px;
`;

const Summary = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  max-width: 487px;
  text-align: justify;
`;

export default Cadastro;
