import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import * as ReactBootStrap from "react-bootstrap"
import { FaSnowflake } from 'react-icons/fa';

import App from './app'
import Features from './Features/Features'
import Download from "./Download"
import Login from "./Login/Login"
import Contact from "./Contact"


const Navbar = () => {
  return (
    <Router>
      <ReactBootStrap.Navbar expand="sm" bg="none" variant="dark">
        <Link className="navbar-brand" to="/"><FaSnowflake className="element"/></Link>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavDropdown title="Actions" id="basic-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item target="_blank" href="https://marcoselian.github.io/Game2D">Game_2D</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item target="_blank" href="https://marcoselian.github.io/Game3D">Game_3D</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item target="_blank" href="https://portfolio-tau-ruddy.vercel.app/">Next_js</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item><Link className="nav-link" to="/Login">Login</Link></ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link><NavLink className="nav-link" to="/Contact">Contacts</NavLink></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><NavLink className="nav-link" to="/Features">Features</NavLink></ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/Features">
          <Features />
        </Route>
        <Route path="/Download">
          <Download />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar;
