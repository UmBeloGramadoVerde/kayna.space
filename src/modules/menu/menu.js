import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import CircleType from 'circletype';

export default class Menu extends Component {

  componentDidMount() {
    var toggle = document.querySelectorAll('.toggle')[0];
    var nav = document.querySelectorAll('.menu')[0];
    var toggle_open_text = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
      <rect y="277.333" width="341.333" height="42.667" />
      <rect y="149.333" width="341.333" height="42.667" />
      <rect y="21.333" width="341.333" height="42.667" />
  </svg>`;
    var toggle_close_text = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 449.998 449.998" style="enable-background:new 0 0 449.998 449.998;" xml:space="preserve">
    <polygon points="449.974,34.855 415.191,0 225.007,190.184 34.839,0 0.024,34.839 190.192,224.999 
      0.024,415.159 34.839,449.998 225.007,259.797 415.191,449.998 449.974,415.143 259.83,224.999 		"/>
 </svg>`;

    toggle.addEventListener(
      'click',
      function () {
        nav.classList.toggle('open');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(function () {
            nav.parentNode.classList.toggle('active-menu');
          }, 700);
        }
        else {
          nav.parentNode.classList.toggle('active-menu');
        }

        if (nav.classList.contains('open')) {
          toggle.innerHTML = toggle_close_text;
        } else {
          toggle.innerHTML = toggle_open_text;
        }
      },
      false
    );



    /* const circleType = new CircleType(document.querySelectorAll('.l1'));
    const circleType = new CircleType(document.querySelectorAll('.l2'));
    const circleType = new CircleType(document.querySelectorAll('.l3'));
    const circleType = new CircleType(document.querySelectorAll('.l4'));
    const circleType = new CircleType(document.querySelectorAll('.l5'));
    const circleType = new CircleType(document.querySelectorAll('.l6')); */
    /* const circleType = new CircleType(document.querySelectorAll('.l6 div')[0]); */
    /* console.log(circleType); */
  }
  toggle_open_menu() {
    document.getElementsByClassName('menu-professional-container')[0].style.top = '15px';
    document.getElementsByClassName('menu-personal-container')[0].style.right = '15px';
    setTimeout(function () {
      document.getElementsByClassName('menu-personal-container')[0].style.visibility = 'hidden';
      document.getElementsByClassName('last-personal')[0].style.visibility = 'hidden';
      document.getElementsByClassName('menu-professional-container')[0].style.visibility = 'hidden';
      document.getElementsByClassName('last-professional')[0].style.visibility = 'hidden';
    }, 500);
  }

  toggle_open_menu_personal() {
    document.getElementsByClassName('menu-personal-container')[0].style.right = '115px';
    document.getElementsByClassName('menu-professional-container')[0].style.top = '15px';
    document.getElementsByClassName('menu-personal-container')[0].style.visibility = 'visible';
    document.getElementsByClassName('last-personal')[0].style.visibility = 'visible';
    document.querySelectorAll('.toggle')[0].dispatchEvent(new Event('click'));
    setTimeout(function () {
      document.querySelectorAll('.toggle-personal')[0].dispatchEvent(new Event('click'));
    }, 500);
  }

  toggle_open_menu_professional() {
    document.getElementsByClassName('menu-professional-container')[0].style.top = '115px';
    document.getElementsByClassName('menu-personal-container')[0].style.right = '15px';
    document.getElementsByClassName('menu-professional-container')[0].style.visibility = 'visible';
    document.getElementsByClassName('last-professional')[0].style.visibility = 'visible';
    document.querySelectorAll('.toggle')[0].dispatchEvent(new Event('click'));
    setTimeout(function () {
      document.querySelectorAll('.toggle-professional')[0].dispatchEvent(new Event('click'));
    }, 500);
  }

  dispatchClick() {
    document.querySelectorAll('.toggle')[0].dispatchEvent(new Event('click'));
  }

  render() {
    return (
      <div className="menu-container">
        <nav className="menu">
          <div className="disc l5">
            <div onClick={this.toggle_open_menu_personal}>
              <img src="/images/menu-text/personal-text.svg" alt="personal text" />
            </div>
          </div>
          <div className="disc l6">
            <div onClick={this.toggle_open_menu_professional}>
              <img src="/images/menu-text/professional-text.svg" alt="professional text" />
            </div>
          </div>
          <div className="disc l7" onClick={this.dispatchClick}>
            <div><Link to="/home">
              <img src="/images/menu-text/home-text.svg" alt="home text" />
            </Link></div>
          </div>
          <div className="disc last toggle" onClick={this.toggle_open_menu}>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px"
              y="0px" viewBox="0 0 341.333 341.333">
              <g>
                <g>
                  <rect y="277.333" width="341.333" height="42.667" />
                  <rect y="149.333" width="341.333" height="42.667" />
                  <rect y="21.333" width="341.333" height="42.667" />
                </g>
              </g>
            </svg>
          </div>
        </nav>
      </div >
    );
  }
}
