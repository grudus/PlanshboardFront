import React from 'react';
import './cubeAnimation.css';

const CubeAnimation = () => (
  <section className="animation-wrapper">
    <div className="sk-folding-cube-wrapper">
      <h1 className="sk-folding-cube-header">Poczekajmy na odpowiedź serwera...</h1>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    </div>
  </section>
);

export default CubeAnimation;
