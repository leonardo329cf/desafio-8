import './styles.css';

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
      </div>
    </>
  );
};

export default Search;
