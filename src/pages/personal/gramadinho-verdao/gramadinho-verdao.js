import React, { Component } from 'react';
import '../../shared/styles.scss';
import BeloGramadoVerdeResumedExp from '../../../modules/resumed-exp/belo-gramado-verde-resumed-exp';
import MaidenVsWatcherResumedExp from '../../../modules/resumed-exp/maiden-vs-watcher-resumed-exp';

export default class GramadinhoVerdao extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Grama<wbr />dinho Verdao</h1>
        <i className="timespan">Jun '20 - Present</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            In order to improve my teaching skills while stuck at home I decided to start <a href="https://www.twitch.tv/gramadinhoverdao" target="_blank" rel="noopener noreferrer">streaming on Twitch</a> programming
            classes with my friends and the dev log for my
            VR installation project.
        </h4>
          <h4 className="expansive_bois">
            The in person classes have been made taking the according COVID precautions
            and were done only with people from my close circle that had been checked
            before the stream.
        </h4>
          <iframe width="560" height="315" className="expansive_bois yt-video" src="https://www.youtube.com/embed/ndQF8m4tFQU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" className="expansive_bois yt-video" src="https://www.youtube.com/embed/3l98iGOYiNQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="expansive_bois">
            The dev log streams are meant to improve my ability to handle an audience
            and think on my feet when the situation doesn't go as planned.
        </h4>
          <iframe width="560" height="315" className="expansive_bois yt-video" src="https://www.youtube.com/embed/BFrZpgPLmr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="expansive_bois">
            The teaching sessions aim to get me back on planning and executing a class
            plan. The class subjects until now include Javascript, Arduino and Unity.
        </h4>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <MaidenVsWatcherResumedExp />
            <BeloGramadoVerdeResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
