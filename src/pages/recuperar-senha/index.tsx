import styled from '@emotion/styled';

import ForgotPassword from '../../components/forgotPassword/ForgotPassword';
import logoWhite from '../../assets/images/logo/logo-white.svg';

const RecuperarSenha = () => {
  return (
    <>
      <Section>
        <Container>
          <Logo>
            <Img src={logoWhite} alt='Logo Castro Naves' />
          </Logo>
          <ForgotPassword />
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
  margin-bottom: 150px;
`;

const Img = styled.img`
  max-width: 270px;
  max-height: 73.2px;
  margin-top: 2.666rem;
`;

export default RecuperarSenha;
