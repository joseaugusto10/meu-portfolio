import { Link, NavLink } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <div className="container-main">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre-mim">
                Sobre-mim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projetos">
                Projetos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/curriculo">
                Currículo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contato">
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
