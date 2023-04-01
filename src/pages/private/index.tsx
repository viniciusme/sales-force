import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { IconButton } from '@mui/material';
import logoWhite from '../../assets/images/logo/logo-white.svg';
import styled from 'styled-components';
import IconButtonMenu from '../../components/iconButtonMenu/IconButtonMenu';
import MenuIcon from '../../components/menuIcon/MenuIcon';
import { Outlet } from 'react-router-dom';
import UserProfile from '../../components/userProfile/UserProfile';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            background: '#C00D0D',
          }}
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Img src={logoWhite} alt='Logo Castro Naves' />
          </Box>
          <IconButtonMenu />
        </Toolbar>
      </AppBar>

      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Box>
            <UserProfile />
          </Box>
          <Divider />
          <Box>Teste</Box>
        </Box>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 10 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

const Img = styled.img`
  width: 88px;
  height: 23px;
  max-width: 88px;
  max-height: 23px;
`;
