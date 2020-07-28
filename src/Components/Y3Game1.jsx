import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Boards from './Boards';
import Card from './Card';
import '../games.css';

class Y3Game1 extends Component {
  render() {
    return (
      <main className="flexbox">
        <Boards id="board-main" className="start-board">
          <Card id="bonjour-1" className="speaker-1">
            Bonjour
          </Card>
          <Card id="bonjour-2" className="speaker-2">
            Bonjour
          </Card>
        </Boards>
        <br />
        <br />
        <Boards id="board-1" className="receiver-board">
          1
        </Boards>
        <Boards id="board-2" className="receiver-board">
          2
        </Boards>

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
