import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

function Routers() {
  return (
    <Router>
      <MainLayout>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default Routers;
