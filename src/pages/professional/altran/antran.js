import React, { Component } from 'react';
import '../../shared/styles.css';

export default class Altran extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Altran</h1>
        <p></p>
        <h4 className="expansive_bois">
          I'm currently working in Altran and I'm having way more fun than I
          expected. This is my first job after migrating to Portugal.
        </h4>
        <h4 className="expansive_bois">
          My coworkers are wildly good people and I'm having a lot of
          opportunities to take on responsibilities and get out of my comfort
          zone.
        </h4>
        <h4 className="expansive_bois">
          I was hired to work with .NET, but fortunately, I develop using
          angular, .NET and Java with Spring Boot.
        </h4>
        <h4 className="expansive_bois">
          The diversity of technologies is one of the best parts, because it
          gave me a lot of confidence in myself in regards to learning anything
          that I have, need or want to.
        </h4>
      </div>
    );
  }
}
