import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Year3Start from './Components/Year3Start';
import './App.css';
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Home path="/" />
        <Year3Start path="year_3" />
      </Router>
    </div>
  );
}

export default App;
