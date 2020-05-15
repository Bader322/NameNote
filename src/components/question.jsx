import React, { Component } from "react";
import Questions from "./questions";

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesOnKeyBoardKeys: ["a", "b", "c", "d", "e", "f", "g"],
      keyMapper: ["/4", "/5", "/6"],
      randomNote: "a",
      answer: "",
      style: {
        display: "block",
      },
    };
  }
  state = {};

  getRandomNotes = () => {
    // a,b,c,d,e,f,g **** no accidentals yet
    let { notesOnKeyBoardKeys } = this.state;
    let { keyMapper } = this.state;
    let randomNote =
      notesOnKeyBoardKeys[
        Math.floor(Math.random() * notesOnKeyBoardKeys.length)
      ];

    let keyMapperRandom =
      keyMapper[Math.floor(Math.random() * keyMapper.length)];
    // return key format ie. "c/4" is middle c on the piano
    let nextNote = randomNote + keyMapperRandom;
    this.setState({ nextNote: nextNote, randomNote: randomNote });
  };
  playButtonStyle = () => {
    let style = { ...this.state.playButtonStyle };
    style.display = "none";
    this.setState({ style: style });
  };
  checkAnswer = (choiceNoteClicked, randomNote) => {
    console.log("clicked: ", choiceNoteClicked);
    console.log("Note was: ", randomNote);
  };

  render() {
    return (
      <Questions
        nextNote={this.state.nextNote}
        // getChoices={this.getChoices}
        keyMapper={this.state.keyMapper}
        notesOnKeyBoardKeys={this.state.notesOnKeyBoardKeys}
        checkAnswer={this.checkAnswer}
        playButtonStyle={this.playButtonStyle}
        style={this.state.style}
        randomNote={this.state.randomNote}
        getRandomNotes={this.getRandomNotes}
      />
    );
  }
}

export default Question;
