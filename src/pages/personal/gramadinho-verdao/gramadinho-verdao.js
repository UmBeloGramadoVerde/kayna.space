import React, { Component } from 'react';
import '../../shared/styles.scss';
import TrustTheBoaResumedExp from '../../../modules/resumed-exp/trust-the-boa-resumed-exp';
import CodeRaceResumedExp from '../../../modules/resumed-exp/code-race-resumed-exp';

export default class GramadinhoVerdao extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Gramadinho Verdao</h1>
        <i className="timespan">Jun '20 - Present</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            In order to improve my teaching skills while stuck at home I decided to start
            streaming on twitch programming classes with my friends and the dev log for my
            VR installation project.
        </h4>
          <h4 className="expansive_bois">
            The in person classes have been made taking the according COVID precautions
            and were done only with people from my close circle that had been checked
            before the stream.
        </h4>
          <h4 className="expansive_bois">
            <a href="https://www.instagram.com/umbelogramadoverde/" target="_blank" rel="noopener noreferrer">Um Belo Gramado Verde</a> is my Instagram page where I dump my experiments
          and pieces from different proposals. I have made graffiti, body art,
          ink on paper and clothing.
        </h4>
          <h4 className="expansive_bois">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ndQF8m4tFQU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </h4>
          <h4 className="expansive_bois">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3l98iGOYiNQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </h4>
          <h4 className="expansive_bois">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BFrZpgPLmr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </h4>


          <figure className="expansive_bois">
            <img src="/images/calligraphy/calligraphy-02.jpg" alt="Droid 2" />
            <figcaption>Ink and Paper</figcaption>
          </figure>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <CodeRaceResumedExp />
            <TrustTheBoaResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
