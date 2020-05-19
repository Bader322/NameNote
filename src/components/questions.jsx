import React, { Component } from "react";
import Staff from "./staff";
class Questions extends Component {
  render() {
    return (
      <React.Fragment>
        <Staff
          nextNote={this.props.nextNote}
          // getChoices={this.getChoices}
          keyMapper={this.props.keyMapper}
          notesOnKeyBoardKeys={this.props.notesOnKeyBoardKeys}
          checkAnswer={this.props.checkAnswer}
          playButtonStyle={this.props.playButtonStyle}
          style={this.props.style}
          getRandomNotes={this.props.getRandomNotes}
          randomNote={this.props.randomNote}
          keysStyle={this.props.keysStyle}
          score={this.props.score}
          setTreble={this.props.setTreble}
          setBass={this.props.setBass}
          clef={this.props.clef}
        />
      </React.Fragment>
    );
  }
}
export default Questions;
