import React, { Component } from 'react';
import './navigation.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

import Menu from '../menu/menu';
import MenuProfessional from '../menu-professional/menu-professional';
import MenuPersonal from '../menu-personal/menu-personal';
import Home from '../../pages/home/home';

import Configr from '../../pages/professional/configr/configr';
import Droid from '../../pages/professional/droid/droid';
import Altran from '../../pages/professional/altran/antran';
import Cemab from '../../pages/professional/cemab/cemab';
import Sinatep from '../../pages/professional/sinatep/sinatep';

import ArquivoWorld from '../../pages/personal/arquivo-world/arquivo-world';
import BauhausTour from '../../pages/personal/bauhaus-tour/bauhaus-tour';
import BeloGramadoVerde from '../../pages/personal/belo-gramado-verde/belo-gramado-verde';
import CodeRace from '../../pages/personal/code-race/code-race';
import HorseWithNoName from '../../pages/personal/horse-with-no-name/horse-with-no-name';
import TrustTheBoa from '../../pages/personal/trust-the-boa/trust-the-boa';
import GramadinhoVerdao from '../../pages/personal/gramadinho-verdao/gramadinho-verdao';
import MaidenVsWatcher from '../../pages/personal/maiden-vs-watcher/maiden-vs-watcher';

class Navigation extends Component {
  UNSAFE_componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      window.dispatchEvent(new Event('pageChange'));
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div className="RouterOutlet">
        <Menu />
        <MenuProfessional />
        <MenuPersonal />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          {/* PROFESSIONAL */}

          <Route path="/professional/configr">
            <Configr />
          </Route>
          <Route path="/professional/droid">
            <Droid />
          </Route>
          <Route path="/professional/altran">
            <Altran />
          </Route>
          <Route path="/professional/cemab">
            <Cemab />
          </Route>
          <Route path="/professional/sinatep">
            <Sinatep />
          </Route>

          {/* PERSONAL */}

          <Route path="/personal/arquivo-world">
            <ArquivoWorld />
          </Route>
          <Route path="/personal/bauhaus-tour">
            <BauhausTour />
          </Route>
          <Route path="/personal/belo-gramado-verde">
            <BeloGramadoVerde />
          </Route>
          <Route path="/personal/code-race">
            <CodeRace />
          </Route>
          <Route path="/personal/horse-with-no-name">
            <HorseWithNoName />
          </Route>
          <Route path="/personal/trust-the-boa">
            <TrustTheBoa />
          </Route>
          <Route path="/personal/gramadinho-verdao">
            <GramadinhoVerdao />
          </Route>
          <Route path="/personal/maiden-vs-watcher">
            <MaidenVsWatcher />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Navigation);
