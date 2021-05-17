import React, { Component } from 'react';
import '../../shared/styles.scss';
import './droid.scss';
import CapgeminiResumedExp from '../../../modules/resumed-exp/capgemini-resumed-exp';
import CemabResumedExp from '../../../modules/resumed-exp/cemab-resumed-exp';

export default class Droid extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Droid</h1>
        <i className="timespan">Jun '17 - Jul '18</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            <a href="https://www.facebook.com/droidunb" target="_blank" rel="noopener noreferrer">Droid - UnB</a> is a robotics competition team and I was very fortunate to
            be accepted to join them.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-1.jpg" alt="Droid 1" />
            <figcaption>First team get-together</figcaption>
          </figure>
          <h4 className="expansive_bois">
            We used C and a custom framework for the SEK platform to build
            everything.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-3.jpg" alt="Droid 3" />
            <figcaption>Robots for the SEK category</figcaption>
          </figure>
          <h4 className="expansive_bois">
            We made robots to compete in different challenges that changed every
            year, this kept us on our feet and it allowed us to learn about a
            bunch of different facets of mechatronics engineering and programming.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-4.jpg" alt="Droid 4" />
            <figcaption>Robot for the OPEN category</figcaption>
          </figure>
          <h4 className="expansive_bois">
            I competed on the internal competition for the newcomers on the team.
            Thanks to the great work from Matheus Castro and ~BIBI~ we got first
            place and won two boxes of chocolates (besides the bragging rights
            ofc).
        </h4>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-2.jpg" alt="Droid 2" />
            <figcaption>Internal competition 2017</figcaption>
          </figure>
          <h4 className="expansive_bois">
            We also worked on the 2017 Latin America Robotics Competition (LARC)
            on the SEK category. No prizes, but we won as a team.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-6.jpg" alt="Droid 6" />
            <figcaption>Rob, the Robot</figcaption>
          </figure>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-5.jpg" alt="Droid 5" />
            <figcaption>Entire team on the LARC 2017 event</figcaption>
          </figure>
          <h4 className="expansive_bois">
            Everybody worked with a lot of satisfaction and besides being really
            tired we all were really happy with what we had built. Which was not
            only the robot, but also the ~friendships~
        </h4>
          <figure className="expansive_bois">
            <img src="/images/droid/droid-9.jpg" alt="Droid 9" />
            <figcaption>The need for testing space was big</figcaption>
          </figure>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <CapgeminiResumedExp />
            <CemabResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
