import React from 'react';
import logo from '../../images/t-logo.png'
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <Link to='/'>
          <img className="logo" src={logo} alt="turing logo" />
        </Link>
      </div>
      <div>
        <Collapsible
          transitionTime="150"
          trigger={<i className="fas fa-bars"></i>} >
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='contact'>Contact Us</NavLink>
          <NavLink to='contribute'>Contribute</NavLink>
        </Collapsible>
      </div>
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