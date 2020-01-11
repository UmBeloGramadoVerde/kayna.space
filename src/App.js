import React, { Component } from 'react';
import './App.scss';
import RepulsionHandler from './modules/repulsion-handler/RepulsionHandler';
import Navigation from './modules/navigation/navigation';
import Footer from './modules/footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <RepulsionHandler />
        <Router>
          <Navigation className="navigation" />
        </Router>
        <Footer />
      </div>
    );
  }
}
