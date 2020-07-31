import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Boards from './Boards';
import Card from './Card';
import { Link } from '@reach/router';
import '../games.css';

class Y3Game1 extends Component {
  state = {
    speaker1Phrases: ["Je m'appelle Claude", 'Ça va?', 'Bonjour', 'Au revoir'],
    speaker2Phrases: [
      'Au revoir',
      'Bonjour',
      'Ça va bien',
      "Je m'appelle Cléo",
    ],
    correctAnswers: 0,
    isCorrect: false,
    hasIncorrectlyAttempted: false,
  };

  handleClick = (e) => {
    if (this.state.correctAnswers === 8) {
      this.setState({ isCorrect: true });
    } else {
      this.setState({ hasIncorrectlyAttempted: true });
    }
  };

  addAnswers = () => {
    this.setState(
      (prevState) => {
        return { correctAnswers: prevState.correctAnswers++ };
      },
      () => {
        console.log(this.state.correctAnswers);
      }
    );
  };

  render() {
    return (
      <main>
        <p>
          Drag and drop the phrases into the correct order to create a
          conversation that makes sense and where the speakers take it in turns.
        </p>
        <section className="flexbox-1">
          <Boards
            id="board-main"
            className="start-board"
            addAnswers={this.addAnswers}
          >
            <section className="board-flexbox">
              {' '}
              {this.state.speaker1Phrases.map((phrase) => {
                return (
                  <Card id={phrase} className="speaker-1">
                    {phrase}
                  </Card>
                );
              })}
            </section>
            <section className="board-flexbox">
              {this.state.speaker2Phrases.map((phrase) => {
                return (
                  <Card id={phrase} className="speaker-2">
                    {phrase}
                  </Card>
                );
              })}
            </section>

            {/* {this.state.speaker1Phrases.map(phrase => { return 
              (<Card id={`${phrase}-${phrase.index+1}` className="speaker-1"}>{phrase}</Card>)
            })} */}
          </Boards>
        </section>
        <section className="flexbox-2">
          <Boards
            id="Bonjour"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            1
          </Boards>
          <Boards
            id="Bonjour"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            2
          </Boards>
          <Boards
            id="Je m'appelle Claude"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            3
          </Boards>
          <Boards
            id="Je m'appelle Cléo"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            4
          </Boards>
        </section>
        <section className="flexbox-2">
          <Boards
            id="Ça va?"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            5
          </Boards>
          <Boards
            id="Ça va bien"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            6
          </Boards>
          <Boards
            id="Au revoir"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            7
          </Boards>
          <Boards
            id="Au revoir"
            className="receiver-board"
            addAnswers={this.addAnswers}
          >
            8
          </Boards>
        </section>
        {/* {this.state.isCorrect && ( */}
        <div>
          {' '}
          <p>Wahooo!! All correct!</p>{' '}
          <Link to="/year_3/Lesson2">Next lesson</Link>
        </div>
        )}
        {this.state.hasIncorrectlyAttempted && (
          <p>Oops, not quite right this time, try again</p>
        )}
        <button onClick={this.handleClick} className="check-button">
          Check answers
        </button>
        {/* <Draggable>
          <div className="speaker-1">Bonjour</div>
        </Draggable>
        <Draggable>
          <div className="speaker-2">Bonjour</div>
        </Draggable>
        <Draggable>
          <div className="speaker-1">Je m'appelle Claude</div>
        </Draggable>
        <Draggable>
          <div className="speaker-2">Je m'appelle Cléo</div>
        </Draggable>
        <div className="box"></div> */}
      </main>
    );
  }
}

export default Y3Game1;
