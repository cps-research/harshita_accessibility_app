import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { navLinks } from './linksData'; // Import the links data
import '../Styles/navbar.css';  // Import your CSS for the navbar

const Navbar = ({ readElement }) => {
  return (
    <nav className="navbar" aria-label="Main Navigation" role="navigation">
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li key={index} className={link.children ? "dropdown" : ""}>
            <NavLink 
              to={link.path} 
              className={link.children ? "dropdown-toggle" : ""}
              tabIndex="0"
              onMouseEnter={() => readElement(link.name)}
            >
              {link.name}
            </NavLink>
            {link.children && (
              <ul className="dropdown-menu" aria-label={`Submenu for ${link.name}`}>
                {link.children.map((child, idx) => (
                  <li key={idx}>
                    <NavLink 
                      to={child.path} 
                      tabIndex="0" 
                      onMouseEnter={() => readElement(child.name)}
                    >
                      {child.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;