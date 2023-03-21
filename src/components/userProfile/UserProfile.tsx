import Box from '@mui/material/Box';

import userAvatar from '../../assets/images/avatar/avatar.svg';

const UserProfile = () => {
  return (
    <Box>
      <img src={userAvatar} alt='Foto Perfil' />
    </Box>
  );
};

export default UserProfile;
