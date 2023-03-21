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
  width: 100vw;
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

export default RecuperarSenha;
