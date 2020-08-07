import React, { Component } from 'react';
import Sound from 'react-sound';
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

class Y3Lesson2 extends Component {
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
  };

  handleClick = (event) => {
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

  render() {
    return (
      <main>
        <h2>Lesson 2- Numbers</h2>
        <p>Click on each number to listen to the French word</p>
        <section className="number-row">
          {' '}
          <button className="number-buttons" onClick={this.handleClick} id="1">
            1
            <br />
            un <br />
            <span class="ec ec-turtle" aria-label="turtle"></span>
          </button>
          {this.state.isPlaying1 && (
            <Sound url={un} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="2">
            2<br />
            deux <br />
            <span class="ec ec-leopard" aria-label="leopard"></span>
            <span class="ec ec-leopard" aria-label="leopard"></span>
          </button>
          {this.state.isPlaying2 && (
            <Sound url={deux} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="3">
            3<br />
            trois <br />
            <span class="ec ec-monkey" aria-label="monkey"></span>
            <span class="ec ec-monkey" aria-label="monkey"></span>
            <span class="ec ec-monkey" aria-label="monkey"></span>
          </button>
          {this.state.isPlaying3 && (
            <Sound url={trois} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="4">
            4<br />
            quatre <br />
            <span class="ec ec-pig2" aria-label="pig"></span>
            <span class="ec ec-pig2" aria-label="pig"></span>
            <span class="ec ec-pig2" aria-label="pig"></span>
            <span class="ec ec-pig2" aria-label="pig"></span>
          </button>
          {this.state.isPlaying4 && (
            <Sound url={quatre} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="5">
            5<br />
            cinq
            <br />
            <span class="ec ec-whale" aria-label="whale"></span>
            <span class="ec ec-whale" aria-label="whale"></span>
            <span class="ec ec-whale" aria-label="whale"></span>
            <span class="ec ec-whale" aria-label="whale"></span>
            <span class="ec ec-whale" aria-label="whale"></span>
          </button>
          {this.state.isPlaying5 && (
            <Sound url={cinq} playStatus={Sound.status.PLAYING} />
          )}
        </section>
        <section className="number-row">
          {' '}
          <button className="number-buttons" onClick={this.handleClick} id="6">
            6<br />
            six
            <br />
            <span class="ec ec-chipmunk" aria-label="chipmunk"></span>
            <span class="ec ec-chipmunk" aria-label="chipmunk"></span>
            <span class="ec ec-chipmunk" aria-label="chipmunk"></span>
            <span class="ec ec-chipmunk" aria-label="chipmunk"></span>
            <span class="ec ec-chipmunk" aria-label="chipmunk"></span>
            <br />
            <span class="ec ec-chipmunk" aria-label="chipmunk"></span>
          </button>
          {this.state.isPlaying6 && (
            <Sound url={six} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="7">
            7<br />
            sept <br />
            <span class="ec ec-bat" aria-label="bat"></span>
            <span class="ec ec-bat" aria-label="bat"></span>
            <span class="ec ec-bat" aria-label="bat"></span>
            <span class="ec ec-bat" aria-label="bat"></span>
            <span class="ec ec-bat" aria-label="bat"></span>
            <br />
            <span class="ec ec-bat" aria-label="bat"></span>
            <span class="ec ec-bat" aria-label="bat"></span>
          </button>
          {this.state.isPlaying7 && (
            <Sound url={sept} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="8">
            8<br />
            huit
            <br />
            <span class="ec ec-squid" aria-label="squid"></span>
            <span class="ec ec-squid" aria-label="squid"></span>{' '}
            <span class="ec ec-squid" aria-label="squid"></span>{' '}
            <span class="ec ec-squid" aria-label="squid"></span>{' '}
            <span class="ec ec-squid" aria-label="squid"></span>
            <br /> <span class="ec ec-squid" aria-label="squid"></span>{' '}
            <span class="ec ec-squid" aria-label="squid"></span>{' '}
            <span class="ec ec-squid" aria-label="squid"></span>
          </button>
          {this.state.isPlaying8 && (
            <Sound url={huit} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="9">
            9<br />
            neuf <br />
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <br />
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
            <span class="ec ec-blowfish" aria-label="blowfish"></span>
          </button>
          {this.state.isPlaying9 && (
            <Sound url={neuf} playStatus={Sound.status.PLAYING} />
          )}
          <button className="number-buttons" onClick={this.handleClick} id="X">
            10
            <br />
            dix <br />
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <br />
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
            <span class="ec ec-honeybee"></span>
          </button>
          {this.state.isPlayingX && (
            <Sound url={dix} playStatus={Sound.status.PLAYING} />
          )}
        </section>
        <p>When you feel confident, click the link below to go to the game</p>
        <Link to="Game2">To the game!...</Link>
      </main>
    );
  }
}

export default Y3Lesson2;
