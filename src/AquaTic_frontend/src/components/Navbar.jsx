// src/components/Navbar.jsx
import React from 'react';
import logo from '/NovaPal.png';
import { useConnect } from '@connect2ic/react';

const Navbar = () => {
  const { disconnect } = useConnect();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid d-flex justify-content-center">
        <div className="navbar-brand">
          <img src={logo} alt="NovaPal" className="logo" />
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-danger" onClick={disconnect}>
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
