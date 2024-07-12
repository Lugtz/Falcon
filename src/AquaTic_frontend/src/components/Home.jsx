// src/components/Home.jsx
import React from 'react';
import ConsultarSensorData from './ConsultarSensorData';
import EnviarSensorData from './EnviarSensorData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <h1 className="text-center">AquaTic Frontend</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Obtener Datos del Sensor</h2>
          <button className="btn btn-primary" onClick={() => {}}>
            Obtener Datos
          </button>
          <button className="btn btn-secondary ml-2" onClick={() => navigate('/graficas')}>
            Ver Gráficas
          </button>
          <ConsultarSensorData />
        </div>
        <div className="col-md-6">
          <EnviarSensorData />
        </div>
      </div>
    </div>
  );
};

export default Home;