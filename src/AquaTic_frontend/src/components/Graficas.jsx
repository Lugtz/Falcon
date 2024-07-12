// src/components/Graficas.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Graficas = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <h1>Gráficas</h1>
      <p>Esta sección será utilizada para mostrar gráficos en el futuro.</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/home')}>
        Regresar al Inicio
      </button>
    </div>
  );
};

export default Graficas;