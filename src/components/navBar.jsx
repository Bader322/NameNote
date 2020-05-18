import React, { Component } from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div id="topBar">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="nothing">
            {" "}
            <FontAwesomeIcon icon={faMusic} size="lg" />
            <span id="title">NameNote</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
