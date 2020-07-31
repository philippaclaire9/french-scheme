import React from 'react';
import { Link } from '@reach/router';
import Y3Lesson1 from './Y3Lesson1';
import Y3Game1 from './Y3Game1';
import Y3Lesson2 from './Y3Lesson2';

const Year3Start = () => {
  return (
    <main>
      <h2>Year 3</h2>

      <h3>
        Welcome to the Year 3 page. Click on lesson 1 below to get started
      </h3>
      <Link to="Lesson1">Lesson 1- Greetings</Link>
      <br />
      <Link to="Lesson2">Lesson 2- Numbers</Link>
    </main>
  );
};

export default Year3Start;
