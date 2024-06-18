import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-unitel.png';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Unitel Logo" width="150" height="30" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Noticias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carrusel">Imagenes del dia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programas">Lista de programas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
