import React, { Component } from 'react';
import '../../shared/styles.scss';
import GramadinhoVerdaoResumedExp from '../../../modules/resumed-exp/gramadinho-verdao-resumed-exp';
import HorseWithNoNameResumedExp from '../../../modules/resumed-exp/horse-with-no-name-resumed-exp';

export default class TrustTheBoa extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  render() {
    return (
      <div className='content'>
        <h1 className='expansive_bois'>Trust The Boa</h1>
        <i className="timespan">Dec '18 - Present</i>
        <p></p>
        <div className="stagger_container">
          <h4 className='expansive_bois'>
            This is a collaborative wallet brand. We find cool stories, get cool
            artists that we would like to illustrate the wallets in however way
            they want and print the illustrations in fabric, from which we make
            the wallets. <a href='https://trusttheboa.com/' target='_blank' rel="noopener noreferrer">Our store.</a>
        </h4>
          <figure className='expansive_bois'>
            <img src='/images/TTB/TTB-8.jpg' alt='TTB 8' />
            <figcaption>"Cant't you hear?" - 1º Collection</figcaption>
          </figure>
          <figure className='expansive_bois'>
            <img src='/images/TTB/TTB-9.jpg' alt='TTB 9' />
            <figcaption>"Woke up drenched" - 1º Collection</figcaption>
          </figure>
          <h4 className='expansive_bois'>
            It is legitimately fun to work on this with everybody and we also give
            1 euro out of every wallet sold to <a href="https://www.facebook.com/associacaoinstinto" target="_blank" rel="noopener noreferrer">Instinto</a>, a animal shelter in Covilhã,
            Portugal. We have one collection out and the prints of the second one
            are drawn and approved.
        </h4>
          <figure className='expansive_bois'>
            <img src='/images/TTB/TTB-7.jpg' alt='TTB 7' />
            <figcaption>"He was all hurt" - 1º Collection</figcaption>
          </figure>
          <figure className='expansive_bois'>
            <img src='/images/TTB/TTB-2.jpg' alt='TTB 2' />
            <figcaption>"Hindu" - 2º Collection</figcaption>
          </figure>
          <h4 className='expansive_bois'>
            I made the e-commerce website with Wordpress, made all the designs and
            logo with Illustrator and was also responsible for the product management. 
            The most fun part is giving a prompt to an artist and letting them work 
            however they want with it.
        </h4>
          <figure className='expansive_bois'>
            <img src='/images/TTB/TTB-1.jpg' alt='TTB 1' />
            <figcaption>Logo design</figcaption>
          </figure>
          <figure className='expansive_bois'>
            <img src='/images/TTB/TTB-6.jpg' alt='TTB 6' />
            <figcaption>Learning to sew</figcaption>
          </figure>
        </div>

        <div className="other_exps">
          <div className="other_exps_title expansive_bois">
            Other experiences
            </div>
          <div className="other_exps_items">
            <HorseWithNoNameResumedExp />
            <GramadinhoVerdaoResumedExp />
          </div>
        </div>

      </div>
    );
  }
}
