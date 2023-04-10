import { useContext } from 'react';
import styled from 'styled-components';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonIcon from '@mui/icons-material/Person';

import userAvatar from '../../assets/images/avatar/avatar.svg';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const auth = useContext(AuthContext);

  return (
    <Section>
      <Container>
        <IconsSettingsProfile>
          <IconPerfilUser sx={{ fontSize: 25 }} />
          <Link to='perfil'>
            <IconSettings sx={{ fontSize: 25 }} />
          </Link>
        </IconsSettingsProfile>
        <ImagePerfil>
          <Badge>
            <BadgePercentage>100%</BadgePercentage>
          </Badge>
          <TargetPercentage>
            <Image src={userAvatar} alt='Foto Perfil' />
          </TargetPercentage>
        </ImagePerfil>
        <DadosPerfil>
          <UserName>{auth.user?.name}</UserName>
          <UserEmail>{auth.user?.email}</UserEmail>
        </DadosPerfil>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 5px 20px 5px;
`;

const IconsSettingsProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconPerfilUser = styled(PersonIcon)`
  color: #797979;
`;

const IconSettings = styled(SettingsSuggestIcon)`
  color: #797979;
`;

const ImagePerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TargetPercentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  background: #f7f8fa;
  border-radius: 50%;
  border: 2px solid #29cc39;
`;

const Badge = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  left: 141px;
  top: -21px;
  background: #29cc39;
  border: 2px solid #29cc39;
  box-shadow: 0px 2px 15px rgba(51, 97, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgePercentage = styled.p`
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
`;

const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const DadosPerfil = styled.div``;

const UserName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #6b7a99;
`;

const UserEmail = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: #adb8cc;
`;

export default UserProfile;
