import React, { Component } from 'react';
import '../../shared/styles.scss';
import CemabResumedExp from '../../../modules/resumed-exp/cemab-resumed-exp';
import ConfigrResumedExp from '../../../modules/resumed-exp/configr-resumed-exp';

export default class Altran extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Altran</h1>
        <i className="timespan">Aug '19 - Present</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            I'm currently working in Altran and I'm having way more fun than I
            expected. This is my first job after migrating to Portugal.
        </h4>
          <h4 className="expansive_bois">
            I was hired to work with .NET, but fortunately, I develop using
            angular, .NET and Java with Spring Boot.
        </h4>
          <h4 className="expansive_bois">
            I worked with the development of a infotainment app for cars and
            a omnichannel web app. Neither can be disclosed.
        </h4>
          <h4 className="expansive_bois">
            My coworkers are wildly good people and I'm having a lot of
            opportunities to take on responsibilities and get out of my comfort
            zone.
        </h4>
          <h4 className="expansive_bois">
            <a href="https://www.altran.com/pt/pt-pt/digital/" target="_blank" rel="noopener noreferrer">My departament's page</a>
          </h4>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <ConfigrResumedExp />
            <CemabResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
