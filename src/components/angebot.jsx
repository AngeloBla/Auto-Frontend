import React from "react";
import Navbar from "./navbar";
import "./style.css";
import styles from "./style.module.css"; // import ReactDOM from "react-dom";
import Footer from "./footer";

class Angebot extends React.Component {
    state = {  } 
    render() { 
        return (
            <main>
                <Navbar />
                    <h1>Angebot:</h1>

                    <div>
                        <button className="meinButton" onClick={this.handleButtonClick}>zurück zum Konfigurator</button>
                        <button className="meinButton" onClick={this.handleButtonClick}>Bestellung absenden</button>
                    </div>
                <Footer/>
            </main>
        );
    }
}

export default Angebot;