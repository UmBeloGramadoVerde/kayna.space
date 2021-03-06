import React, { Component } from 'react';
import './Background.css';
import Sketch from 'react-p5';
const toxi = require('toxiclibsjs');

export default class Background extends Component {

  /* Varible definitions */

  P5;
  circles;
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  options = {
    WIND_VARIANCE: 0.01,
    WIND_SPEED: 1,
    RADIUS: 200,
    TIMESTEP: 1,
    STRENGTH: -10,
    INNER_RADIUS: 100,
    INNER_STRENGTH: 0,
    PARTICLE_RADIUS: 5
  };
  PARTICLE_QUANTITY_RATIO = 0;
  PARTICLE_QUANTITY_DENSITY = 0;
  NUM_PARTICLES = 0;

  palette_initial = ['#28464B', '#326771', '#2C8C99', '#42D9C8'];
  palette = ['#b39bc8', '#7F2982', '#861657', '#2B4141'];
  WIND_SPEED = 2;
  WIND_VARIANCE = 0.05;
  yoff = 0;
  physics;
  mouseAttractor;
  mousePos;
  is_being_attracted = false;
  circleBehaviours = [];
  particleBehaviours = [];
  randomLoc;

  /* p5js canvas functions */

  setup = (p5, canvasParentRef) => {
    this.P5 = p5;
    this.PARTICLE_QUANTITY_RATIO = ((this.WIDTH / (this.options.INNER_RADIUS / 2)) *
      (this.HEIGHT / (this.options.INNER_RADIUS / 2)));
    let value = (this.PARTICLE_QUANTITY_RATIO <= 1000) ? this.PARTICLE_QUANTITY_RATIO : 1000;
    value = p5.map(value, 0, 1000, 75, 200);
    this.options.INNER_STRENGTH = p5.map(value, 100, 250, -2, -4);
    this.NUM_PARTICLES = Math.floor(value);

    this.circles = this.props.circles;
    this.physics = new toxi.physics2d.VerletPhysics2D();
    this.randomLoc = new toxi.geom.Vec2D(
      Math.random() * this.WIDTH,
      Math.random() * this.HEIGHT
    );
    p5.createCanvas(this.WIDTH, this.HEIGHT).parent(canvasParentRef);

    this.physics.setDrag(0.16);
    this.physics.setTimeStep(0.8);
    this.physics.setWorldBounds(
      new toxi.geom.Rect(
        this.options.PARTICLE_RADIUS * -3,
        this.options.PARTICLE_RADIUS * -3,
        this.WIDTH * 1.1,
        this.HEIGHT * 1.1
      )
    );
    this.setBehaviours(this.circles);
  };
  draw = p5 => {
    p5.background('#f0ebf4');
    if (this.showBalls) {
      if (this.physics.particles.length < this.NUM_PARTICLES) {
        this.addParticle();
      } else if (this.physics.particles.length > this.NUM_PARTICLES) {
        this.physics.particles.pop();
        this.physics.removeBehavior(this.particleBehaviours[this.particleBehaviours.length - 1]);
        this.particleBehaviours.pop();
      }
    } else {
      if (this.physics.particles.length > 0) {
        let speed = 3;
        if (this.physics.particles.length > 10) {
          for (let index = 0; index < speed; index++) {
            this.physics.particles.pop();
            this.physics.removeBehavior(this.particleBehaviours[this.particleBehaviours.length - 1]);
            this.particleBehaviours.pop();
          }
        } else {
          this.physics.particles.pop();
          this.physics.removeBehavior(this.particleBehaviours[this.particleBehaviours.length - 1]);
          this.particleBehaviours.pop();
        }
      }
    }
    this.physics.update();
    for (var i = 0; i < this.physics.particles.length; i++) {
      var p = this.physics.particles[i];
      p5.noStroke();
      p5.fill(p.color);
      p5.ellipse(
        p.x,
        p.y,
        this.options.PARTICLE_RADIUS,
        this.options.PARTICLE_RADIUS
      );
    }

    var xoff = 0;
    for (i = 1; i < this.physics.particles.length; i++) {
      this.options.WIND_SPEED = p5.map(p5.noise(xoff), 0, 1, 1, 3);
      var windx = p5.map(
        p5.noise(xoff, this.yoff),
        0,
        1,
        -1 * this.options.WIND_SPEED,
        this.options.WIND_SPEED
      );
      var windy = p5.map(
        p5.noise(xoff + 5000, this.yoff + 5000),
        0,
        1,
        -1 * this.options.WIND_SPEED,
        this.options.WIND_SPEED
      );
      var wind = new toxi.geom.Vec2D(windx, windy);
      this.physics.particles[i].addForce(wind);
      xoff += this.options.WIND_VARIANCE;
    }
    this.yoff += this.options.WIND_VARIANCE;
  };

