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
          transitionTime={150}
          trigger={<i className="fas fa-bars"></i>} >
          <NavLink activeStyle={{ color: '#12f1fc' }} exact to='/'>Home</NavLink>
          <NavLink activeStyle={{ color: '#12f1fc' }} to='/about'>About</NavLink>
          <NavLink activeStyle={{ color: '#12f1fc' }} to='/contact'>Contact Us</NavLink>
          <NavLink activeStyle={{ color: '#12f1fc' }} to='/contribute'>Contribute</NavLink>
          <NavLink activeStyle={{ color: '#12f1fc' }} to='/profile'>Profile</NavLink>
        </Collapsible>
      </div>
      <div className="links">
        <NavLink activeStyle={{ color: '#12f1fc' }} exact to='/'>Home</NavLink>
        <NavLink activeStyle={{ color: '#12f1fc' }} to='/about'>About</NavLink>
        <NavLink activeStyle={{ color: '#12f1fc' }} to='/contact'>Contact Us</NavLink>
        <NavLink activeStyle={{ color: '#12f1fc' }} to='/contribute'>Contribute</NavLink>
        <NavLink activeStyle={{ color: '#12f1fc' }} to='/profile'>Profile</NavLink>
      </div>
    </nav>
  )
}

export default Nav;