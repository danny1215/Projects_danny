import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

import CreateDevelopers from "./components/create-developers.js";
import EditDevelopers from "./components/edit-developers.js";
import ListDevelopers from "./components/list-developers";
import createProjects from "./components/create-projects.js";
import ListProjects from "./components/list-projects";
import DeleteDevelopers from "./components/delete-developers";
import EditProjects from "./components/edit-projects";
import DeleteProjects from "./components/delete-projects";

// import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" bg="transparent" expand="lg">
            <a className="navbar-brand" href="" target="_blank">
              {/* <img src={logo} width="30" height="30" alt="" /> */}
            </a>
            <Link to="/" className="navbar-brand">PROJECT-MANAGEMENT</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">DEVELOPERS</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">CREATE DEVELOPERS</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add/Project" className="nav-link">CREATE PROJECT</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Project" className="nav-link"> PROJECTS</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ListDevelopers} />
          <Route path="/edit/:id" component={EditDevelopers} />
          <Route path="/delete/:id" component={DeleteDevelopers} />
          <Route path="/create" component={CreateDevelopers} />
          <Route path="/add/Project" component={createProjects}/>
          <Route path="/Project" component={ListProjects}/>
          <Route path="/list/edit/:id" component={EditProjects}/>
          <Route path="/list/delete/:id" component={DeleteProjects} />
        </div>
      </Router>
    );
  }
}

export default App;