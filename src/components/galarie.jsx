import React, { Component } from 'react';

class Galarie extends Component {
  state = {};

  render() {
    return (
      <>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
            LEGO Land Rover <span className="text-body-secondary">Weil Minifiguren auch ein Midlife-Crisis Benzinschleuder brauchen:</span>
            </h2>
            <p className="lead">Deine Minifigur sehnt sich nach einer Auszeit von der langweiligen LEGO-Routine? Wir haben die Lösung: den LEGO Land Rover! Die Karosserie schreit förmlich: "Mach Platz, Durchschnittlichkeit, hier kommt die Minifigur auf der Suche nach ihrem Klötzchen-Abenteuer!" Ideal für diejenigen, die glauben, dass ein Midlife-Crisis Auto auch aus Klötzchen bestehen kann.</p>
          </div>
          <div className="col-md-5">
            <img
              src="https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_vbs.jpg"
              alt="Bildbeschreibung"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Umso mehr Teile, desto besser! <span className="text-body-secondary">Wenn deine Minifigur denkt, sie sei Vin Diesel:</span>
            </h2>
            <p className="lead">Mach Schluss mit normalen Spielzeugautos! Die Motorhaube dieses LEGO Land Rovers brüllt förmlich: "Ich bin nicht nur ein Auto, ich bin das Klötzchen-Beast auf der Straße!" Mit Reifen, die breiter sind als dein LEGO-Horizont, wird dieses Modell nicht nur fahren, sondern auch die Minifigur zum Action-Held machen. Perfekt für die Minifigur, die denkt, sie sei der Star in ihrem eigenen Klötzchen-Blockbuster.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_vbs.jpg"
              alt="Bildbeschreibung"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
            Opulenz statt Bescheidenheit! <span className="text-body-secondary">Für die Minifigur, die nach Klötzchen-Luxus lechzt:</span>
            </h2>
            <p className="lead">Diese Seitenspiegel sind nicht nur schick – sie sagen auch: "Ich schau nicht nur auf die anderen Minifiguren herab, sondern auch auf ihre langweiligen Spielzeugautos!" Mit individuellen Reifenkappen, die mehr Persönlichkeit haben als manch ein echter Autofahrer, ist dieses LEGO Auto genau richtig für die Minifigur, die glaubt, dass sogar Klötzchen-Stil eine Kunstform ist.</p>
          </div>
          <div className="col-md-5">
            <img
              src="https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_v.jpg"
              alt="Bildbeschreibung"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </>
    );
  }
}

export default Galarie;