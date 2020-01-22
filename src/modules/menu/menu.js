import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var toggle = document.querySelectorAll('.toggle')[0];
    var nav = document.querySelectorAll('.menu')[0];
    var toggle_open_text = 'Menu';
    var toggle_close_text = 'Close';

    toggle.addEventListener(
      'click',
      function () {
        nav.classList.toggle('open');
        if (nav.parentNode.classList.contains('active-menu')) {
          setTimeout(function () {
            nav.parentNode.classList.toggle('active-menu');
          }.bind(this), 700);
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
  }
  toggle_open_menu() {
    document.getElementsByClassName('menu-professional-container')[0].style.top = '0px';
    document.getElementsByClassName('menu-personal-container')[0].style.right = '0px';
    setTimeout(function () {
      document.getElementsByClassName('menu-personal-container')[0].style.visibility = 'hidden';
      document.getElementsByClassName('last-personal')[0].style.visibility = 'hidden';
      document.getElementsByClassName('menu-professional-container')[0].style.visibility = 'hidden';
      document.getElementsByClassName('last-professional')[0].style.visibility = 'hidden';
    }.bind(this), 500);
  }

  toggle_open_menu_personal() {
    document.getElementsByClassName('menu-personal-container')[0].style.right = '100px';
    document.getElementsByClassName('menu-professional-container')[0].style.top = '0px';
    document.getElementsByClassName('menu-personal-container')[0].style.visibility = 'visible';
    document.getElementsByClassName('last-personal')[0].style.visibility = 'visible';
    document.querySelectorAll('.toggle')[0].dispatchEvent(new Event('click'));
    setTimeout(function () {
      document.querySelectorAll('.toggle-personal')[0].dispatchEvent(new Event('click'));
    }.bind(this), 500);
  }

  toggle_open_menu_professional() {
    document.getElementsByClassName('menu-professional-container')[0].style.top = '100px';
    document.getElementsByClassName('menu-personal-container')[0].style.right = '0px';
    document.getElementsByClassName('menu-professional-container')[0].style.visibility = 'visible';
    document.getElementsByClassName('last-professional')[0].style.visibility = 'visible';
    document.querySelectorAll('.toggle')[0].dispatchEvent(new Event('click'));
    setTimeout(function () {
      document.querySelectorAll('.toggle-professional')[0].dispatchEvent(new Event('click'));
    }.bind(this), 500);
  }

  dispatchClick() {
    document.querySelectorAll('.toggle')[0].dispatchEvent(new Event('click'));
  }

  render() {
    return (
      <div className="menu-container">
        <nav class="menu">
          <a class="disc l5">
            <div onClick={this.toggle_open_menu_personal}>Personal</div>
          </a>
          <a class="disc l6">
            <div onClick={this.toggle_open_menu_professional}>Professional</div>
          </a>
          <a class="disc l7" onClick={this.dispatchClick}>
            <div><Link to="/home">Home</Link></div>
          </a>
          <a class="disc last toggle" onClick={this.toggle_open_menu}>Menu</a>
        </nav>
      </div>
    );
  }
}
