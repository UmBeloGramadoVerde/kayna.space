import React, { Component } from 'react';
import '../../shared/styles.scss';

export default class ArquivoWorld extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Arquivo World</h1>
        <p></p>
        <h4 className="expansive_bois">
          In 2019, portugal's arquivo PT (portal that records the portuguese
          internet history) was hosting a cultural competition for who could
          create something creative with arquivo PT's data.
        </h4>
        <h4 className="expansive_bois">
          Since there was a good prize and I wanted to put my javascript
          abilities to the test, I entered the contest. For it I built a
          continuous voice recognition wrapper around arquivo.pt, that allowed
          the user to fully navigate through it using only their voice, my
          objective was accessibility.
        </h4>
        <h4 className="expansive_bois">
          After allowing microphone usage once, the user did not need to use
          anything but their voice for the whole visit to the website. The
          features included search, scroll navigation, asynchronous key word
          activation, previous and next page.
        </h4>
        <h4 className="expansive_bois">
          This was an excellent project that pushed the limits of what I knew
          from pure javascript and even though I did not win, it was totally
          worth it because I improved my skills ten-fold.
        </h4>
        <h4 className="expansive_bois">
          I used pure javascript, to build everything. (The voice recognition
          was made with the google API).
        </h4>
      </div>
    );
  }
}
