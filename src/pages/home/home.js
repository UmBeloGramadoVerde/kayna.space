import React, { Component } from 'react';
import TalmixResumedExp from '../../modules/resumed-exp/talmix-resumed-exp';
import CapgeminiResumedExp from '../../modules/resumed-exp/capgemini-resumed-exp';
import ArquivoWorldResumedExp from '../../modules/resumed-exp/arquivo-world-resumed-exp';
import GramadinhoVerdaoResumedExp from '../../modules/resumed-exp/gramadinho-verdao-resumed-exp';
import MaidenVsWatcherResumedExp from '../../modules/resumed-exp/maiden-vs-watcher-resumed-exp';
import BeloGramadoVerdeResumedExp from '../../modules/resumed-exp/belo-gramado-verde-resumed-exp';
import CemabResumedExp from '../../modules/resumed-exp/cemab-resumed-exp';
import CodeRaceResumedExp from '../../modules/resumed-exp/code-race-resumed-exp';
import ConfigrResumedExp from '../../modules/resumed-exp/configr-resumed-exp';
import DroidResumedExp from '../../modules/resumed-exp/droid-resumed-exp';
import HorseWithNoNameResumedExp from '../../modules/resumed-exp/horse-with-no-name-resumed-exp';
import TrustTheBoaResumedExp from '../../modules/resumed-exp/trust-the-boa-resumed-exp';
import { Link } from 'react-router-dom';
import '../shared/styles.scss';
import './home.scss';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content show_me_the_balls">
        <h1 className="expansive_bois name_title">Kaynã Rodrigues</h1>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            Web developer at <Link to="/professional/talmix">Talmix</Link>,
            Informatics student in Universidade Aberta de Lisboa.
        </h4>
          <h4 className="expansive_bois">
            Angular, React, Node, Python, Unity, Arduino.
          <br />
            I can solve problems very well and learn things very quickly.
        </h4>
          <h4 className="expansive_bois">
            Think I could help with some unorthodox, artistic or weird project you
            are working on ?
          <br />
            <a href="mailto:kaynarodrigues@live.com" target="_blank" rel="noopener noreferrer">Let me know</a>, it would be a pleasure.
        </h4>
        </div>


        <div className="exps_title expansive_bois">
          Professional experiences
        </div>


        <div className="stagger_container">
          <TalmixResumedExp />
          <CapgeminiResumedExp />
          <ConfigrResumedExp />
          <CemabResumedExp />
          <DroidResumedExp />
        </div>


        <div className="exps_title expansive_bois">
          Personal projects
        </div>


        <div className="stagger_container">
          <GramadinhoVerdaoResumedExp />
          <MaidenVsWatcherResumedExp />
          <CodeRaceResumedExp />
          <TrustTheBoaResumedExp />
          <BeloGramadoVerdeResumedExp />
        </div>
      </div>
    );
  }
}
