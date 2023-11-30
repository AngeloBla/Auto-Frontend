import React from "react";
import Navbar from "./navbar";
import "./style.css";
import styles from "./style.module.css"; // import ReactDOM from "react-dom";
import Footer from "./footer";

class Angebot extends Component {
    state = {  } 
    render() { 
        return (
            <main>
                <Navbar />
                    <h1>Angebot:</h1>
                    

                <Footer/>
            </main>
        );
    }
}

export default Angebot;