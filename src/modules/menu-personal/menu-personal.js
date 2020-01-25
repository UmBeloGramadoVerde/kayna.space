import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu-personal.scss';

export default class MenuPersonal extends Component {

  componentDidMount() {
    var toggle = document.querySelectorAll('.toggle-personal')[0];
    var nav = document.querySelectorAll('.menu-personal')[0];
    var toggle_open_text = '<span role="img" aria-label="Artist Emoji">👨🏾‍🎨</span>';
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
        nav.classList.toggle('open-personal');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(
            function () {
              nav.parentNode.classList.toggle('active-menu');
              document.getElementsByClassName(
                'menu-personal-container'
              )[0].style.right = '15px';
            },
            700
          );
        } else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open-personal')) {
          setTimeout(
            function () {
              toggle.innerHTML = toggle_close_text;
            },
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
        <nav className='menu-personal'>
          <Link
            className='disc-personal l2-personal'
            to='/personal/belo-gramado-verde'
          >
            <div>Belo Gramado Verde</div>
          </Link>
          <Link
            className='disc-personal l3-personal'
            to='/personal/horse-with-no-name'
          >
            <div>Horse With No Name</div>
          </Link>
          <Link className='disc-personal l4-personal' to='/personal/trust-the-boa'>
            <div>Trust The Boa</div>
          </Link>
          <Link className='disc-personal l5-personal' to='/personal/arquivo-world'>
            <div>Arquivo World</div>
          </Link>
          <Link className='disc-personal l6-personal' to='/personal/bauhaus-tour'>
            <div>Bauhaus Tour</div>
          </Link>
          <Link className='disc-personal l7-personal' to='/personal/code-race'>
            <div>Code Race</div>
          </Link>
          <a className='disc-personal last-personal toggle-personal'><span role="img" aria-label="Artist Emoji">👨🏾‍🎨</span></a>
        </nav>
      </div>
    );
  }
}
