import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <h1>
        <Link to="/">Bookshelf</Link>
      </h1>
    </div>
  );
}

export default NavBar;