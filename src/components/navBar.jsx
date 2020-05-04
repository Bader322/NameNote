import React, { Component } from 'react';
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
    state = {  }
    render() { 
        return (    
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="topBar">
                        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                            <ul>
                                <li>
                                   <a href=""> <FontAwesomeIcon icon={faMusic} size="lg"/><span id='title'>NameNote</span></a>
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