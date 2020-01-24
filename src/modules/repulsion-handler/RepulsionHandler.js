import React, { Component } from 'react';
import './RepulsionHandler.css';
import Background from '../background/Background';

export default class RepulsionHandler extends Component {
  constructor(props) {
    super(props);
    this.bg = React.createRef();
    this.circles = [];
    this.DOMexpansiveBois = [];
    this.previousTime = 0;
    this.previousHeigth = 0;
  }

  componentDidMount() {
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
    window.addEventListener('pageChange', this.handleScroll.bind(this), {
      capture: true,
      passive: true
    });
    window.addEventListener('resize', (ev) => {
      let diff = Math.abs(this.previousHeigth - ev.target.innerHeight);
      document.getElementById('diff').innerText = diff;
      this.previousHeigth = ev.target.innerHeight;
      if (diff !== 56) {
        this.bg.current.resize();
      }
    });
  }

  handlePageChange() {
    setTimeout(() => {
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
        );
        this.circles[index].force = -15;
      }
      this.bg.current.update(this.circles);
    }, 500);
  }

  handleScroll() {
    let currentTime = Date.now();
    let timeDifferenceCutoff = 100;
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
        );
        this.circles[index].force = -15;
      }
      this.bg.current.update(this.circles);
    }
  }

  render() {
    return (
      <div className="RepulsionHandler">
        <div id="diff" style={{ fontSize: '5rem' }}></div>
        <Background circles={this.circles} ref={this.bg} />
      </div>
    );
  }
}
