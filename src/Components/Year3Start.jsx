import React from 'react';
import { Link } from '@reach/router';

const Year3Start = () => {
  return (
    <main>
      <h2>Year 3</h2>

      <h3>
        Welcome to the Year 3 page. Click on lesson 1 below to get started
      </h3>
      <Link to="Lesson1" className="lesson-links">
        Lesson 1- Greetings
      </Link>
      <br />
      <Link to="Lesson2" className="lesson-links">
        Lesson 2- Numbers
      </Link>
      <br />
      <Link to="Lesson3" className="lesson-links">
        Lesson 3- Colours
      </Link>
    </main>
  );
};

export default Year3Start;
