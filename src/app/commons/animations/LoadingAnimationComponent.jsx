import React, { Component } from 'react';
import 'particles.js';
import './loadingAnimation.css';
import conf from '../particles/particlesjs-config';

class LoadingAnimation extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    particlesJS('loading-animation', conf);
  }

  render() {
    const waitingTexts = [
      'Poczekaj, przygotowujemy Twoje gry',
      'Poklikaj w te ruszające się rzeczy',
      'Pomyśl, w co zagrać następnym razem',
      'Czego dawno nie ruszałeś?',
      'Może czas na nową grę?',
      'Już kończymy, nie martw się',
      'Żartowałem, od nowa!',
    ]
      .map(a => <span key={a} className="loading-animation-header">{a}</span>);


    return (
      <section id="loading-animation" className="animation-wrapper">
        <div className="animated-words">
          {waitingTexts}
        </div>
      </section>
    );
  }
}
export default LoadingAnimation;
