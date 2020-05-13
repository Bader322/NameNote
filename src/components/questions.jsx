import React, { Component } from "react";
import Staff from "./staff";
class Questions extends Component {
  state = {
    keyMapper: ["/3", "/4", "/5", "/6"],
    noteOnKeyBoard: [
      //   Natural, sharps, flats respectively
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
    ],
    nextNote: "a/4",
    wrongNotes: ["b", "c", "d", "e", "f", "g"],
    answer: "",
  };

  wrongNotes = (nextNote) => {
    const wrongNotes = this.state.noteOnKeyBoard.filter(function (currentNote) {
      return currentNote !== nextNote;
    });
    return wrongNotes;
  };

  getRandomNotes = () => {
    // a,b,c,d,e,f,g **** no accidentals yet
    let { noteOnKeyBoard } = this.state;
    let { keyMapper } = this.state;
    let randomNote =
      noteOnKeyBoard[Math.floor(Math.random() * noteOnKeyBoard.length)];
    console.log("In getRandomNotes");
    let keyMapperRandom =
      keyMapper[Math.floor(Math.random() * keyMapper.length)];
    // return key format ie. "c/4" is middle c on the piano
    let nextNote = randomNote + keyMapperRandom;
    let wrongNotes = this.wrongNotes(randomNote);
    this.setState({ nextNote: nextNote, wrongNotes: wrongNotes });
  };

  renderChoices = (correctAnswer) => {
    let { noteOnKeyBoard } = this.state;
    let index = noteOnKeyBoard.indexOf(correctAnswer);
    if (noteOnKeyBoard[index] === correctAnswer) console.log("its correct");
    else console.log("wrong answer");
  };

  render() {
    return (
      <React.Fragment>
        <Staff
          getRandomNotes={this.getRandomNotes}
          nextNote={this.state.nextNote}
          wrongNotes={this.state.wrongNotes}
          // getChoices={this.getChoices}
          keyMapper={this.state.keyMapper}
          noteOnKeyBoard={this.state.noteOnKeyBoard}
        />
      </React.Fragment>
    );
  }
}
export default Questions;
