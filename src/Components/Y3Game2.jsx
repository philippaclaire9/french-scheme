import React, { Component } from 'react';
import Sound from 'react-sound';
import '../games.css';
import { Link } from '@reach/router';
import un from '../audio/un.wav';
import deux from '../audio/deux.wav';
import trois from '../audio/trois.wav';
import quatre from '../audio/quatre.wav';
import cinq from '../audio/cinq.wav';
import six from '../audio/six.wav';
import sept from '../audio/sept.wav';
import huit from '../audio/huit.wav';
import neuf from '../audio/neuf.wav';
import dix from '../audio/dix.wav';

class Y3Game2 extends Component {
  state = {
    isPlaying1: false,
    isPlaying2: false,
    isPlaying3: false,
    isPlaying4: false,
    isPlaying5: false,
    isPlaying6: false,
    isPlaying7: false,
    isPlaying8: false,
    isPlaying9: false,
    isPlayingX: false,
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    isIncorrect: false,
    hasAttempted: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    for (const key in this.state) {
      if (event.target.id === key[key.length - 1]) {
        this.setState({ [key]: true });
        setTimeout(
          () =>
            this.setState({ [key]: false }, () => {
              console.log('false');
            }),
          1500
        );
      }
    }
  };

  handleChange = (event) => {
    const { value } = event.target;
    const { id } = event.target;

    this.setState({ [id]: value });
    // this.setState({ numberAnswers[id]: value}, () => {
    //   console.log(this.state.numberAnswers);
    // });
    // console.dir(event.target);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ hasAttempted: true });

    for (const key in this.state) {
      if (key.length <= 2) {
        if (key !== this.state[key]) {
          this.setState({ isIncorrect: true });
        }
      }
    }
  };

  render() {
    return (
      <main>
        <h2>Game 2- Numbers</h2>
        <p>
          Click on the words to hear it spoken. Below each word, type the
          correct number in the box. When you've put in all your answers, click
          the check answers button.
        </p>
        <form onSubmit={this.handleSubmit}>
          {' '}
          <section className="number-row">
            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="8"
              >
                huit
              </button>
              {this.state.isPlaying8 && (
                <Sound url={huit} playStatus={Sound.status.PLAYING} />
              )}{' '}
              <input
                type="text"
                name="8"
                id="8"
                className="number-input"
                required
                onChange={this.handleChange}
              />
            </section>
            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="3"
              >
                trois
              </button>
              {this.state.isPlaying3 && (
                <Sound url={trois} playStatus={Sound.status.PLAYING} />
              )}{' '}
              <input
                type="text"
                name="3"
                id="3"
                className="number-input"
                required
                onChange={this.handleChange}
              />
            </section>
            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="1"
              >
                un
              </button>
              {this.state.isPlaying1 && (
                <Sound url={un} playStatus={Sound.status.PLAYING} />
              )}
              <input
                type="text"
                name="1"
                id="1"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
            <section className="input-flexbox">
              {' '}
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="X"
              >
                dix
              </button>
              {this.state.isPlayingX && (
                <Sound url={dix} playStatus={Sound.status.PLAYING} />
              )}
              <input
                type="text"
                name="10"
                id="10"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>

            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="2"
              >
                deux <br />
              </button>
              {this.state.isPlaying2 && (
                <Sound url={deux} playStatus={Sound.status.PLAYING} />
              )}
              <input
                type="text"
                name="2"
                id="2"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
          </section>
          <section className="number-row">
            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="9"
              >
                neuf
              </button>
              {this.state.isPlaying9 && (
                <Sound url={neuf} playStatus={Sound.status.PLAYING} />
              )}{' '}
              <input
                type="text"
                name="9"
                id="9"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
            <section className="input-flexbox">
              {' '}
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="4"
              >
                quatre
              </button>
              {this.state.isPlaying4 && (
                <Sound url={quatre} playStatus={Sound.status.PLAYING} />
              )}
              <input
                type="text"
                name="4"
                id="4"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="7"
              >
                sept
              </button>
              {this.state.isPlaying7 && (
                <Sound url={sept} playStatus={Sound.status.PLAYING} />
              )}{' '}
              <input
                type="text"
                name="7"
                id="7"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
            <section className="input-flexbox">
              {' '}
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="6"
              >
                six
              </button>
              {this.state.isPlaying6 && (
                <Sound url={six} playStatus={Sound.status.PLAYING} />
              )}
              <input
                type="text"
                name="6"
                id="6"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
            <section className="input-flexbox">
              <button
                className="number-buttons-game"
                onClick={this.handleClick}
                id="5"
              >
                cinq
              </button>
              {this.state.isPlaying5 && (
                <Sound url={cinq} playStatus={Sound.status.PLAYING} />
              )}{' '}
              <input
                type="text"
                name="5"
                id="5"
                className="number-input"
                onChange={this.handleChange}
                required
              />
            </section>
          </section>
          <input type="submit" value="Check answers" />
        </form>
        {this.state.hasAttempted && !this.state.isIncorrect && (
          <div>
            <p>Yay! All correct</p>
            <Link to="/year_3/Lesson3">Next lesson</Link>
          </div>
        )}
        {this.state.hasAttempted && this.state.isIncorrect && (
          <div>
            <p>Not quite right</p>
            <button onClick={() => window.location.reload(false)}>
              Try again
            </button>
          </div>
        )}
      </main>
    );
  }
}

export default Y3Game2;
