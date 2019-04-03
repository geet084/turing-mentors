import React from 'react';
import logo from '../../images/t-logo.png'
import { Link, NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <Link to='/'>
        <img className="logo" src={logo} alt="turing logo" />
      </Link>
      <p className="hamburger">
        <i className="fas fa-bars"></i>
      </p>
      <div className="links">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
        <NavLink to='contribute'>Contribute</NavLink>
      </div>
    </nav>
  )
}

export default Nav;