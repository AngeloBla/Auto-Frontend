import React from 'react';
import Navbar from './navbar';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const einnahmenData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Einnahmen pro Monat',
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Kräftigeres Blau
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [6302535, 6545275, 6995275, 6302535, 6999775, 7499775, 7999775, 7995775, 8999775, 9499775, 9999775, 10499775],
      },
    ],
  };
  
  const ausgabenData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Ausgaben pro Monat',
        backgroundColor: 'rgba(255, 69, 0, 0.6)', // Kräftigeres Rotorange
        borderColor: 'rgba(255, 69, 0, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 69, 0, 0.8)',
        hoverBorderColor: 'rgba(255, 69, 0, 1)',
        data: [5002535, 5545275, 5095275, 4302535, 5599775, 4199775, 5919715, 4195775, 5199775, 4115775, 5599775, 4199775],
      },
    ],
  };
  

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      y: {
        beginAtZero: true,
        max: 12000000, // Hier wird der maximale Wert auf 12 Millionen festgelegt
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  
  return (
    <div>
      <Navbar />
      {/* Hinzugefügte Linie */}
      <div style={{ borderBottom: '3px solid gray' }}></div>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
          >
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Startseite
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/lager">
                    Lager
                  </a>
                </li>
                {/* Weitere Navigationspunkte hier hinzufügen */}
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            </div>

            {/* Barcharts */}
            <div className="mt-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ height: '600px', width: '600px' }}>
                <h2 style={{ textAlign: 'center' }}>Einnahmen Astley Motors</h2>
                <Bar data={einnahmenData} options={chartOptions} />
              </div>
              <div style={{ height: '600px', width: '600px' }}>
                <h2 style={{ textAlign: 'center' }}>Ausgaben Astley Motors</h2>
                <Bar data={ausgabenData} options={chartOptions} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
