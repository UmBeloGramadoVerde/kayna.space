import React, { Component } from 'react';
import '../../shared/styles.scss';
import DroidResumedExp from '../../../modules/resumed-exp/droid-resumed-exp';
import CapgeminiResumedExp from '../../../modules/resumed-exp/capgemini-resumed-exp';

export default class Talmix extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Talmix</h1>
        <i className="timespan">Apr '21 - Present</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            I'm currently working at <a href="https://www.talmix.com/" target="_blank" rel="noopener noreferrer">Talmix</a>.
            The technical level required is way higher
            since the team is much smaller. I am needing to improve even further My
            ability to learn every day an willingness to take on challenges.
        </h4>
        <h4 className="expansive_bois">
            All this is being possible because of the great support I have from
            my team members Bruno and Marco. They are always available to help me
            out, explain the bussiness logic flows and architecture of the app and
            technical points that I haven't learned yet.
        </h4>
        <h4 className="expansive_bois">
            In exchange for their availability I always am as stright to the point
            and clear about my doubts as I can. Making sure that I occupy as little of
            their time as possible as well as not having to as the same question twice.
        </h4>
        <h4 className="expansive_bois">
            The work is going great. I was able to ship feature since my first week of
            working here and I am getting more familizarized every minute.
        </h4>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <CapgeminiResumedExp />
            <DroidResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
