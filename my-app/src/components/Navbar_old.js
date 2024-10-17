import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/navbar.css';  // Import your CSS for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="dropdown">
        <NavLink to="/about" className="dropdown-toggle">About MeitY</NavLink>
        <ul className="dropdown-menu">
          <li><NavLink to="/vision-mission">Vision & Mission</NavLink></li>
          <li><NavLink to="/org-chart">Organization Chart</NavLink></li>
          <li><NavLink to="/functions">Functions of MeitY</NavLink></li>
          <li><NavLink to="/whos-who">Who's who</NavLink></li>
          <li><NavLink to="/official-language">Official Language Activities</NavLink></li>
          <li><NavLink to="/citizens-charter">Citizens' Charter</NavLink></li>
          <li><NavLink to="/vigilance">Vigilance & Grievances</NavLink></li>
          <li><NavLink to="/acts-rules">Acts & Rules</NavLink></li>
          <li><NavLink to="/policies-guidelines">Policies & Guidelines</NavLink></li>
          <li><NavLink to="/schemes-services">Schemes & Services</NavLink></li>
          <li><NavLink to="/integrated-finances">Integrated Finances</NavLink></li>
          <li><NavLink to="/performance-management">Performance Management</NavLink></li>
          <li><NavLink to="/chief-controller">Chief Controller of Accounts</NavLink></li>
          <li><NavLink to="/web-info-manager">Web Information Manager</NavLink></li>
        </ul>
      </li>
      <li>
        <NavLink to="/groups">Groups</NavLink>
      </li>
      <li>
        <NavLink to="/organizations">Organizations</NavLink>
      </li>
      <li>
        <NavLink to="/rti">RTI</NavLink>
      </li>
      <li className="dropdown">
        <NavLink to="/tender" className="dropdown-toggle">Notifications</NavLink>
        <ul className="dropdown-menu">
          <li><NavLink to="/tender">Tender</NavLink></li>
          <li><NavLink to="/vacancies">Vacancies</NavLink></li>
          <li><NavLink to="/press-release">Press Releases</NavLink></li>
          <li><NavLink to="/office-memorandum">Office Memorandum (OMs)</NavLink></li>
          <li><NavLink to="/content/documents-and-publications">Documents & Publications / Reports</NavLink></li>
          <li><NavLink to="/content/gazettes">Gazettes Notifications</NavLink></li>
        </ul>
      </li>
      <li>
        <NavLink to="/section69a">Section 69A of IT Act</NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
