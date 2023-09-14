import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    };
  }

  componentDidMount() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap';
    document.head.appendChild(link);
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    const navbarClasses = this.state.navbarOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';

    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="./img/SSU.png" alt="Logo SSU" style={{ maxWidth: '50px', height: 'auto' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={this.state.navbarOpen} aria-label="Toggle navigation" onClick={this.toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={navbarClasses} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="bi bi-house"></i> Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                  <i className="bi bi-person"></i> Sobre nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jugadores" className="nav-link">
                  <i className="bi bi-person-badge-fill"></i> Nuestros jugadores
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                  <i className="bi bi-images"></i> Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/otros" className="nav-link">
                  <i className="bi bi-controller"></i> ¿Quieres conocer otros juegos?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
