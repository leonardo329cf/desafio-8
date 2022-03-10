import './styles.css';
import { Profile } from '../../types/Profile';
import InfoRow from '../InfoRow'

type Props = {
  profileInfo : Profile;
}

const ProfileCard = ( { profileInfo } : Props ) => {
  return (
    <div className="result-card">
      <div className="image-container">
        <img src={profileInfo.avatar_url} alt="Profile" />
      </div>
      <div className="result-content-container">
        <h3>Informações</h3>
        <InfoRow rowKey='Perfil' rowValue={profileInfo.url} />
        <InfoRow rowKey='Seguidores' rowValue={String(profileInfo.followers)} />
        <InfoRow rowKey='Localidade' rowValue={profileInfo.location} />
        <InfoRow rowKey='Nome' rowValue={profileInfo.name} />
      </div>
    </div>
  );
};

export default ProfileCard;
