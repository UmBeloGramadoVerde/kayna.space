import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu-personal.css';

export default class MenuPersonal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var toggle = document.querySelectorAll('.toggle-personal')[0];
    var nav = document.querySelectorAll('.menu-personal')[0];
    var toggle_open_text = 'Per';
    var toggle_close_text = 'Close';

    toggle.addEventListener(
      'click',
      function () {
        nav.classList.toggle('open-personal');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(function () {
            nav.parentNode.classList.toggle('active-menu');
            document.getElementsByClassName('menu-personal-container')[0].style.right = '0px';
          }.bind(this), 700);
        }
        else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open-personal')) {
          toggle.innerHTML = toggle_close_text;
        } else {
          toggle.innerHTML = toggle_open_text;
        }
      },
      false
    );

    ([...document.querySelectorAll('.disc-personal:not(.last-personal)')]).forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.toggle-personal')[0].dispatchEvent(new Event('click'));
      }, false)
    });
  }

  render() {
    return (
      <div className="menu-personal-container">
        <nav class="menu-personal">
          <a class="disc-personal l2-personal">
            <div><Link to="/personal/belo-gramado-verde">Belo Gramado Verde</Link></div>
          </a>
          <a class="disc-personal l3-personal">
            <div><Link to="/personal/horse-with-no-name">Horse With No Name</Link></div>
          </a>
          <a class="disc-personal l4-personal">
            <div><Link to="/personal/trust-the-boa">Trust The Boa</Link></div>
          </a>
          <a class="disc-personal l5-personal">
            <div><Link to="/personal/arquivo-world">Arquivo World</Link></div>
          </a>
          <a class="disc-personal l6-personal">
            <div><Link to="/personal/bauhaus-tour">Bauhaus Tour</Link></div>
          </a>
          <a class="disc-personal l7-personal">
            <div><Link to="/personal/code-race">Code Race</Link></div>
          </a>
          <a class="disc-personal last-personal toggle-personal">Per</a>
        </nav>
      </div>
    );
  }
}
