import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id='header'>
      <Link className='logo' to='/'>
        <strong>Editorial</strong>
      </Link>
      <ul className='icons'>
        <li>
          <Link className='icon fa-twitter' to='/'>
            <span className='label'>Twitter</span>
          </Link>
        </li>
        <li>
          <Link className='icon fa-facebook' to='/'>
            <span className='label'>Facebook</span>
          </Link>
        </li>
        <li>
          <Link className='icon fa-snapchat-ghost' to='/'>
            <span className='label'>Snapchat</span>
          </Link>
        </li>
        <li>
          <Link className='icon fa-instagram' to='/'>
            <span className='label'>Instagram</span>
          </Link>
        </li>
        <li>
          <Link className='icon fa-medium' to='/'>
            <span className='label'>Medium</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
