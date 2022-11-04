import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <h3>Movie App</h3>
        </Link>
        <div>
          <button onClick={()=>navigate("/login")}>Login</button>
          <button onClick={()=>navigate("/register")}>Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar