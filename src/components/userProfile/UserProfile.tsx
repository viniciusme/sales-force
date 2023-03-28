import { useContext } from 'react';
import Box from '@mui/material/Box';

import userAvatar from '../../assets/images/avatar/avatar.svg';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const UserProfile = () => {
  const auth = useContext(AuthContext);

  return (
    <Box>
      <img src={userAvatar} alt='Foto Perfil' />
      {auth.user?.name}
    </Box>
  );
};

export default UserProfile;
