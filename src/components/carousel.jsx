import React, { Component } from 'react';


class Carousel extends Component {
    state = {  } 
    render() { 
        return <div id="carouselExampleIndicators" className="carousel slide" style={{ overflow: 'hidden', maxWidth: '100%' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_bs.jpg" className="d-block w-100 img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_fs.jpg" className="d-block w-100 img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_h.jpg" className="d-block w-100 img-fluid" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      ;
    }
}
 
export default Carousel;