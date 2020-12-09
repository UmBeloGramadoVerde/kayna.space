import React, { Component } from 'react';
import '../../shared/styles.scss';
import GramadinhoVerdaoResumedExp from '../../../modules/resumed-exp/gramadinho-verdao-resumed-exp';
import CodeRaceResumedExp from '../../../modules/resumed-exp/code-race-resumed-exp';

export default class MaidenVsWatcher extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Maiden vs Watcher</h1>
        <i className="timespan">Mar '20 - Dec '20</i>
        <p></p>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            The game is a VR installation for local multiplayer between a player in VR and a
            player in real life (IRL). The gameplay loop similar to Five Nights at Freddy's,
            where the security guard is a player in VR and the animatronic characters are
            the IRL player. The following video explains how the game works:
          </h4>
          <figure className='expansive_bois'>
            <img src='/images/maiden-vs-watcher/maiden-vs-watcher-1.png' alt='maiden-vs-watcher 1' />
            <figcaption>This is a placeholder for the WIP video</figcaption>
          </figure>
          <h4 className="expansive_bois">
            Aimed to get me out of my web developer confort zone, this project is built 100%
            with technologies I didn't knew previously. Unity, VR, 3D printing, Blender,
            CUDA Tookit, NodeMCU, OpenCV, Motion capturing.
          </h4>
          <h4 className="expansive_bois">
            I went through a lot of hardships trying to learn everything from scratch, but
            it was definetly worth it. Now I am absolutely sure I'm able to acomplish any project
            I set myself to do. The victories and defeats were recorded in the following video:
          </h4>
          <figure className='expansive_bois'>
            <img src='/images/maiden-vs-watcher/maiden-vs-watcher-2.png' alt='maiden-vs-watcher 2' />
            <figcaption>This is a placeholder for the WIP video</figcaption>
          </figure>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <CodeRaceResumedExp />
            <GramadinhoVerdaoResumedExp />
          </div>
        </div>

      </div>
    );
  }
}