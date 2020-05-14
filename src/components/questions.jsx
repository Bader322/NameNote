import React, { Component } from "react";
import Staff from "./staff";
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyMapper: ["/3", "/4", "/5", "/6"],
      notesOnKeyBoard: [
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
      style: {
        display: "block",
      },
    };
  }

  wrongNotes = (nextNote) => {
    const wrongNotes = this.state.notesOnKeyBoard.filter(function (
      currentNote
    ) {
      return currentNote !== nextNote;
    });
    return wrongNotes;
  };

  getRandomNotes = () => {
    // a,b,c,d,e,f,g **** no accidentals yet
    let { notesOnKeyBoard } = this.state;
    let { keyMapper } = this.state;
    let randomNote =
      notesOnKeyBoard[Math.floor(Math.random() * notesOnKeyBoard.length)];

    let keyMapperRandom =
      keyMapper[Math.floor(Math.random() * keyMapper.length)];
    // return key format ie. "c/4" is middle c on the piano
    let nextNote = randomNote + keyMapperRandom;
    this.setState({ nextNote: nextNote });
  };
  playButtonStyle = () => {
    let style = { ...this.state.playButtonStyle };
    style.display = "none";
    this.setState({ style: style });
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
          notesOnKeyBoard={this.state.notesOnKeyBoard}
          checkAnswer={this.checkAnswer}
          playButtonStyle={this.playButtonStyle}
          style={this.state.style}
        />
      </React.Fragment>
    );
  }
}
export default Questions;
