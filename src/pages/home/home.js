import React, { Component } from 'react';
import AltranResumedExp from '../../modules/resumed-exp/altran-resumed-exp';
import ArquivoWorldResumedExp from '../../modules/resumed-exp/arquivo-world-resumed-exp';
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
        <h1 className="expansive_bois">Kaynã Rodrigues</h1>
        <div className="stagger_container">
          <h4 className="expansive_bois">
            Web dev at <Link to="/professional/altran">Altran</Link>,
            Informatics student in Universidade da Beira Interior.
        </h4>
          <h4 className="expansive_bois">
            Angular, React, Node, Python, Java, .Net.
          <br />
            I can solve problems real good and learn things real fast.
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
          <AltranResumedExp />
          <ConfigrResumedExp />
          <DroidResumedExp />
          <CemabResumedExp />
        </div>


        <div className="exps_title expansive_bois">
          Personal projects
        </div>


        <div className="stagger_container">
          <CodeRaceResumedExp />
          <ArquivoWorldResumedExp />
          <TrustTheBoaResumedExp />
          <HorseWithNoNameResumedExp />
          <BeloGramadoVerdeResumedExp />
        </div>
      </div>
    );
  }
}
