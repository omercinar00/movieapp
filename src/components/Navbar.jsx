import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <h3>Movie App</h3>
        </Link>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar