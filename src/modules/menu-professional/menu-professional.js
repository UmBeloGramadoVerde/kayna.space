import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu-professional.css';

export default class MenuProfessional extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var toggle = document.querySelectorAll('.toggle-professional')[0];
    var nav = document.querySelectorAll('.menu-professional')[0];
    var toggle_open_text = 'Pro';
    var toggle_close_text = 'Close';

    toggle.addEventListener(
      'click',
      function () {
        nav.classList.toggle('open-professional');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(function () {
            nav.parentNode.classList.toggle('active-menu');
          }.bind(this), 700);
        }
        else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open-professional')) {
          toggle.innerHTML = toggle_close_text;
        } else {
          toggle.innerHTML = toggle_open_text;
        }
      },
      false
    );
  }

  render() {
    return (
      <div className="menu-professional-container">
        <nav class="menu-professional">
          <a class="disc-professional l1-professional">
            <div><Link to="/professional/configr">Configr</Link></div>
          </a>
          <a class="disc-professional l2-professional">
            <div><Link to="/professional/droid">Droid</Link></div>
          </a>
          <a class="disc-professional l3-professional">
            <div><Link to="/professional/altran">Altran</Link></div>
          </a>
          <a class="disc-professional l4-professional">
            <div><Link to="/professional/cemab">Cemab</Link></div>
          </a>
          <a class="disc-professional l5-professional">
            <div><Link to="/professional/sinatep">Sinatep</Link></div>
          </a>
          <a class="disc-professional l6-professional">
            <div><Link to="/additions">Additions</Link></div>
          </a>
          <a class="disc-professional l7-professional">
            <div><Link to="/home">Home</Link></div>
          </a>
          <a class="disc-professional last-professional toggle-professional">Pro</a>
        </nav>
      </div>
    );
  }
}
