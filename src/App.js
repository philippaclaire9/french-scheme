import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Year3Start from './Components/Year3Start';
import './App.css';
import Y3Lesson1 from './Components/Y3Lesson1';
import Y3Game1 from './Components/Y3Game1';
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
      </Router>
    </div>
  );
}

export default App;
