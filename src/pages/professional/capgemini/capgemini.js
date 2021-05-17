import React, { Component } from 'react';
import '../../shared/styles.scss';
import TalmixResumedExp from '../../../modules/resumed-exp/talmix-resumed-exp';
import ConfigrResumedExp from '../../../modules/resumed-exp/configr-resumed-exp';

export default class Altran extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Capgemini</h1>
        <i className="timespan">Aug '19 - Apr '21</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            While working at Capgemini I was able to learn a lot and get to know
            many professionals that served as role models for the work ethic I developed
            over my time there. That was my first job after migrating to Portugal.
        </h4>
          <h4 className="expansive_bois">
          During my time there I worked on three projects. A resumed description of each one are:
          The stack that I used was Angular, React and Node.js.
        </h4>
        <h4 className="expansive_bois">
            Infotainment app for onboard car system for Volkswagen. I participated in the middle of
            the project and was transfered before delivery. Tech stack used was Angular and Node.js.
            This project was great at teaching me how to operate in a rigid SCRUM project structure
            as well as learning how to add and modify legacy code properly.
        </h4>
        <h4 className="expansive_bois">
            Internal colaborators onboarding tool. Worked on this project only on the very beginning
            and was transfered to another before the delivery. Tech stack used was React and Bootstrap.
            I was able to get a sense on how architectural decisions are made in the beginning of a project,
            which came to be really valuable as I was able to expand and apply this knowledge on the next
            project I worked on.
        </h4>
          <h4 className="expansive_bois">
            Omnichannel rental plataform for Caterpillar. I participated on the project from
            the first day until delivery. Tech stack used was Angular and Bootstrap.
            Even though I was the less professionally experienced member
            of the dev team I was able to interact directly with the client a lot because of
            my good english proficiency and willingness to identify and solve problems.
        </h4>
        <h4 className="expansive_bois">
            Clients worked with were Volkswagen, Altran-Capgemini itself and Caterpillar.
        </h4>
          <h4 className="expansive_bois">
            My coworkers were wildly good people and I had a lot of
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
            <TalmixResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
