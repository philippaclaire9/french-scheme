import React from 'react';
//import '../animation.css';
import '../animation-test.css';
import balloonorange from '../images/balloons/balloonorange.jpg';
import balloonpurple from '../images/balloons/balloonpurple.jpg';
import balloonyellow from '../images/balloons/balloonyellow.jpg';

const Y3Lesson4 = () => {
  return (
    <div className="centre-box">
      <div className="balloon-container">
        <img src={balloonorange} className="one" alt="orange balloon"></img>
        <img src={balloonpurple} className="two" alt="purple balloon"></img>
        <img src={balloonyellow} className="three" alt="yellow balloon"></img>
      </div>
    </div>
  );
};

export default Y3Lesson4;
