import React, { Component } from 'react';
import '../games.css';
import { Link } from '@reach/router';
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
    words: [
      'blanc',
      'bleu',
      'gris',
      'jaune',
      'noir',
      'brun',
      'orange',
      'rose',
      'rouge',
      'vert',
      'violet',
    ],
    isGamePlaying: false,
    currentColour1: null,
    currentColour2: null,
    currentColour3: null,
    currentWord1: null,
    currentWord2: null,
    currentWord3: null,
    currentAudio: null,
    correctWord: null,
    isAudioPlaying: false,
    isCorrect: false,
    isIncorrect: false,
    isComplete: false,
    score: 0,
  };

  colourPicker = () => {
    let num1 = Math.round(Math.random() * 10);
    let num2 = Math.round(Math.random() * 10);
    let num3 = Math.round(Math.random() * 10);
    if (num1 === num2) {
      num2 = Math.round(Math.random() * 10);
    }
    if (num2 === num3) {
      num3 = Math.round(Math.random() * 10);
    }
    if (num3 === num1) {
      num1 = Math.round(Math.random() * 10);
    }

    this.setState({
      isPlaying: true,
      currentColour1: this.state.colours[num1],
      currentColour2: this.state.colours[num2],
      currentColour3: this.state.colours[num3],
      currentWord1: this.state.words[num1],
      currentWord2: this.state.words[num2],
      currentWord3: this.state.words[num3],
    });

    let randomAudio = Math.round(Math.random() * 3);

    if (randomAudio === 0) {
      randomAudio = Math.round(Math.random() * 3);
    }

    if (randomAudio === 1) {
      this.setState({
        currentAudio: this.state.audio[num1],
        currentWord: this.state.words[num1],
      });
    }
    if (randomAudio === 2) {
      this.setState({
        currentAudio: this.state.audio[num2],
        currentWord: this.state.words[num2],
      });
    }
    if (randomAudio === 3) {
      this.setState({
        currentAudio: this.state.audio[num3],
        currentWord: this.state.words[num3],
      });
    }
  };

  handleClick = () => {
    this.colourPicker();
  };

  handlePlay = (event) => {
    event.preventDefault();
    this.setState({ isAudioPlaying: true });
    setTimeout(() => this.setState({ isAudioPlaying: false }), 3000);
  };

  handleAnswer = (event) => {
    event.preventDefault();

    const { id } = event.target;
    if (id === this.state.currentWord) {
      this.setState((prevState) => ({
        isCorrect: true,
        score: prevState.score++,
      }));
      if (this.state.score === 11) {
        this.setState({ isComplete: true });
      }
      setTimeout(() => this.setState({ isCorrect: false }), 1500);
      this.colourPicker();
    } else {
      this.setState({ isIncorrect: true });
      setTimeout(() => this.setState({ isIncorrect: false }), 1500);
    }
  };

  render() {
    return (
      <main>
        <h2>Game 3- Colours</h2>
        <p>
          In this game, you will hear a word and be given a choice of 3 colours.
          Click on speaker icon to hear the word and click the correct colour to
          get a point. Once you have 11 points, you can move onto the next
          lesson.
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
              <form>
                {' '}
                <button className="colour-buttons" onClick={this.handleAnswer}>
                  {' '}
                  <img
                    className="colour-box"
                    src={this.state.currentColour1}
                    alt={this.state.currentWord1}
                    id={this.state.currentWord1}
                  ></img>
                </button>
                <button
                  className="colour-buttons"
                  onClick={this.handleAnswer}
                  id={this.state.currentWord2}
                >
                  <img
                    className="colour-box"
                    src={this.state.currentColour2}
                    alt={this.state.currentWord2}
                    id={this.state.currentWord2}
                  ></img>
                </button>
                <button className="colour-buttons" onClick={this.handleAnswer}>
                  <img
                    className="colour-box"
                    src={this.state.currentColour3}
                    alt={this.state.currentWord3}
                    id={this.state.currentWord3}
                  ></img>
                </button>
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
              </form>
              {this.state.isCorrect && <p>Correct, well done!</p>}
              {this.state.isIncorrect && <p>Oops, incorrect. Try again!</p>}
              <p>Score:{this.state.score}</p>
            </section>
          </div>
        )}
        {this.state.isComplete && (
          <div>
            <p>
              Well done! You've scored top marks! Click below to move onto the
              next lesson!
            </p>
            <Link to="/year_3/Lesson4">Next lesson</Link>
          </div>
        )}
      </main>
    );
  }
}

export default Y3Game3;
