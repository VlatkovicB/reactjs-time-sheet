import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import TimeSheet from "./TimeSheet";
import Clients from "./Clients";
import Projects from "./Projects";
import TeamMembers from "./TeamMembers";
import Categories from "./Categories";
import Reports from "./Reports";

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

        <Switch>
          <Route path="/" exact component={TimeSheet} />
          <Route path="/clients" component={Clients} />
          <Route path="/projects" component={Projects} />
          <Route path="/categories" component={Categories} />
          <Route path="/teammembers" component={TeamMembers} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </nav>
    </div>
  );
};

export default Navbar;
