import React, { Component } from 'react';
import '../lessons.css';
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

class Y3Lesson3 extends Component {
  state = {
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
    currentColour: iblanc,
    currentNumber: 0,
    currentWord: 'blanc',
  };

  handleRightClick = () => {
    if (this.state.currentNumber < 11) {
      this.setState(
        (prevState) => ({
          currentColour: this.state.colours[this.state.currentNumber],
          currentWord: this.state.words[this.state.currentNumber],
          currentNumber: prevState.currentNumber + 1,
        }),
        () => {
          console.log(this.state.currentNumber);
        }
      );
    }

    if (this.state.currentNumber === 11) {
      this.setState(
        {
          currentNumber: 0,
          currentColour: this.state.colours[0],
          currentWord: this.state.words[0],
        },
        () => {
          console.log(this.state.currentNumber);
        }
      );
    }
  };

  handleLeftClick = () => {
    if (this.state.currentNumber !== 0) {
      this.setState(
        (prevState) => ({
          currentColour: this.state.colours[this.state.currentNumber],
          currentWord: this.state.words[this.state.currentNumber],
          currentNumber: prevState.currentNumber - 1,
        }),
        () => {
          console.log(this.state.currentNumber);
        }
      );
    }

    if (this.state.currentNumber === 0) {
      this.setState(
        {
          currentNumber: 10,
          currentColour: this.state.colours[10],
          currentWord: this.state.words[10],
        },
        () => {
          console.log(this.state.currentNumber);
        }
      );
    }
  };

  render() {
    return (
      <main>
        <h2>Lesson 3- Colours</h2>
        <p>
          Click on the flashcards below to hear the word for the colour. Try
          saying it out loud after you hear it. Click next when you're ready to
          see and hear the next colour.
        </p>
        <div className="colour-section">
          <section className="colour-container">
            {' '}
            <button onClick={this.handleLeftClick}>
              <i class="em em-arrow_left" aria-label="LEFTWARDS BACK ARROW"></i>
            </button>
            <img
              className="colour-box"
              src={this.state.currentColour}
              alt="blue"
            ></img>
            <button onClick={this.handleRightClick}>
              <i
                class="em em-arrow_right"
                aria-label="RIGHTWARDS NEXT ARROW"
              ></i>
            </button>
            <p>{this.state.currentWord}</p>
          </section>
        </div>
      </main>
    );
  }
}

export default Y3Lesson3;
