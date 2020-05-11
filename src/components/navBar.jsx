import React, { Component } from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container-fuild">
        <div className="row">
          <div className="col-md">
            <div id="topBar">
              <nav className="navbar navbar-light bg-light">
                <ul>
                  <li>
                    <a href="nothing">
                      {" "}
                      <FontAwesomeIcon icon={faMusic} size="lg" />
                      <span id="title">NameNote</span>
                    </a>
                    <span className="totalCounters badge-pill badge-secondary">
                      How many items counted: {this.props.summedCounters}
                    </span>
                    <br />
                    <span className="totalCounters badge-pill badge-secondary">
                      How many are active: {this.props.countersOn}
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
