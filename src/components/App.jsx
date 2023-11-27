import React, { Component } from "react";
import Navabr from "./navbar";
import Carousel from "./carousel";
import Album from "./Album";
import Footer from "./footer";
import Galarie from "./galarie";

class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Navabr />
                <Carousel />
                <Galarie />
                <Album />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;