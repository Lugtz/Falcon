import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { AquaTic_backend } from 'declarations/AquaTic_backend';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graficas = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AquaTic_backend.fetchSensorData();
        const parsedResponse = JSON.parse(response);
        setSensorData(parsedResponse);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  const processData = (data, key, label) => {
    return {
      labels: data.map(item => item.created_at),
      datasets: [
        {
          label: label || key,
          data: data.map(item => item[key]),
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    };
  };

  return (
    <div className="main-content">
      <h1 className="text-center">Gráficas</h1>
      <div className="charts-grid">
        <div className="chart-item">
          <h2 className="text-center">Temperatura</h2>
          <Line data={processData(sensorData, 'oxigeno', 'Temperatura')} />
        </div>
        <div className="chart-item">
          <h2 className="text-center">PH</h2>
          <Line data={processData(sensorData, 'ph')} />
        </div>
        <div className="chart-item">
          <h2 className="text-center">TDS</h2>
          <Line data={processData(sensorData, 'tds')} />
        </div>
      </div>
    </div>
  );
};

export default Graficas;
