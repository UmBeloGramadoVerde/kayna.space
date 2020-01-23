import React, { Component } from 'react';
import '../../shared/styles.scss';

export default class HorseWithNoName extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Horse With No Name</h1>
        <p></p>
        <h4 className="expansive_bois">
          I always played multiplayer video games since I was a little kid and I
          always asked myself how in the hell did it work. This project was me
          saying ~enough procrastination~ and putting the effort to learn it.
        </h4>
        <h4 className="expansive_bois">
          I wanted to experiment with a simple concept to get the hang of how
          the matchmaking, client connection and data synchronization worked
          using websockets. Just like the other personal projects, I came out of
          this ten times better than I went in.
        </h4>
        <h4 className="expansive_bois">
          <a href="https://horsewithnoname.online/" target="_blank">The game</a> was 
          really not that fun, to be honest. But it sure worked to
          teach me how multiplayer games work. I used p5js (the lord almighty)
          and socket.io to build this one.
        </h4>
        <h4 className="expansive_bois">
          The name came from the music <a href="https://www.youtube.com/watch?v=zSAJ0l4OBHM" target="_blank">The horse with no name</a> by America,
          because at the time I was making this, it was taking a lot of my time
          and I also had to deliver a college assignment that was about making a
          website that used multimedia content.
        </h4>
        <h4 className="expansive_bois">
          So I just put this song in so the professor wouldn't zero out my work
          and I was able to continue working on it.
        </h4>

        <h4 class="expansive_bois">
          The game page <a href="https://horsewithnoname.online/" target="_blank" class="arrow_link">→</a>
        </h4>
      </div>
    );
  }
}
