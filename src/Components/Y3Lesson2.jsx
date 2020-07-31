import React, { Component } from 'react';
import Sound from 'react-sound';
import un from '../audio/un.wav';
import deux from '../audio/deux.wav';
class Y3Lesson2 extends Component {
  state = { isPlaying1: false, isPlaying2: false };
  handleClick1 = (event) => {
    console.log(event);
    this.setState({ isPlaying1: true });
  };
  handleClick2 = (event) => {
    console.log(event);
    this.setState({ isPlaying2: true });
  };
  render() {
    return (
      <main>
        <h2>Lesson 2- Numbers</h2>
        <p>Click on each number to listen to the French word</p>
        <button onClick={this.handleClick1} id="1">
          1
        </button>
        {this.state.isPlaying1 && (
          <Sound url={un} playStatus={Sound.status.PLAYING} />
        )}
        <button onClick={this.handleClick2} id="2">
          2
        </button>
        {this.state.isPlaying2 && (
          <Sound url={deux} playStatus={Sound.status.PLAYING} />
        )}
      </main>
    );
  }
}

export default Y3Lesson2;
