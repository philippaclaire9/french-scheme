import React from 'react';
import { Link } from '@reach/router';
import '../App.css';

const Nav = () => {
  return (
    <nav>
      <Link className="nav-links" to="/">
        Home
      </Link>
      <Link className="nav-links" to="year_3">
        Year 3
      </Link>
      <Link className="nav-links" to="year_4">
        Year 4
      </Link>
      <Link className="nav-links" to="year_5">
        Year 5
      </Link>
      <Link className="nav-links" to="year_6">
        Year 6
      </Link>
    </nav>
  );
};

export default Nav;
