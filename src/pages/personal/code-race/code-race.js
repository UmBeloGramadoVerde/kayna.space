import React, { Component } from 'react';
import '../../shared/styles.css';

export default class CodeRace extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Code Race</h1>
        <p></p>
        <h4 className="expansive_bois">
          While working in Altran, the company hosted a hackathon called Code
          Race, the challenge was to build a multi channel application for
          restaurant management in 48 hours using the General Motors framework
          for infotainment apps.
        </h4>
        <h4 className="expansive_bois">
          The application was going to be used on the car's infotainment system
          and in an android app. The car side had to find the restaurants based
          on the distance from the car, see the menus of each restaurant, choose
          multiple items, make an order and follow the order progress.
        </h4>
        <h4 className="expansive_bois">
          The android side was used by the restaurant owner. It was supposed to
          list all orders to the restaurant, alter the order state and give
          reporting statistics about the history of all orders.
        </h4>
        <h4 className="expansive_bois">
          Everything hinges on the backend application, which was responsible
          for the persistence in a mySQL database and made the communication
          between the frontend and mobile app happen through Java using Spring
          Boot.
        </h4>
        <h4 className="expansive_bois">
          Even though we never met before, the team worked wildly well and
          everybody coded restlessly for the whole 48 hours with a smile on their
          faces because we were all truly enjoying putting in the work for each
          other (BIG thanks to Diniz Araújo, Glody Romeu, Virca Gonçalves and
          Agostinho Pina).
        </h4>
        <h4 className="expansive_bois">
          In this project, I was responsible for the backend in Java with
          Spring Boot, it was a big challenge because I had never used Java
          before, besides a few Processing sketches. But I got the hang of it
          real quick and our app ended up doing everything that was proposed.
        </h4>
        <h4 className="expansive_bois">
          We got second place and everybody took a sick drone home.
        </h4>
      </div>
    );
  }
}
