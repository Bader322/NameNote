import React, { Component } from 'react';
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
    state = {  }
    render() { 
        return (    
        <div className="container-fluid">
            <div className="row">
                <div className="col-md">
                    <div id="topBar">
                        <nav className="navbar">
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