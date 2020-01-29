import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu-professional.scss';

export default class MenuProfessional extends Component {

  componentDidMount() {
    var toggle = document.querySelectorAll('.toggle-professional')[0];
    var nav = document.querySelectorAll('.menu-professional')[0];
    var toggle_open_text = '<span role="img" aria-label="Social clothes Emoji">👔</span>';
    var toggle_close_text = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 449.998 449.998" style="enable-background:new 0 0 449.998 449.998;" xml:space="preserve">
 <g>
   <g>
     <polygon points="449.974,34.855 415.191,0 225.007,190.184 34.839,0 0.024,34.839 190.192,224.999 
       0.024,415.159 34.839,449.998 225.007,259.797 415.191,449.998 449.974,415.143 259.83,224.999 		"/>
   </g>
 </g>
 </svg>`;

    toggle.addEventListener(
      'click',
      function () {
        nav.classList.toggle('open-professional');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(
            function () {
              nav.parentNode.classList.toggle('active-menu');
              document.getElementsByClassName(
                'menu-professional-container'
              )[0].style.top = '15px';
            },
            700
          );
        } else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open-professional')) {
          setTimeout(
            function () {
              toggle.innerHTML = toggle_close_text;
            },
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
        <nav className='menu-professional'>
          <Link
            className='disc-professional l4-professional'
            to='/professional/configr'
          >
            <div>Configr</div>
          </Link>
          <Link
            className='disc-professional l5-professional'
            to='/professional/droid'
          >
            <div>Droid</div>
          </Link>
          <Link
            className='disc-professional l6-professional'
            to='/professional/altran'
          >
            <div>Altran</div>
          </Link>
          <Link
            className='disc-professional l7-professional'
            to='/professional/cemab'
          >
            <div>Cemab</div>
          </Link>
          <a className='disc-professional last-professional toggle-professional'>
            <span role="img" aria-label="Social clothes Emoji">👔</span>
          </a>
        </nav>
      </div>
    );
  }
}
