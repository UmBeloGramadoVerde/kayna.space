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
          This is a convenient way to sum up most of my projects. I hope this convinces you I'm cool to work with.
        </h4>
        <h4 className="expansive_bois">
          I'm comfortable with back and front end (Angular, React, Node,
          Python, Java, .Net). I can solve problems real good and learn things
          real fast.
        </h4>
        <h4 className="expansive_bois">
          Currently I live in Portugal, work in <Link to="/professional/altran">Altran</Link> and study Informatics in Universidade da Beira Interior.
        </h4>
        <h4 className="expansive_bois">
          I'm interested in working with unorthodox, artistic,
          weird and creative projects.
          If you think I could help with something interesting you
          are working on, <a href="mailto:kaynarodrigues@live.com" target="_blank" rel="noopener noreferrer">let me know</a> , it would be a pleasure.
        </h4>
      </div>
    );
  }
}
