import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Boards from './Boards';
import Card from './Card';
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
  };

  handleClick = (e) => {
    console.log(e);
  };

  render() {
    return (
      <main>
        <p>
          Drag and drop the phrases into the correct order to create a
          conversation that makes sense and where the speakers take it in turns.
        </p>
        <section className="flexbox-1">
          <Boards id="board-main" className="start-board">
            <section className="board-flexbox">
              {' '}
              {this.state.speaker1Phrases.map((phrase) => {
                return (
                  <Card
                    id={`${phrase}-${
                      this.state.speaker1Phrases.indexOf(phrase) + 1
                    }`}
                    className="speaker-1"
                  >
                    {phrase}
                  </Card>
                );
              })}
            </section>
            <section className="board-flexbox">
              {this.state.speaker2Phrases.map((phrase) => {
                return (
                  <Card
                    id={`${phrase}-${
                      this.state.speaker2Phrases.indexOf(phrase) + 1
                    }`}
                    className="speaker-2"
                  >
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
          <Boards id="board-1" className="receiver-board">
            1
          </Boards>
          <Boards id="board-2" className="receiver-board">
            2
          </Boards>
          <Boards id="board-3" className="receiver-board">
            3
          </Boards>
          <Boards id="board-4" className="receiver-board">
            4
          </Boards>
        </section>
        <section className="flexbox-2">
          <Boards id="board-5" className="receiver-board">
            5
          </Boards>
          <Boards id="board-6" className="receiver-board">
            6
          </Boards>
          <Boards id="board-7" className="receiver-board">
            7
          </Boards>
          <Boards id="board-8" className="receiver-board">
            8
          </Boards>
        </section>

        <button onClick={this.handleClick}>Check answers</button>

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
