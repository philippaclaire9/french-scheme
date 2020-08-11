import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Year3Start from './Components/Year3Start';
import Y3Lesson1 from './Components/Y3Lesson1';
import Y3Game1 from './Components/Y3Game1';
import './App.css';
import Y3Lesson2 from './Components/Y3Lesson2';
import Y3Game2 from './Components/Y3Game2';
import Y3Lesson3 from './Components/Y3Lesson3';

function App() {
  return (
    <div className="App">
      <h1 className="header">French appy app app</h1>
      <Nav />
      <Router primary={false}>
        <Home path="/" />
        <Year3Start path="year_3" />
        <Y3Lesson1 path="year_3/Lesson1" />
        <Y3Game1 path="year_3/Lesson1/Game1" />
        <Y3Lesson2 path="year_3/Lesson2" />
        <Y3Game2 path="year_3/Lesson2/Game2" />
        <Y3Lesson3 path="year_3/Lesson3" />
      </Router>
    </div>
  );
}

export default App;
