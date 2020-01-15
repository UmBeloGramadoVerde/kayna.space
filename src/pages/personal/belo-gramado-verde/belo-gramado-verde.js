import React, { Component } from 'react';
import '../../shared/styles.css';

export default class BeloGramadoVerde extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Belo Gramado Verde</h1>
        <p></p>
        <h4 className="expansive_bois">
          I am a big fan of calligraphy. The classical style is cool and all,
          but what really interests me is experimenting with everything.
        </h4>
        <h4 className="expansive_bois">
          Um Belo Gramado Verde is my Instagram page where I dump my experiments
          and pieces from different proposals. I have made graffiti, body art,
          ink on paper and clothing.
        </h4>
        <h4 className="expansive_bois">This brings me a lot of joy.</h4>

        <h4 class="expansive_bois">
          The Instagram page <a href="https://www.instagram.com/umbelogramadoverde/" target="_blank" style={{ color: '#ffc00e', fontSize: 3.5 + 'rem' }}>→</a>
        </h4>

        <div className="image-gallery">
          <figure>
            <img src="/images/calligraphy/calligraphy-02.jpg" alt="Droid 2" />
            <figcaption>Ink and Paper</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-06.jpg" alt="Droid 6" />
            <figcaption>Ink and Paper</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-4.jpg" alt="Droid 4" />
            <figcaption>Big Ron</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-3.jpg" alt="Droid 3" />
            <figcaption>Clothing</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-05.jpg" alt="Droid 5" />
            <figcaption>Adaptation #4</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-5.jpg" alt="Droid 5" />
            <figcaption>Adaptation #4</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-04.jpg" alt="Droid 4" />
            <figcaption>The Golden Warrior</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-07.jpg" alt="Droid 7" />
            <figcaption>The Golden Warrior</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-7.jpg" alt="Droid 7" />
            <figcaption>Adaptation #4</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-08.jpg" alt="Droid 8" />
            <figcaption>Clothing</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-09.jpg" alt="Droid 9" />
            <figcaption>Love Letter to Life</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-10.jpg" alt="Droid 10" />
            <figcaption>Graffiti</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-11.jpg" alt="Droid 11" />
            <figcaption>Adaptation #4</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-12.jpg" alt="Droid 12" />
            <figcaption>Ink and Paper</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-13.jpg" alt="Droid 13" />
            <figcaption>Adaptation #4</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-01.jpg" alt="Droid 1" />
            <figcaption>The Golden Warrior</figcaption>
          </figure>
          <figure>
            <img src="/images/calligraphy/calligraphy-03.jpg" alt="Droid 3" />
            <figcaption>Graffiti</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
