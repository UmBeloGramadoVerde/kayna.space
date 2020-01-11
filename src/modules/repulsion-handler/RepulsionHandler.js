import React, { Component } from 'react';
import './RepulsionHandler.css';
import Background from '../background/Background';

export default class RepulsionHandler extends Component {
  constructor(props) {
    super(props);
    this.bg = React.createRef();
    this.circles = [];
    this.DOMexpansiveBois = [];
    this.previousHeigth = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), {
      capture: true,
      passive: true
    });
    window.addEventListener('pageChange', this.handleScroll.bind(this), {
      capture: true,
      passive: true
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
    this.circles = [];
    this.DOMexpansiveBois = document.getElementsByClassName('expansive_bois');
    if (Math.abs(this.previousHeigth - this.DOMexpansiveBois[0].clientHeight) >= 2) {
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
        <Background circles={this.circles} ref={this.bg} />
      </div>
    );
  }
}
