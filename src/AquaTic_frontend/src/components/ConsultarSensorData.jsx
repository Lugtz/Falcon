// src/components/ConsultarSensorData.jsx
import React, { useState } from 'react';
import { AquaTic_backend } from '../../../declarations/AquaTic_backend';

const ConsultarSensorData = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await AquaTic_backend.fetchSensorData();
      const parsedResponse = JSON.parse(response); // Parsear la cadena JSON a un objeto
      setSensorData(parsedResponse);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Obtener Datos del Sensor</h2>
      <button className="btn btn-primary mb-3" onClick={fetchData}>
        Obtener Datos
      </button>
      {sensorData && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID del Sensor</th>
                <th>TDS</th>
                <th>PH</th>
                <th>Oxígeno</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {sensorData.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.tds}</td>
                  <td>{data.ph}</td>
                  <td>{data.oxigeno}</td>
                  <td>{data.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default ConsultarSensorData;