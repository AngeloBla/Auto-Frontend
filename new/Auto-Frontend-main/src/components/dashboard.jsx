import React from 'react';
import Navbar from './navbar';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Beispiel-Daten für den Barchart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Number of Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
};

  return (
    <div>
      <Navbar />
      {/* Hinzugefügte Linie */}
      <div style={{ borderBottom: '3px solid gray' }}>
      </div>

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
                <li className="nav-item">
                  <a className="nav-link" href="/konsturktion">
                    Konsturktion
                  </a>
                </li>
                {/* Weitere Navigationspunkte hier hinzufügen */}
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            

            </div>

           
            {/* Barchart */}
            <div className="mt-5" style={{ height: '500px', width: '500px' }}>
            <h2 style={{ textAlign: 'center' }}>Anzahl der Verkäufe</h2>
            <Bar data={chartData} options={chartOptions} />



            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
