import React, { Component } from 'react';


class Footer extends Component {
    state = {  } 
    render() { 
        return <footer className="py-5">
      <div style={{margin: "auto", width: "100%", background: "#c3c3c3", padding: "80px" }}>
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Über uns</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Wir sind eine Familie</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Benefits</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Karriere</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Facility Manager</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Frontend Cleaner</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Maskottchen (Dachs)</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Animateur bei Mappa</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Dozent*innen</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Potentielle Kunden</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Elen Musk</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Till Gates</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Markus Zuckerberg</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Max Bezos</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Eddy Snowden</a></li>
            </ul>
          </div>
    
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </footer>;
    }
}
 
export default Footer;