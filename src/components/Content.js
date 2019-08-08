import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TimeSheet from "./TimeSheet";
import Clients from "./Clients";
import Projects from "./Projects";
import TeamMembers from "./TeamMembers";
import Categories from "./Categories";
import Reports from "./Reports";

const Content = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={TimeSheet} />
        <Route path="/timesheet" component={TimeSheet} />
        <Route path="/clients" component={Clients} />
        <Route path="/projects" component={Projects} />
        <Route path="/categories" component={Categories} />
        <Route path="/teammembers" component={TeamMembers} />
        <Route path="/reports" component={Reports} />
      </Switch>
    </div>
  );
};

export default Content;
