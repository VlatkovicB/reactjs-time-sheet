import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/" exact className="btn nav">
              TimeSheet
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className="btn nav">
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="btn nav">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className="btn nav">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/teammembers" className="btn nav">
              Team Members
            </NavLink>
          </li>
          <li className="last">
            <NavLink to="/reports" className="btn nav">
              Reports
            </NavLink>
          </li>
        </ul>
        <span className="line" />
      </nav>
    </div>
  );
};

export default Navbar;
