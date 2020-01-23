import React, { Component } from 'react';
import '../../shared/styles.scss';

export default class Configr extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Configr</h1>
        <p></p>
        <h4 className="expansive_bois">
          When working for <a href="https://configr.com/" target="_blank">Configr</a> I was able to coordinate the web
          application migration team.
        </h4>
        <h4 className="expansive_bois">
          I helped improve the customer onboarding process on the team
          management side, solidifying the 48 hours migration time.
        </h4>
        <h4 className="expansive_bois">
          It was really fun working at configr, since everybody on the team
          became really good friends.
        </h4>
        <h4 className="expansive_bois">
          Special thanks to the CTO <a href="https://www.linkedin.com/in/felipetomaz/" target="_blank">Felipe</a>, one of my best friends ever, who
          recently became a father (congratulations, Felipe and Lais).
        </h4>
        <h4 className="expansive_bois">
          I learned a lot about server administration, back-end engineering
          and devops in general. I also had the opportunity to work with
          automation using shell scripting and python.
        </h4>

        <div className="image-gallery">
          <figure>
            <img src="/images/configr/configr-1.jpg" alt="Droid 1" />
            <figcaption>When things get tough, ninja mode is engaged</figcaption>
          </figure>
          <figure>
            <img src="/images/configr/configr-4.jpg" alt="Droid 4" />
            <figcaption>Basa, official office dog</figcaption>
          </figure>
          <figure>
            <img src="/images/configr/configr-2.jpg" alt="Droid 2" />
            <figcaption>Felipe, Basa's dad and CTO</figcaption>
          </figure>
          <figure>
            <img src="/images/configr/configr-5.jpg" alt="Droid 5" />
            <figcaption>Eric had a half pipe in his house</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
