import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import AWS from 'aws-sdk';

const Lager = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    // AWS-Konfiguration
    AWS.config.update({
      region: 'eu-central-1',
      accessKeyId: 'AKIA5NDZPB6SSRNAJKKB',
      secretAccessKey: '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',
    });

    // DynamoDB-Client initialisieren
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    // Parameter für den Scan-Vorgang
    const params = {
      TableName: 'Lager',
    };

    // Daten aus DynamoDB abrufen
    dynamoDB.scan(params, (error, result) => {
      if (error) {
        console.error('Fehler beim Abrufen der Daten aus DynamoDB', error);
        setError('Fehler beim Abrufen der Daten aus DynamoDB');
      } else {
        // Setze sowohl Daten als auch gefilterte Daten
        setData(result.Items);
        setFilteredData(result.Items);
      }

      // Setze den Ladezustand auf false, da die Daten abgerufen wurden
      setLoading(false);
    });
  }, []); // Leerer Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal beim Laden der Komponente ausgeführt wird

  // Handle für Änderungen im Filterinput
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);

    // Filtere die Daten basierend auf dem Eingabewert
    const filtered = data.filter((item) =>
      Object.values(item).some(
        (field) =>
          typeof field === 'string' && field.toLowerCase().includes(value.toLowerCase())
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <Navbar />
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
              <h1 className="h2">Lager</h1>
              {/* Füge das Filter-Input-Feld hinzu */}
              <input
                type="text"
                className="form-control"
                placeholder="Filtern..."
                value={filterValue}
                onChange={handleFilterChange}
              />
            </div>

            {/* Überprüfe den Ladezustand und zeige ggf. einen Ladeindikator an */}
            {loading ? (
              <p>Lade Daten...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Anzahl</th>
                      <th>Details</th>
                      <th>Bild</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.ID_Lager}</td>
                        <td>{item.Anzahl}</td>
                        <td>
                          <strong>Gruppe:</strong> {item.Gruppe}<br />
                          <strong>Artikel:</strong> {item.Artikel}<br />
                          <strong>Farbe:</strong> {item.Farbe}<br />
                          <strong>Beschreibung:</strong> {item.Beschreibung}<br />
                          <strong>Preis:</strong> {item.Preis}
                        </td>
                        <td>
                          <a href={item.S3_bild_url} target="_blank">
                            <img
                              src={item.S3_bild_url}
                              alt={item.Artikel}
                              style={{ maxWidth: '100px' }}
                            />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Lager;
