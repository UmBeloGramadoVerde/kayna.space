import React, { Component } from 'react';
import './RepulsionHandler.scss';
import Background from '../background/Background';

export default class RepulsionHandler extends Component {
  constructor(props) {
    super(props);
    this.bg = React.createRef();
    this.circles = [];
    this.DOMexpansiveBois = [];
    this.previousTime = 0;
    this.previousHeigth = 0;
    this.bigCanvasHeight = 0;
    this.showBalls = true;
    this.noBallsSelected = false;
    this.show_dots_text = 'Dots';
    this.hide_dots_text = 'No Dots';
  }

  componentDidMount() {
    /* Event listeners */
    window.addEventListener('scroll', this.handleScroll.bind(this), {
      capture: true,
      passive: true
    });
    window.addEventListener('touchend', this.handleScroll.bind(this), {
      capture: true,
      passive: true
    });
    window.addEventListener('touchstart', this.handleScroll.bind(this), {
      capture: true,
      passive: true
    });
    window.addEventListener('pageChange', this.handlePageChange.bind(this), {
      capture: true,
      passive: true
    });
    window.addEventListener('resize', (ev) => {
      let innerWidth = ev.target.innerWidth;
      let innerHeight = ev.target.innerHeight;
      let diff = Math.abs(this.previousHeigth - innerHeight);
      this.previousHeigth = innerHeight;
      /* I have to map all the url bar sizes */
      /* This is a dumb implementation, there is probably a smart way of getting the size */
      if ((diff !== 56) && (diff !== 75) && (diff !== 76)) {
        this.bg.current.resize(innerWidth, innerHeight);
      }
      /* If we are dealing with a url bar size change ... */
      else if (innerHeight > this.bigCanvasHeight) {
        /* document.querySelectorAll('.Background')[0].style.height = `calc(100vh + ${diff}px)`; */
        this.bg.current.resize(innerWidth, innerHeight);
        this.bigCanvasHeight = innerHeight;
      } else if (innerHeight = this.bigCanvasHeight) {
        this.bg.current.resize(innerWidth, innerHeight);
      }
    });

    /* Initial setup for ball display */
    if (!this.noBallsSelected) {
      this.showBalls = document.querySelectorAll('.content')[0].classList.contains('show_me_the_balls');
      document.getElementById('no_balls_button').innerText = (this.showBalls) ? this.hide_dots_text : this.show_dots_text;
    }
    this.bg.current.update(this.circles, this.showBalls);
    this.handlePageChange();
  }

  handlePageChange() {
    setTimeout(() => {
      if (!this.noBallsSelected) {
        this.showBalls = document.querySelectorAll('.content')[0].classList.contains('show_me_the_balls');
        document.getElementById('no_balls_button').innerText = (this.showBalls) ? this.hide_dots_text : this.show_dots_text;
      }
      this.bg.current.update(this.circles, this.showBalls);
    }, 500);
  }

  handleScroll() {
    let currentTime = Date.now();
    let timeDifferenceCutoff = 75;
    /* This 75 was pure trial and error */
    /* The bigger timeDifferenceCutoff is, the bigger the lag of the div position recognition */
    /* The smaller it is, more scroll events have to be dealt with */
    /* Was this a good attempt at optimization ? */
    if (Math.abs(currentTime - this.previousTime) >= timeDifferenceCutoff) {
      this.previousTime = currentTime;

      this.circles = [];
      this.DOMexpansiveBois = document.getElementsByClassName('expansive_bois');

      for (let index = 0; index < this.DOMexpansiveBois.length; index++) {
        const element = this.DOMexpansiveBois[index];
        if (!this.circles[index]) {
          this.circles[index] = new Object();
        }
        this.circles[index].x = element.offsetLeft + element.clientWidth / 2;
        this.circles[index].y =
          element.offsetTop - window.scrollY + element.clientHeight / 2;
        this.circles[index].radius = Math.sqrt(
          Math.pow(element.clientWidth, 2) + Math.pow(element.clientHeight, 2)
        ) * 1.1;
        this.circles[index].force = -15;
      }
      this.bg.current.update(this.circles, this.showBalls);
    }
  }

  render() {
    return (
      <div className="RepulsionHandler">
        <button id="no_balls_button" onClick={() => {
          this.showBalls = !this.showBalls;
          this.noBallsSelected = (document.getElementById('no_balls_button').innerText === this.hide_dots_text);
          document.getElementById('no_balls_button').innerText = (this.showBalls) ? this.hide_dots_text : this.show_dots_text;
          this.bg.current.update(this.circles, this.showBalls);
        }}></button>
        <Background circles={this.circles} ref={this.bg} />
      </div>
    );
  }
}
