import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
      <div className="nav-container">
        <div className="logo">
          <Link style={{ textDecoration: 'none'}} to="/">Logo</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
