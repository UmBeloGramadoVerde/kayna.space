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
    var toggle_open_text = '👨🏾‍💻';
    var toggle_close_text = '&#10005;';

    toggle.addEventListener(
      'click',
      function() {
        nav.classList.toggle('open-professional');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(
            function() {
              nav.parentNode.classList.toggle('active-menu');
              document.getElementsByClassName(
                'menu-professional-container'
              )[0].style.top = '0px';
            }.bind(this),
            700
          );
        } else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open-professional')) {
          setTimeout(
            function() {
              toggle.innerHTML = toggle_close_text;
            }.bind(this),
            1100
          );
        } else {
          toggle.innerHTML = toggle_open_text;
        }
      },
      false
    );

    [
      ...document.querySelectorAll('.disc-professional:not(.last-professional)')
    ].forEach(el => {
      el.addEventListener(
        'click',
        () => {
          document
            .querySelectorAll('.toggle-professional')[0]
            .dispatchEvent(new Event('click'));
        },
        false
      );
    });
  }

  render() {
    return (
      <div className='menu-professional-container'>
        <nav class='menu-professional'>
          <Link
            class='disc-professional l3-professional'
            to='/professional/configr'
          >
            <div>Configr</div>
          </Link>
          <Link
            class='disc-professional l4-professional'
            to='/professional/droid'
          >
            <div>Droid</div>
          </Link>
          <Link
            class='disc-professional l5-professional'
            to='/professional/altran'
          >
            <div>Altran</div>
          </Link>
          <Link
            class='disc-professional l6-professional'
            to='/professional/cemab'
          >
            <div>Cemab</div>
          </Link>
          <Link
            class='disc-professional l7-professional'
            to='/professional/sinatep'
          >
            <div>Sinatep</div>
          </Link>
          <a class='disc-professional last-professional toggle-professional'>
            👨🏾‍💻
          </a>
        </nav>
      </div>
    );
  }
}
