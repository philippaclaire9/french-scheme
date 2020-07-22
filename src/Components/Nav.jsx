import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <Link to="year_3">Year 3</Link>
      <Link to="year_4">Year 4</Link>
      <Link to="year_5">Year 5</Link>
      <Link to="year_6">Year 6</Link>
    </nav>
  );
};

export default Nav;
