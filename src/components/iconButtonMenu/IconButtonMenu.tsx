import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const IconButtonMenu = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='success'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Link to='/'>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            color='inherit'
          >
            <AccountCircle
              sx={{
                color: '#fff',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 24,
              }}
            />
          </IconButton>
        </Link>
      </Box>
    </>
  );
};

export default IconButtonMenu;
