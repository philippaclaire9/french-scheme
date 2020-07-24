import React, { Component } from 'react';
import '../lessons.css';

class ViewToggler3 extends Component {
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
            <p className="speaker-1a">My name is Claude</p>
          ) : (
            <p className="speaker-1">Je m'appelle Claude</p>
          )}
        </button>
      </>
    );
  }
}

export default ViewToggler3;
