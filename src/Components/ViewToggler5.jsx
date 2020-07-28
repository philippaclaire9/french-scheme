import React, { Component } from 'react';
import '../lessons.css';

class ViewToggler5 extends Component {
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
            <p className="speaker-2a-lesson">My name is Cléo</p>
          ) : (
            <p className="speaker-2-lesson">Je m'appelle Cléo</p>
          )}
        </button>
      </>
    );
  }
}

export default ViewToggler5;
