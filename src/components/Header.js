import React from "react";
import UserMenu from "./UserMenu";
import TimeSheet from "./TimeSheet";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../logo.png";

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
