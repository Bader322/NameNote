import React, { Component } from "react";
import Questions from "./questions";
const notesOnKeyBoardKeys = ["a", "b", "c", "d", "e", "f", "g"];

class Question extends Component {
  constructor(props) {
    super(props);

    let randN =
      notesOnKeyBoardKeys[
        Math.floor(Math.random() * notesOnKeyBoardKeys.length)
      ];
    this.state = {
      keyMapper: ["/4", "/5", "/6"],
      randomNote: randN,
      notesOnKeyBoardKeys: notesOnKeyBoardKeys,
      style: {
        display: "",
      },
      keysStyle: { display: "none" },
      oldNote: randN,
      score: 0,
      
    };
  }

  getRandomNotes = () => {
    this.setState({ oldNote: this.state.randomNote });

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
    let style = { ...this.state.style };
    let keysStyle = { ...this.state.keysStyle };
    style.display = "none";
    keysStyle.display = "";
    this.setState({ style: style, keysStyle: keysStyle });
  };
  checkAnswer = (choiceNoteClicked) => {
    let { oldNote } = this.state;
    let score = this.state.score;

    console.log("clicked: ", choiceNoteClicked);

    // compare oldNote to what is picked for an answer
    if (choiceNoteClicked === oldNote) {
      this.setState({ score: score + 1 }, () =>
        console.log("Score:", this.state.score)
      );
      console.log("Correct!");
    } else {
      // Wrong answer
      console.log("Wrong answer!");
      console.log("Score:", this.state.score);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState:", prevState);
  }
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
        oldNote={this.state.oldNote}
        score={this.state.score}
        keysStyle={this.state.keysStyle}
      />
    );
  }
}

export default Question;
