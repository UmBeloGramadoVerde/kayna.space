import React, { Component } from 'react';
import '../../shared/styles.scss';
import CapgeminiResumedExp from '../../../modules/resumed-exp/capgemini-resumed-exp';
import CemabResumedExp from '../../../modules/resumed-exp/cemab-resumed-exp';

export default class Configr extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Configr</h1>
        <i className="timespan">Feb '18 - Dec '18</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            When working for <a href="https://configr.com/" target="_blank" rel="noopener noreferrer">Configr</a> I was able to coordinate the web
            application migration team.
        </h4>
          <h4 className="expansive_bois">
            I helped improve the customer onboarding process on the team
            management side, solidifying the 48 hours migration time.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/configr/configr-1.jpg" alt="Droid 1" />
            <figcaption>Ninja mode engaged</figcaption>
          </figure>
          <h4 className="expansive_bois">
            I learned a lot about server administration, back-end engineering
            and devops in general. I also had the opportunity to work with
            automation using shell scripting and python.
        </h4>
          <h4 className="expansive_bois">
            It was really fun working at configr, since everybody on the team
            became really good friends.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/configr/configr-5.jpg" alt="Droid 5" />
            <figcaption>Eric had a half pipe in his house</figcaption>
          </figure>
          <figure className="expansive_bois">
            <img src="/images/configr/configr-2.jpg" alt="Droid 2" />
            <figcaption>Felipe, the CTO</figcaption>
          </figure>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <CemabResumedExp />
            <CapgeminiResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
