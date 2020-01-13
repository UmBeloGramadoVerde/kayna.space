import React, { Component } from 'react';
import '../../shared/styles.css';

export default class Cemab extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Cemab</h1>
        <p></p>
        <h4 className="expansive_bois">
          During the mechatronics engineering studies I was able to be part of a
          scientific initiation project on the Ave Branca High School (Centro de
          Ensino Médio Ave Branca).
        </h4>
        <h4 className="expansive_bois">
          The center worked with highly gifted kids (8yo-12yo). With the help of
          Ian Moura Alexandre, we built the schedule for the robotics classes.
        </h4>
        <h4 className="expansive_bois">
          That included all the class materials, training of the teachers,
          equipment purchase list, project code and execution.
        </h4>
        <h4 className="expansive_bois">
          We also went to one of the classes every week to help the professors
          go through the schedule content so they would be able to replicate it
          to other students of other classes.
        </h4>
        <h4 className="expansive_bois">
          Besides programming, one of the things I like the most is teaching, so
          this was the highest point of my week. I was able to, once a week,
          spend 3 hours with great kids, talking about stuff I was really
          excited about whoever I wanted, I could barely believe I was paid to
          do that.
        </h4>
        <h4 className="expansive_bois">
          Since we were the ones that built the schedule, we could choose
          whatever projects we thought would be fun, and that's what we did. We
          always taught things we thought were fun and the kids LOVED IT.
        </h4>
        <h4 class="expansive_bois">
          Their page <a href="https://www.cemab.com.br/" target="_blank" style={{ color: '#ffc00e', fontSize: 3.5 + 'rem' }}>→</a>
        </h4>
        <h4 className="expansive_bois">
          The following pictures are not specifically from CEMAB,
          just a few shots of the activities that I was involved with during
          my time in Edubot (program I was working on through which I met
          the teachers that helped me get into the CEMAB program).
        </h4>

        <div className="image-gallery">
          <figure>
            <img src="/images/teacher/teacher-1.jpg" alt="Droid 1" />
            <figcaption>Edubot workshop I taught about programming with the Sparki robot</figcaption>
          </figure>
          <figure>
            <img src="/images/teacher/teacher-2.jpg" alt="Droid 2" />
            <figcaption>Edubot workshop</figcaption>
          </figure>
          <figure>
            <img src="/images/teacher/teacher-3.jpg" alt="Droid 3" />
            <figcaption>Soldering workshop during my time in Edubot</figcaption>
          </figure>
          <figure>
            <img src="/images/teacher/teacher-5.jpg" alt="Droid 5" />
            <figcaption>Edubot workshop</figcaption>
          </figure>
          <figure>
            <img src="/images/teacher/teacher-6.jpg" alt="Droid 6" />
            <figcaption>Edubot workshop</figcaption>
          </figure>
          <figure>
            <img src="/images/teacher/teacher-7.jpg" alt="Droid 7" />
            <figcaption>Edubot workshop</figcaption>
          </figure>
          <figure>
            <img src="/images/teacher/teacher-8.jpg" alt="Droid 8" />
            <figcaption>My last class teaching in Impacto Guará</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
