import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Fit-For-All
          <img className="headIcon" src="https://img.icons8.com/ios/50/ffffff/strength.png" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/smartCalorie'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Smart Calorie
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              BMI
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/doctor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Doctor
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/hi' className='nav-links' style={{color: "green"}} onClick={closeMobileMenu}>
            A/आ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
