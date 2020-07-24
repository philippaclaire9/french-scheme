import React from 'react';
import { Link } from '@reach/router';

const Year3Start = () => {
  return (
    <main>
      <h2>Year 3</h2>

      <h3>
        Welcome to the Year 3 page. Click on lesson 1 below to get started
      </h3>
      <Link to="Lesson1">Lesson 1- Greetings</Link>
    </main>
  );
};

export default Year3Start;
