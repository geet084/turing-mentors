import React from 'react';
import logo from '../../images/t-logo.png';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

export const Nav = () => {
  const links = ['Home', 'About', 'Contact Us', 'Contribute', 'Profile'];

  const linksList = links.map(link => {
    if (link === 'Home') {
      return <NavLink key={link} activeStyle={{ color: '#12f1fc' }} exact to='/'>{link}</NavLink>
    } else if (link.split(' ').length > 1) {
      return <NavLink key={link} activeStyle={{ color: '#12f1fc' }} to={link.split(' ')[0].toLowerCase()}>{link}</NavLink>
    } else {
      return <NavLink key={link} activeStyle={{ color: '#12f1fc' }} to={link.toLowerCase()}>{link}</NavLink>
    }
  });

  return (
    <nav className="nav">
      <div className="logo-container">
        <Link to='/'><img className="logo" src={logo} alt="turing logo" /></Link>
      </div>
      <Collapsible
        transitionTime={150}
        trigger={<i className="fas fa-bars"></i>} >
        {linksList}
      </Collapsible>
      <div className="links">
        {linksList}
      </div>
    </nav>
  )
}

export default Nav;