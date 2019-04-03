import React from 'react';
import logo from '../../images/t-logo.png'

export const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <img className="logo" src={logo} alt="turing logo" />
      </div>
      <p className="hamburger">
        <i className="fas fa-bars"></i>
      </p>
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Contribute</li>
      </ul>
    </nav>
  )
}

export default Nav;