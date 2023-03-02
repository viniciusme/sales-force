import React from 'react';
import CardSign from '../../components/sign/CardSign';
import styled from '@emotion/styled';

const Login = () => {
  return (
    <>
      <Section>
        <Container>
          <Logo>
            <img src='' alt='Logo Castro Naves' />
          </Logo>
          <Title>Força de Vendas</Title>
          <SubTitle>Vendas organizadas, ágeis e sem retrabalho</SubTitle>
          <Summary>
            Uma gestão eficiente é o que permite que nosso negócio cresça cada
            vez mais. Com o sistema de força de vendas integramos todas as
            etapas do negócio e proporcionamos mais tempo para criar
            estratégias, fazer novas parcerias e crescer.
          </Summary>
          <AreaLogistics>
            <img src='' alt='Imagem representando sistema de e-commerce' />
            <img src='' alt='Imagem de caminhão vermelho da logística' />
            <img src='' alt='Imagem de caminhão amarelo da logística' />
            <img src='' alt='' />
          </AreaLogistics>
          <CardSign />
        </Container>
      </Section>
    </>
  );
};

const Section = styled.div`
  background-color: #c00d0d;
  width: 100%;
  height: 30rem;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 350px;
  height: 94px;
`;

const Title = styled.h3``;

const SubTitle = styled.h6``;

const Summary = styled.p``;

const AreaLogistics = styled.div``;

export default Login;
