import { Profile } from 'types/Profile';
import './styles.css';
import ProfileCard from '../../components/ProfileCard';
import Loader from '../../components/Loader';
import React, { useState } from 'react';
import axios from 'axios';

type Username = {
  username: string;
}

const Search = () => {
  const [usernameInput, setUsernameInput] = useState<Username>({
    username: '',
  });

  const [profile, setProfile] = useState<Profile>();

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const name = event.target.name;
    const value = event.target.value;
    
    setUsernameInput( { ...usernameInput, [name]:value } );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios.get(`https://api.github.com/users/${usernameInput.username}`)
    .then((response) => {
      setProfile(response.data);
    })
    .catch((error) => {
      setProfile(undefined);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <>
      <div className="search-container">
        <div className="search-main-card">
          <div className="main-content-container">
            <h2>Encontre um perfil Github</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <input
                  type="text"
                  className="search-input"
                  name="username"
                  value={usernameInput.username}
                  placeholder="Usuário Github"
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-nav search-btn">
                  Encontrar
                </button>
              </div>
            </form>
          </div>
        </div>
        {isLoading ? 
        <Loader />
        : 
        (profile && <ProfileCard profileInfo={profile} />)}
        
      </div>
    </>
  );
};

export default Search;
