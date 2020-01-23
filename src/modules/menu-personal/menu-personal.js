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
    var toggle_open_text = '💃🏾';
    var toggle_close_text = '&#10005;';

    toggle.addEventListener(
      'click',
      function() {
        nav.classList.toggle('open-personal');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(
            function() {
              nav.parentNode.classList.toggle('active-menu');
              document.getElementsByClassName(
                'menu-personal-container'
              )[0].style.right = '0px';
            }.bind(this),
            700
          );
        } else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open-personal')) {
          setTimeout(
            function() {
              toggle.innerHTML = toggle_close_text;
            }.bind(this),
            1000
          );
        } else {
          toggle.innerHTML = toggle_open_text;
        }
      },
      false
    );

    [
      ...document.querySelectorAll('.disc-personal:not(.last-personal)')
    ].forEach(el => {
      el.addEventListener(
        'click',
        () => {
          document
            .querySelectorAll('.toggle-personal')[0]
            .dispatchEvent(new Event('click'));
        },
        false
      );
    });
  }

  render() {
    return (
      <div className='menu-personal-container'>
        <nav class='menu-personal'>
          <Link
            class='disc-personal l2-personal'
            to='/personal/belo-gramado-verde'
          >
            <div>Belo Gramado Verde</div>
          </Link>
          <Link
            class='disc-personal l3-personal'
            to='/personal/horse-with-no-name'
          >
            <div>Horse With No Name</div>
          </Link>
          <Link class='disc-personal l4-personal' to='/personal/trust-the-boa'>
            <div>Trust The Boa</div>
          </Link>
          <Link class='disc-personal l5-personal' to='/personal/arquivo-world'>
            <div>Arquivo World</div>
          </Link>
          <Link class='disc-personal l6-personal' to='/personal/bauhaus-tour'>
            <div>Bauhaus Tour</div>
          </Link>
          <Link class='disc-personal l7-personal' to='/personal/code-race'>
            <div>Code Race</div>
          </Link>
          <a class='disc-personal last-personal toggle-personal'>💃🏾</a>
        </nav>
      </div>
    );
  }
}
