import React, { Component } from 'react';
import '../games.css';
import blanc from '../audio/colours/blanc.wav';
import bleu from '../audio/colours/bleu.wav';
import brun from '../audio/colours/brun.wav';
import gris from '../audio/colours/gris.wav';
import jaune from '../audio/colours/jaune.wav';
import noir from '../audio/colours/noir.wav';
import orange from '../audio/colours/orange.wav';
import rose from '../audio/colours/rose.wav';
import rouge from '../audio/colours/rouge.wav';
import vert from '../audio/colours/vert.wav';
import violet from '../audio/colours/violet.wav';
import iblanc from '../images/colours/iblanc.jpg';
import ibleu from '../images/colours/ibleu.jpg';
import ibrun from '../images/colours/ibrun.jpg';
import igris from '../images/colours/igris.jpg';
import ijaune from '../images/colours/ijaune.jpg';
import inoir from '../images/colours/inoir.jpg';
import iorange from '../images/colours/iorange.jpg';
import irose from '../images/colours/irose.jpg';
import irouge from '../images/colours/irouge.jpg';
import ivert from '../images/colours/ivert.jpg';
import iviolet from '../images/colours/iviolet.jpg';
import Sound from 'react-sound';
class Y3Game3 extends Component {
  state = {
    audio: [
      blanc,
      bleu,
      gris,
      jaune,
      noir,
      brun,
      orange,
      rose,
      rouge,
      vert,
      violet,
    ],
    colours: [
      iblanc,
      ibleu,
      igris,
      ijaune,
      inoir,
      ibrun,
      iorange,
      irose,
      irouge,
      ivert,
      iviolet,
    ],
    isGamePlaying: false,
    currentColour1: null,
    currentColour2: null,
    currentColour3: null,
    currentAudio: null,
    isAudioPlaying: false,
  };

  handleClick = () => {
    let num1 = Math.round(Math.random() * 11);
    let num2 = Math.round(Math.random() * 11);
    let num3 = Math.round(Math.random() * 11);
    if (num1 === num2) {
      num2 = Math.round(Math.random() * 11);
    }
    if (num2 === num3) {
      num3 = Math.round(Math.random() * 11);
    }
    if (num3 === num1) {
      num1 = Math.round(Math.random() * 11);
    }

    this.setState({
      isPlaying: true,
      currentColour1: this.state.colours[num1],
      currentColour2: this.state.colours[num2],
      currentColour3: this.state.colours[num3],
    });

    let randomAudio = Math.round(Math.random() * 3);

    if (randomAudio === 0) {
      randomAudio = Math.round(Math.random() * 3);
    }
    console.log(randomAudio);
    if (randomAudio === 1) {
      this.setState({ currentAudio: this.state.audio[num1] });
    }
    if (randomAudio === 2) {
      this.setState({ currentAudio: this.state.audio[num2] });
    }
    if (randomAudio === 3) {
      this.setState({ currentAudio: this.state.audio[num3] });
    }
  };

  handlePlay = () => {
    this.setState({ isAudioPlaying: true });
    setTimeout(() => this.setState({ isAudioPlaying: false }), 3000);

    // let num1 = Math.round(Math.random() * 11);
    // let num2 = Math.round(Math.random() * 11);
    // let num3 = Math.round(Math.random() * 11);
    // if (num1 === num2) {
    //   num2 = Math.round(Math.random() * 11);
    // }
    // if (num2 === num3) {
    //   num3 = Math.round(Math.random() * 11);
    // }
    // if (num3 === num1) {
    //   num1 = Math.round(Math.random() * 11);
    // }

    // console.log(num1, num2, num3);
  };

  render() {
    return (
      <main>
        <h2>Game 3- Colours</h2>
        <p>
          In this game, you will hear a word and be given a choice of 3 colours.
          Click on the correct colour to get a point. Once you have 11 points,
          you can move onto the next lesson.
        </p>
        {!this.state.isPlaying && (
          <div>
            {' '}
            <p>Click play to start.</p>
            <button onClick={this.handleClick}>Play</button>
          </div>
        )}

        {this.state.isPlaying && (
          <div className="colour-section">
            <section className="colours-container">
              <img
                className="colour-box"
                src={this.state.currentColour1}
                alt="blue"
              ></img>
              <img
                className="colour-box"
                src={this.state.currentColour2}
                alt="blue"
              ></img>
              <img
                className="colour-box"
                src={this.state.currentColour3}
                alt="blue"
              ></img>
              <br />
              <button className="icon-button" onClick={this.handlePlay}>
                <i class="em em-speaker" aria-label="SPEAKER"></i>
              </button>
              {this.state.isAudioPlaying && (
                <Sound
                  url={this.state.currentAudio}
                  playStatus={Sound.status.PLAYING}
                />
              )}
            </section>
          </div>
        )}
      </main>
    );
  }
}

export default Y3Game3;
