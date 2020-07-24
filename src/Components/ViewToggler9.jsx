import React, { Component } from 'react';
import '../lessons.css';

class ViewToggler9 extends Component {
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
            <p className="speaker-2a">Goodbye!</p>
          ) : (
            <p className="speaker-2">Au revoir</p>
          )}
        </button>
      </>
    );
  }
}

export default ViewToggler9;
