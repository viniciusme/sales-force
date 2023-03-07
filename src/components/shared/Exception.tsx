import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Exception = () => {
  return (
    <>
      <Section>
        <Container>
          <Teste>
            <SentimentVeryDissatisfiedIcon
              sx={{
                fontSize: 34,
                color: '#c00d0d',
              }}
            />
            <Box>
              Ops! Um erro inesperado aconteceu ou essa página não existe,
              verifique a URL acessada!
              <br />
              <br />
              <Link to='/'>
                <Span>Me tire daqui...</Span>
              </Link>
            </Box>
          </Teste>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Teste = styled.div`
  text-align: center;
`;

const Box = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  color: #c00d0d;
`;

export default Exception;
