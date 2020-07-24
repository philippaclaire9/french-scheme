import React, { Component } from 'react';
import '../lessons.css';
import ViewToggler2 from './ViewToggler2';
import ViewToggler3 from './ViewToggler3';
import ViewToggler4 from './ViewToggler4';

class Y3Lesson1 extends Component {
  state = { reveal: false };
  handleClick = () => {
    if (this.state.reveal) {
      this.setState({ reveal: false });
    } else {
      this.setState({ reveal: true });
    }
  };
  render() {
    return (
      <main>
        <h2>Lesson 1- Greetings</h2>
        <p>
          Listen to this conversation in the comic strip. What do you think they
          are saying? If you're not sure, click below to see the translation
        </p>
        <section className="comic-strip">
          <ViewToggler2> </ViewToggler2>
          <br />
          <ViewToggler3></ViewToggler3>
          <br />
          <ViewToggler4></ViewToggler4>
          <p className="speaker-2">Je m'appelle Cléo</p>
          <p className="speaker-1">Ça va?</p>
          <p className="speaker-2">Ça va bien</p>
          <p className="speaker-1">Au revoir!</p>
          <p className="speaker-2">Au revoir!</p>{' '}
        </section>

        {/* <ViewToggler>
          <section className="comic-strip">
            <p className="speaker-1a">Hello!</p>
            <p className="speaker-2a">Hello!</p>
            <p className="speaker-1a">My name is Claude</p>
            <p className="speaker-2a">My name is Cléo</p>
            <p className="speaker-1a">How are you?</p>
            <p className="speaker-2a">I am good</p>
            <p className="speaker-1a">Goodbye!</p>
            <p className="speaker-2a">Goodbye!</p>{' '}
          </section>
        </ViewToggler> */}
      </main>
    );
  }
}

export default Y3Lesson1;
