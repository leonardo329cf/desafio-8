import { Profile } from 'types/Profile';
import './styles.css';
import ProfileCard from '../../components/ProfileCard';

const profile : Profile = {
  avatar_url: 'https://avatars.githubusercontent.com/u/39681326?v=4',
  url: "https://api.github.com/users/leonardo329cf",
  name: "Leonardo Cardozo Ferreira",
  location: "Cachoeirinha, RS, Brasil",
  followers: 4,
}

const Search = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-main-card">
          <div className="main-content-container">
            <h2>Encontre um perfil Github</h2>
            <form>
              <div className="form-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Usuário Github"
                />
                <button type="submit" className="btn btn-nav search-btn">
                  Encontrar
                </button>
              </div>
            </form>
          </div>
        </div>
        <ProfileCard profileInfo={profile}/>
      </div>
    </>
  );
};

export default Search;
