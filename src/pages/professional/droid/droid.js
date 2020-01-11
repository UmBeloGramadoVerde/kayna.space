import React, { Component } from 'react';
import '../../shared/styles.css';
import './droid.scss';

export default class Droid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Droid</h1>
        <p></p>
        <h4 className="expansive_bois">
          Droid - UnB is a robotics competition team and I was very fortunate to
          be accepted to join them.
        </h4>
        <h4 className="expansive_bois">
          We made robots to compete in different challenges that changed every
          year, this kept us on our feet and it allowed us to learn about a
          bunch of different facets of mechatronics engineering and programming.
        </h4>
        <h4 className="expansive_bois">
          I competed on the internal competition for the newcomers on the team.
          Thanks to the great work from Matheus Castro and ~BIBI~ we got first
          place and won two boxes of chocolates (besides the bragging rights
          ofc).
        </h4>
        <h4 className="expansive_bois">
          We also worked on the 2017 Latin America Robotics Competition (LARC)
          on the SEK category. No prizes, but we won as a team.
        </h4>
        <h4 className="expansive_bois">
          Everybody worked with a lot of satisfaction and besides being really
          tired everybody was really happy with what we had built, which was not
          only the robot, but also the ~friendships~.
        </h4>
        <h4 className="expansive_bois">
          We used C and a custom framework for the SEK platform to build
          everything.
        </h4>

        <div className="image-gallery">
          <figure>
            <img src="/images/droid/droid-1.jpg" alt="Droid 1" />
            <figcaption>First team get-together</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-2.jpg" alt="Droid 2" />
            <figcaption>Internal competition 2017</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-3.jpg" alt="Droid 3" />
            <figcaption>Robots for the SEK category</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-4.jpg" alt="Droid 4" />
            <figcaption>Robot of the OPEN category</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-5.jpg" alt="Droid 5" />
            <figcaption>Entire team on the LARC 2017 event</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-6.jpg" alt="Droid 6" />
            <figcaption>Rob, the Robot</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-9.jpg" alt="Droid 9" />
            <figcaption>The need for testing space was big</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-8.jpg" alt="Droid 8" />
            <figcaption>Lazyboy Abdullah</figcaption>
          </figure>
          <figure>
            <img src="/images/droid/droid-7.jpg" alt="Droid 7" />
            <figcaption>Focused on the mission</figcaption>
          </figure>
        </div>

      </div>
    );
  }
}
