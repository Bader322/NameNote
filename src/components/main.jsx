import React, { Component } from "react";
import Counters from "./counters";
import NavBar from "./navBar";
import Staff from "../components/staff";
export default class main extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Counters />
        <Staff />
      </React.Fragment>
    );
  }
}
