// src/components/Home.jsx
import React from 'react';
import ConsultarSensorData from './ConsultarSensorData';
import EnviarSensorData from './EnviarSensorData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center">AquaTic Frontend</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Obtener Datos del Sensor</h2>
          <ConsultarSensorData />
          <button className="btn btn-secondary mt-3" onClick={() => navigate('/graficas')}>
            Ver Gráficas
          </button>
        </div>
        <div className="col-md-6">
          <EnviarSensorData />
        </div>
      </div>
    </>
  );
};

export default Home;