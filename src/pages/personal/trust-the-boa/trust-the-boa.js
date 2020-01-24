import React, { Component } from 'react';
import '../../shared/styles.scss';

export default class TrustTheBoa extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  render() {
    return (
      <div className='content'>
        <h1 className='expansive_bois'>Trust The Boa</h1>
        <p></p>
        <h4 className='expansive_bois'>
          This is a collaborative wallet brands. We find cool stories, get cool
          artists that we would like to illustrate the wallets in however way
          they want and print the illustrations in fabric, from which we make
          the wallets.
        </h4>
        <h4 className='expansive_bois'>
          It is legitimately fun to work on this with everybody and we also give
          1 euro out of every wallet sold to <a href="https://www.facebook.com/associacaoinstinto" target="_blank">Instinto</a>, a animal shelter in Covilhã,
          Portugal. We have one collection out and the prints of the second one
          are drawn and approved.
        </h4>
        <h4 className='expansive_bois'>
          I made the e-commerce website with wordpress, made all the designs and
          logo with illustrator and product management. The most fun part is
          giving a prompt to an artist and letting them work however they want
          with it.
        </h4>
        <h4 class='expansive_bois'>
          Our store{' '}
          <a href='https://trusttheboa.com/' target='_blank' class='arrow_link'>
            →
          </a>
        </h4>

        <div className='image-gallery'>
          <figure>
            <img src='/images/TTB/TTB-1.jpg' alt='Droid 1' />
            <figcaption>Logo design</figcaption>
          </figure>
          <figure>
            <img src='/images/TTB/TTB-2.jpg' alt='Droid 2' />
            <figcaption>Print from the second collection</figcaption>
          </figure>
          <figure>
            <img src='/images/TTB/TTB-4.jpg' alt='Droid 4' />
            <figcaption>Businness card</figcaption>
          </figure>
          <figure>
            <img src='/images/TTB/TTB-5.jpg' alt='Droid 5' />
            <figcaption>Businness card</figcaption>
          </figure>
          <figure>
            <img src='/images/TTB/TTB-6.jpg' alt='Droid 6' />
            <figcaption>Gotta get better at sewing</figcaption>
          </figure>
          <figure>
            <img src='/images/TTB/TTB-7.jpg' alt='Droid 7' />
            <figcaption>Print from the first collection</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
