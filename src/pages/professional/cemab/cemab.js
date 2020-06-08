import React, { Component } from 'react';
import '../../shared/styles.scss';
import AltranResumedExp from '../../../modules/resumed-exp/altran-resumed-exp';
import DroidResumedExp from '../../../modules/resumed-exp/droid-resumed-exp';

export default class Cemab extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Cemab</h1>
        <i className="timespan">Sep '17 - Jun '18</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            During the mechatronics engineering studies I was able to be part of a
          scientific initiation project on the <a href="https://www.cemab.com.br/" target="_blank" rel="noopener noreferrer">Ave Branca High School</a> (Centro de
                            Ensino Médio Ave Branca).
        </h4>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-9.jpg" alt="Droid 9" />
            <figcaption>Introdution to arduino class</figcaption>
          </figure>
          <h4 className="expansive_bois">
            The center worked with highly gifted kids (8yo-12yo). With the help
          of <a href="https://www.linkedin.com/in/ian-alexandre-7850b2189/" target="_blank" rel="noopener noreferrer">Ian Moura Alexandre</a> , we built the schedule for the robotics classes.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-12.jpg" alt="Droid 12" />
            <figcaption>Coolest kids in town</figcaption>
          </figure>
          <h4 className="expansive_bois">
            That included all the class materials, training of the teachers,
            equipment purchase list, project code and execution.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-11.jpg" alt="Droid 8" />
          </figure>
          <h4 className="expansive_bois">
            We also went to one of the classes every week to help the professors
            go through the schedule content so they would be able to replicate it
            to other students of other classes.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-13.jpg" alt="Droid 8" />
            <figcaption>Built by one of the students as the final project</figcaption>
          </figure>
          <h4 className="expansive_bois">
            Besides programming, one of the things I like the most is teaching, so
            this was the highest point of my week. I was able to, once a week,
            spend 3 hours with great kids, talking about stuff I was really
            excited about whoever I wanted, I could barely believe I was paid to
            do that.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-14.jpg" alt="Droid 8" />
            <figcaption>Initial meeting with the teachers</figcaption>
          </figure>
          <h4 className="expansive_bois">
            Since we were the ones that built the schedule, we could choose
            whatever projects we thought would be fun, and that's what we did. We
            always taught things we thought were fun and the kids LOVED IT.
        </h4>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-8.jpg" alt="Droid 8" />
            <figcaption>My last class teaching in Impacto Guará</figcaption>
          </figure>
          <figure className="expansive_bois">
            <img src="/images/teacher/teacher-2.jpg" alt="Droid 2" />
            <figcaption>Edubot workshop I taught about programming with the Sparki robot</figcaption>
          </figure>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <AltranResumedExp />
            <DroidResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
