import React, { Component } from 'react';
import '../lessons.css';

class ViewToggler6 extends Component {
  state = { isVisible: false };
  handleClick = () => {
    this.setState((currentState) => {
      return {
        isVisible: !currentState.isVisible,
      };
    });
  };
  render() {
    return (
      <>
        {' '}
        <button className="button" onClick={this.handleClick}>
          {this.state.isVisible ? (
            <p className="speaker-1a-lesson">How are you?</p>
          ) : (
            <p className="speaker-1-lesson">Ça va?</p>
          )}
        </button>
      </>
    );
  }
}

export default ViewToggler6;
