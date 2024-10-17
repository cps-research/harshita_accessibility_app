import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css'; // Import your CSS file
import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ readElement }) => {
  return (
    <header role="banner">
      {/* Accessibility Bar */}
      <div className="accessibility-bar" aria-label="Accessibility Bar">
        <ul>
          <li><a href="#skip" tabIndex="0" aria-label="Skip to main content" onMouseEnter={() => readElement('Skip to main content')}>Skip to main content</a></li>
          <li><a href="#screen-reader" tabIndex="0" aria-label="Screen Reader Access" onMouseEnter={() => readElement('Screen Reader Access')}>Screen Reader Access</a></li>
        </ul>
        <ul className="accessibility-options">
          <li><a href="#increase-font" tabIndex="0" aria-label="Increase font size" onMouseEnter={() => readElement('Increase font size')}>A+</a></li>
          <li><a href="#decrease-font" tabIndex="0" aria-label="Decrease font size" onMouseEnter={() => readElement('Decrease font size')}>A-</a></li>
          <li><a href="#reset-font" tabIndex="0" aria-label="Reset font size" onMouseEnter={() => readElement('Reset font size')}>A</a></li>
          <li><a href="#color-theme" tabIndex="0" aria-label="Change color theme" onMouseEnter={() => readElement('Change color theme')}>Color Theme</a></li>
          <li><a href="#facebook" tabIndex="0" aria-label="Visit Facebook" onMouseEnter={() => readElement('Visit Facebook')}><i className="fab fa-facebook"></i></a></li>
          <li><a href="#twitter" tabIndex="0" aria-label="Visit Twitter" onMouseEnter={() => readElement('Visit Twitter')}><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>

      {/* Main Heading Section */}
      <div className="main-heading" role="heading" aria-level="1" tabIndex="0">
        <div className="logo-section" aria-label="Government of India Logo" tabIndex="0" onMouseEnter={() => readElement('Government of India Logo')}>
          <img src="/logo_en.png" alt="Government of India Logo" className="logo" />
        </div>
        <div className="search-section" role="search">
          <input type="text" placeholder="Enter your keywords" aria-label="Search input" tabIndex="0" onMouseEnter={() => readElement('Search input')} />
          <button type="submit" aria-label="Search" tabIndex="0" onMouseEnter={() => readElement('Search')}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar readElement={readElement} />
    </header>
  );
};

export default Header;
