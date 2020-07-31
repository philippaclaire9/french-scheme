import React, { Component } from 'react';
import '../lessons.css';
import ViewToggler2 from './ViewToggler2';
import ViewToggler3 from './ViewToggler3';
import ViewToggler4 from './ViewToggler4';
import ViewToggler5 from './ViewToggler5';
import ViewToggler6 from './ViewToggler6';
import ViewToggler7 from './ViewToggler7';
import ViewToggler8 from './ViewToggler8';
import ViewToggler9 from './ViewToggler9';
import { Link } from '@reach/router';
import Y3Lesson1audio from '../audio/Y3Lesson1audio.wav';
import Sound from 'react-sound';
import playbutton from '../images/playbutton.png';

class Y3Lesson1 extends Component {
  state = { isPlaying: false };
  handleClick = (event) => {
    //event.preventDefault();

    this.setState((currentState) => {
      return {
        isPlaying: !currentState.isPlaying,
      };
    });
  };
  render() {
    return (
      <main>
        <h2>Lesson 1- Greetings</h2>
        <p>
          Listen to this conversation in the comic strip. What do you think they
          are saying? If you're not sure, click below to see the translation
        </p>
        <section className="comic-strip">
          <button className="play" onClick={this.handleClick}>
            <img className="play-button" src={playbutton} alt="play" />
          </button>

          <br />
          {this.state.isPlaying && (
            <Sound url={Y3Lesson1audio} playStatus={Sound.status.PLAYING} />
          )}

          <ViewToggler2> </ViewToggler2>
          <br />
          <ViewToggler3></ViewToggler3>
          <br />
          <ViewToggler4></ViewToggler4>
          <br />
          <ViewToggler5></ViewToggler5>
          <br />
          <ViewToggler6></ViewToggler6>
          <br />
          <ViewToggler7></ViewToggler7>
          <br />
          <ViewToggler8></ViewToggler8>
          <br />
          <ViewToggler9></ViewToggler9>
        </section>

        <p>When you're ready, click below to test yourself in a game</p>
        <Link to="Game1">Game</Link>
        <br />

        <footer className="footer">
          <p>
            Icons made by{' '}
            <a
              className="footer"
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </a>{' '}
            from{' '}
            <a
              className="footer"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              {' '}
              www.flaticon.com
            </a>
          </p>
        </footer>
      </main>
    );
  }
}

export default Y3Lesson1;
