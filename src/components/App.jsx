import React, { Component } from 'react';
import Navabr from './navbar';
import Carousel from './carousel';
import Album from './Album';
import Pricing from './Pricing';
import Footer from './footer';



class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navabr/>
            <Carousel/>
            <Pricing/>
            <Album/>
            <Footer/>
            </React.Fragment>;
    }
}
 
export default App;