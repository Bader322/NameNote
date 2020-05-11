import React, { Component } from "react";
import Staff from "./staff";

class Questions extends Component {
  state = {
    answer: this.props.answer,
    notes: [
      //   Natural, sharps, flats respectively
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "a#",
      "b#",
      "c#",
      "d#",
      "e#",
      "f#",
      "g#",
      "ab",
      "bb",
      "cb",
      "db",
      "eb",
      "fb",
      "gb",
    ],
  };

  render() {
    console.log("answer" + this.state.answer);
    return <Staff />;
  }
}

export default Questions;
