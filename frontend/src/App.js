import React, { Component } from "react";
import "./css/pure-min.css";
import "./css/side-menu.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import AuthorBox from "./components/author";
import Home from "./components/home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="layout">
          <a href="#menu" id="menuLink" className="menu-link">
            <span />
          </a>

          <div id="menu">
            <div className="pure-menu">
              <a className="pure-menu-heading" href="/">
                Company
              </a>

              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link to="/" className="pure-menu-link">
                    Home
                  </Link>
                </li>
                <li className="pure-menu-item">
                  <Link to="/authors" className="pure-menu-link">
                    Authors
                  </Link>
                </li>
                <li className="pure-menu-item">
                  <Link to="/" className="pure-menu-link">
                    Books
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authors" component={AuthorBox} />
            <Route exact path="/books" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
