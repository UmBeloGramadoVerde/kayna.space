import React, { Component } from 'react';
import '../../shared/styles.css';

export default class BauhausTour extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Bauhaus Tour</h1>
        <p></p>
        <h4 className="expansive_bois">
          During the first semester of university in Portugal I was getting
          deeper into javascript and learning it's asynchronous nature. Once
          again this was taking a lot of my time and I had to deliver a project
          about the german Bauhaus for my Design II class.
        </h4>
        <h4 className="expansive_bois">
          I tried to fit the assignment that I had to do with what I was
          interested in studying. With that in mind I built a cool presentation
          about the Bauhaus history using the mapbox API, more specifically the
          3D rendering of the maps, because it looked really dope.
        </h4>
        <h4 className="expansive_bois">
          It turned out to be a huge success because my professor didn't expect
          the commitment I put into the project and he allowed the slight ‘out
          of scope’ nature of the presentation.
        </h4>
        <h4 className="expansive_bois">
          Also the other group members got interested in javascript and ended up
          wanting to learn more about the language and the mapbox API.
        </h4>

        <div className="image-gallery">
          <figure>
            <img src="/images/bauhaus-tour/bauhaus-1.jpg" alt="Bauhaus Tour 1" />
          </figure>
          <figure>
            <img src="/images/bauhaus-tour/bauhaus-2.jpg" alt="Bauhaus Tour 2" />
          </figure>
          <figure>
            <img src="/images/bauhaus-tour/bauhaus-4.jpg" alt="Bauhaus Tour 4" />
          </figure>
          <figure>
            <img src="/images/bauhaus-tour/bauhaus-5.jpg" alt="Bauhaus Tour 5" />
          </figure>
        </div>

        <h4 class="expansive_bois">
          The website <a href="https://editor.p5js.org/umbelogramadoverde/present/brN3rEw3Z" target="_blank" style={{ color: '#ffc00e', fontSize: 3.5 + 'rem' }}>→</a>
          <br />
          The code <a href="https://editor.p5js.org/umbelogramadoverde/sketches/brN3rEw3Z" target="_blank" style={{ color: '#ffc00e', fontSize: 3.5 + 'rem' }}>→</a>
        </h4>
      </div>
    );
  }
}
