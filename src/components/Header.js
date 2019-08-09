import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.png";
import UserMenu from "./UserMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar" />
      <div className="wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="VegaITSourcing Timesheet" />
        </Link>
        <UserMenu />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
