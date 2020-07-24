import React, { Component } from 'react';
import '../lessons.css';

class ViewToggler7 extends Component {
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
            <p className="speaker-2a">I'm good</p>
          ) : (
            <p className="speaker-2">Ça va bien</p>
          )}
        </button>
      </>
    );
  }
}

export default ViewToggler7;
