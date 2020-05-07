import React, { Component } from "react";
import Staff from "./staff";
class Questions extends Component {
  state = {
    note: this.props.note,
    notes: [
      //   Natural, sharps, flats respectively
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "as",
      "bs",
      "cs",
      "ds",
      "es",
      "fs",
      "gs",
      "af",
      "bf",
      "cf",
      "df",
      "ef",
      "ff",
      "gf",
    ],
  };

  render() {
    // console.log("Counter");
    // console.log(this.props);
    return null;
  }
}

export default Questions;
