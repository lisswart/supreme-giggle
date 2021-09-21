import React from 'react'
import { Link } from 'react-router-dom';

function NavBar({ setUser, user }) {
  
  function handleLogoutClick() {
    fetch('/api/logout', { method: "DELETE" })
      .then(r => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  return (
    <div className="header">
      <h1>
        <Link to="/">Bookshelf</Link>
      </h1>
      <h5>Welcome, {user.username}</h5>
      <nav className="nav">
        <Link to="/new">
          Add Book
        </Link>
        <button onClick={handleLogoutClick}
          style={{backgroundColor: "floralwhite", color: "chocolate"}}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
