// src/components/Home.jsx
import React from 'react';
import ConsultarSensorData from './ConsultarSensorData';
import EnviarSensorData from './EnviarSensorData';

const Home = () => {
  return (
    <>
      <h1 className="text-center">AquaTic Frontend</h1>
      <ConsultarSensorData />
      <EnviarSensorData />
    </>
  );
};

export default Home;
