import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../shared/styles.scss';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content">
        <h1 className="expansive_bois">Kaynã Rodrigues</h1>
        <p></p>
        <h4 className="expansive_bois">
          This is just to sum up most projects I've done, so it is more
          convenient to show them to people, in order for me to convince them
          that I would be cool to work with. Give me money to make cool things.
        </h4>
        <h4 className="expansive_bois">
          I'm pretty comfortable with back and front end (angular, react, node,
          python, Java, .NET). I can solve problems real good and learn things
          real fast.
        </h4>
        <h4 className="expansive_bois">
          Currently I live in Portugal, work in <Link to="/professional/altran">Altran</Link> and study in Universidade da Beira Interior.
        </h4>
        <h4 className="expansive_bois">
          I'm interested in working with unformal, artistic,
          weird and creative projects.
          If you think I could help with something interesting you
          are working on, <a href="mailto:kaynarodrigues@live.com" target="_blank">let me know</a> , it would be a pleasure.
        </h4>
      </div>
    );
  }
}
