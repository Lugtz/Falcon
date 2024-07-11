// src/components/Navbar.jsx
import React from 'react';
import { useConnect } from '@connect2ic/react';
import { useNavigate } from 'react-router-dom';
import logo from '/NovaPal.png';

const Navbar = () => {
  const { disconnect } = useConnect();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="NovaPal" width="40" height="40" className="d-inline-block align-text-top" />
          NovaPal
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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