  resize(innerWidth, innerHeight) {
    if (this.P5) {
      this.P5.resizeCanvas(innerWidth, innerHeight);
      this.physics.setWorldBounds(
        new toxi.geom.Rect(
          this.options.PARTICLE_RADIUS * -3,
          this.options.PARTICLE_RADIUS * -3,
          innerWidth * 1.1,
          innerHeight * 1.1
        )
      );
      this.PARTICLE_QUANTITY_RATIO = ((innerWidth / (this.options.INNER_RADIUS / 2)) *
        (innerHeight / (this.options.INNER_RADIUS / 2)));
      let value = (this.PARTICLE_QUANTITY_RATIO <= 1000) ? this.PARTICLE_QUANTITY_RATIO : 1000;
      value = this.P5.map(value, 0, 1000, 75, 200);
      this.options.INNER_STRENGTH = this.P5.map(value, 100, 250, -2, -4);
      this.NUM_PARTICLES = Math.floor(value);
    }
  };

  /* ToxicLibs physics functions */

  addParticle() {
    var randLoc = toxi.geom.Vec2D.randomVector()
      .scale(5)
      .addSelf(this.randomLoc);
    /* .addSelf(Math.random()*this.WIDTH, Math.random()*this.HEIGHT); */
    var p = new toxi.physics2d.VerletParticle2D(randLoc);
    p.color = this.palette[parseInt(Math.random() * this.palette.length, 10)];
    this.physics.addParticle(p);
    var innerAttractor = new toxi.physics2d.behaviors.AttractionBehavior(
      p,
      this.options.INNER_RADIUS,
      this.options.INNER_STRENGTH
    );
    this.particleBehaviours.push(innerAttractor)
    this.physics.addBehavior(innerAttractor);
  }

  setBehaviours(circles) {
    if (this.physics) {
      const previousLength = this.circleBehaviours.length;
      const length =
        this.circleBehaviours.length > circles.length
          ? this.circleBehaviours.length
          : circles.length;
      // I'm trying to avoid two for's
      // Optimization, hopefully
      for (let index = 0; index < length; index++) {
        if (index < this.circleBehaviours.length) {
          this.physics.removeBehavior(this.circleBehaviours[index]);
        }
        if (index < circles.length) {
          var behav = new toxi.physics2d.behaviors.AttractionBehavior(
            new toxi.geom.Vec2D(circles[index].x, circles[index].y),
            circles[index].radius / 2 + 30,
            circles[index].force
          );
          this.circleBehaviours.push(behav);
          this.physics.addBehavior(behav);
        }
      }
      this.circleBehaviours.splice(0, previousLength);
    }
  }

  update(nextProps, showBalls) {
    this.setBehaviours(nextProps);
    this.showBalls = showBalls;
  }

  mousePressed(ev) {
    if (this.mouseAttractor) {
      this.mouseReleased();
    }
    this.mousePos = new toxi.geom.Vec2D(ev.clientX, ev.clientY);
    this.mouseAttractor = new toxi.physics2d.behaviors.AttractionBehavior(
      this.mousePos,
      900,
      2
    );
    this.physics.addBehavior(this.mouseAttractor);
    this.is_being_attracted = true;
  }

  mouseReleased() {
    this.physics.removeBehavior(this.mouseAttractor);
    this.is_being_attracted = false;
  }

  mouseDragged(ev) {
    if (this.is_being_attracted) {
      this.mousePos.set(ev.clientX, ev.clientY);
    }
  }

  render() {
    return (
      <div className="Background">
        <div
          onMouseDown={e => this.mousePressed(e)}
          onMouseMove={e => this.mouseDragged(e)}
          onMouseUp={e => this.mouseReleased(e)}
          className="Teste"
        >
          <Sketch
            setup={this.setup}
            draw={this.draw}
          />
        </div>
      </div>
    );
  }
}
