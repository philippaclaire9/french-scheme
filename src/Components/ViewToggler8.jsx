import React, { Component } from 'react';
import '../lessons.css';

class ViewToggler8 extends Component {
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
            <p className="speaker-1a-lesson">Goodbye!</p>
          ) : (
            <p className="speaker-1-lesson">Au revoir</p>
          )}
        </button>
      </>
    );
  }
}

export default ViewToggler8;
