
import React, { useEffect } from 'react';
import './styledashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Chart } from 'chart.js';
import { Button, Dropdown } from 'react-bootstrap';

// const Dashboard = () => {
//     useEffect(() => {
//       // Initialisieren Sie hier Chart.js-Instanzen
//     }, []);
const ThemeDropdown = () => {
    const [theme, setTheme] = useState('auto'); // Zustand für das aktuelle Theme
  
    const handleSelect = (eventKey) => {
      setTheme(eventKey);
      // Zusätzliche Logik zur Anwendung des Themes hinzufügen
    };
const Dashboard = () => {
  return (
    <>
      <Dropdown className="position-fixed bottom-0 end-0 mb-3 me-3">
      <Dropdown.Toggle variant="bd-primary" id="dropdown-theme-toggle">
        {/* Aktuelles Icon basierend auf dem ausgewählten Theme */}
        <span className="visually-hidden">Toggle theme</span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item eventKey="light" onSelect={handleSelect} className={theme === 'light' ? 'active' : ''}>
          {/* Icon für Light-Theme */}
          Light
        </Dropdown.Item>
        <Dropdown.Item eventKey="dark" onSelect={handleSelect} className={theme === 'dark' ? 'active' : ''}>
          {/* Icon für Dark-Theme */}
          Dark
        </Dropdown.Item>
        <Dropdown.Item eventKey="auto" onSelect={handleSelect} className={theme === 'auto' ? 'active' : ''}>
          {/* Icon für Auto-Theme */}
          Auto
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dashboard;

