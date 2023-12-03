import React from 'react';
import Navbar from './navbar';

const Konsturktion = () => {
  return (
    <div>
      <Navbar />
      {/* Hinzugefügte Linie */}
      <div style={{ borderBottom: '3px solid gray' }}>
        {/* ... restlicher Code ... */}
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
              <h1 className="h2">Lager</h1>
            </div>

            {/* Hier kannst du den Inhalt deines Lagers hinzufügen */}
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Produkt</th>
                    <th>Menge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Produkt A</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Produkt B</td>
                    <td>75</td>
                  </tr>
                  {/* Weitere Zeilen hier hinzufügen */}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Konsturktion;
