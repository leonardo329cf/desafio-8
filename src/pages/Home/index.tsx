import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-flex-container">
          <div className="home-content-container">
            <h1>Desafio Github API</h1>
            <h2>Bootcamp Spring React - DevSuperior</h2>
            <div className="button-container">
              <a href="/search">
                <button className="btn">Começar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
