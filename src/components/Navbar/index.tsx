import './styles.css';
import 'bootstrap/js/src/collapse.js'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-nav main-nav">
      <div className="container-fluid main-container-fluid">
        <a href="/" className="text-nav-text">
          <h4>Github API</h4>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
