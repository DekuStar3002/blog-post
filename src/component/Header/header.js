import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <p>The Artifact</p>
        <p>Culture & Art blog</p>
      </div>
      <div className='navbar'>
        <a href='#blog'>Blog</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}

export default Header;