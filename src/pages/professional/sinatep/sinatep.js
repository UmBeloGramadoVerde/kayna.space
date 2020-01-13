import React, { Component } from 'react';
import '../../shared/styles.css';

export default class Sinatep extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Sinatep</h1>
        <p></p>
        <h4 className="expansive_bois">
          This was my first freelance project, which put me waaaay out of my
          comfort zone. Being able to be behind someone in regards to
          responsibility and contact with the client was really comfortable.
        </h4>
        <h4 className="expansive_bois">
          But in this one I was face to face with my client and it was way more
          satisfying than I expected. I was able to get and give feedback
          directly, build the platform from the ground up on my own and set the
          priorities, proposals and schedules myself.
        </h4>
        <h4 className="expansive_bois">
          Besides the development skills, I was able to improve my self
          management ability, client relationship management and project
          direction. The website was built using wordpress with custom PHP and
          server side scripting.
        </h4>

        <h4 class="expansive_bois">
          Their page <a href="https://sinatep.com.br/" target="_blank" style={{ color: '#ffc00e', fontSize: 3.5 + 'rem' }}>→</a>
        </h4>
      </div>
    );
  }
}
