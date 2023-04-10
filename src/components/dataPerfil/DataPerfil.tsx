import { useContext } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { Form } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../../contexts/Auth/AuthContext';
import Button from '../button/Button';

const DataPerfil = () => {
  const user = useContext(AuthContext);
  console.log(user.user?.uf);

  return (
    <>
      <Section>
        <Box>
          <PerfilTitle>Detalhes do Usuário</PerfilTitle>
        </Box>
        <Card>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  value={user.user?.name}
                  id='outlined-basic'
                  label='Nome Completo'
                  variant='outlined'
                  placeholder='Nome Completo'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  value={user.user?.birth}
                  id='outlined-basic'
                  label='Data de Nascimento'
                  variant='outlined'
                  placeholder='Data de Nascimento'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={4}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  value={user.user?.phone}
                  id='outlined-basic'
                  label='Telefone'
                  variant='outlined'
                  placeholder='+55 (34) xxxxx-xxxx'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  value={user.user?.email}
                  id='outlined-basic'
                  label='E-mail'
                  variant='outlined'
                  placeholder='usuario@gmail.com'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  value={user.user?.city}
                  id='outlined-basic'
                  label='Cidade'
                  variant='outlined'
                  placeholder='Uberlândia'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  value={user.user?.uf}
                  id='outlined-basic'
                  label='UF'
                  variant='outlined'
                  placeholder='Minas Gerais'
                />
              </Grid>
            </Grid>
            <CardAction>
              {/* <Button type='submit' value='Salvar' /> */}
            </CardAction>
          </Form>
        </Card>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100%;
`;

const PerfilTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #6b7a99;
  margin-bottom: 20px;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 600;
  background: #e6eef0;
  box-shadow: 15px 35px 70px #bebebe, -35px -5px 70px #ffffff;
  border-radius: 8px;
  padding: 40px 20px 40px 20px;
`;

const CardAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 0px 0px;
`;

export default DataPerfil;
