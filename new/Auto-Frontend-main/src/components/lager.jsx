import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import AWS from 'aws-sdk';

const Lager = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AWS-Konfiguration
    AWS.config.update({
      region: 'eu-central-1',
      accessKeyId: '',
      secretAccessKey: '',
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
        setData(result.Items);
      }

      // Setze den Ladezustand auf false, da die Daten abgerufen wurden
      setLoading(false);
    });
  }, []); // Leerer Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal beim Laden der Komponente ausgeführt wird

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
            </div>

            {/* Überprüfe den Ladezustand und zeige ggf. einen Ladeindikator an */}
            {loading ? (
              <p>Lade Daten...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>ID_Lager</th>
                      <th>Anzahl</th>
                      <th>Gruppe</th>
                      <th>Artikel</th>
                      <th>Farbe</th>
                      <th>Beschreibung</th>
                      <th>Preis</th>
                      <th>S3_bild_url</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.ID_Lager}</td>
                        <td>{item.Anzahl}</td>
                        <td>{item.Gruppe}</td>
                        <td>{item.Artikel}</td>
                        <td>{item.Farbe}</td>
                        <td>{item.Beschreibung}</td>
                        <td>{item.Preis}</td>
                        <td><a href={item.S3_bild_url} target="_blank">{item.S3_bild_url}</a></td>


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
