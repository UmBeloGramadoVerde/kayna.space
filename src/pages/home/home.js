import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../shared/styles.scss';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="content show_me_the_balls">
        <h1 className="expansive_bois">Kaynã Rodrigues</h1>
        <p></p>
        <h4 className="expansive_bois">
          Web dev at <Link to="/professional/altran">Altran</Link>,
          Informatics student in Universidade da Beira Interior.
        </h4>
        <h4 className="expansive_bois">
          Angular, React, Node, Python, Java, .Net.
          <br />
          I can solve problems real good and learn things real fast.
        </h4>
        <h4 className="expansive_bois">
          Think I could help with some unorthodox, artistic or weird project you
          are working on ?
          <br />
          <a href="mailto:kaynarodrigues@live.com" target="_blank" rel="noopener noreferrer">Let me know</a> , it would be a pleasure.
        </h4>
      </div>
    );
  }
}
